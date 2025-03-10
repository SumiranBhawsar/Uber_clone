import { asyncHandler } from "../utils/asyncHandler.js";
import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generatAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);

        const accessToken = await user.generatAccessToken();
        const refreshToken = await user.generatRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating tokens");
    }
};

const registerUser = asyncHandler(async (req, res, next) => {
    const errors = await validationResult(req);

    if (!errors.isEmpty()) {
        throw new ApiError(400, "Invalid details");
    }

    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
        throw new ApiError(400, "User already exists");
    }

    const user = await User.create({
        fullname: {
            firstname: firstname.toLowerCase(),
            lastname: lastname.toLowerCase(),
        },
        email,
        password,
    });

    // console.log(user);
    

    const createdUser = await User.findOne(user._id).select(
        "-password -socketId -refreshToken"
    );

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while creating a user");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(201, "User registered successfully", createdUser)
        );
});

const loginUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validate - not empty
    // check if user exist : username and password
    // generate refresh token and save it in db
    // return response

    const errors = await validationResult(req);

    if (!errors.isEmpty()) {
        throw new ApiError(401, "Invalid details");
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(401, "Inavalid email or password");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Inavalid email or password");
    }

    const { accessToken, refreshToken } = await generatAccessAndRefreshToken(
        user._id
    );

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accessToken", accessToken, options)
        .json(
            new ApiResponse(
                201,
                {
                    user: loggedInUser,
                    accessToken,
                },
                "User logged in successfully"
            )
        );
});

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user,
        {
            $set: {
                refreshToken: "", // this removes the field from document
            },
        },
        {
            new: true,
        }
    );

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged Out"));
});

const getProfile = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, req.user, "User profile"));
});

export { registerUser, loginUser, logoutUser, getProfile };
