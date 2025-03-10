import { Captain } from "../models/captain.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validationResult } from "express-validator";

const generatAccessAndRefreshToken = async (captainId) => {
    try {
        const captain = await Captain.findById(captainId);

        const accessToken = await captain.generatAccessToken();
        const refreshToken = await captain.generatRefreshToken();

        captain.refreshToken = refreshToken;
        await captain.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating tokens");
    }
};

const captainRegister = asyncHandler(async (req, res) => {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
        throw new ApiError(400, `Invalid details ${errors.message}`);
    }

    const {
        fullname,
        email,
        password,
        model,
        color,
        vehicleType,
        licensePlate,
        capacity,
    } = req.body;

    if (
        !fullname ||
        !email ||
        !password ||
        !model ||
        !color ||
        !vehicleType ||
        !capacity
    ) {
        throw new ApiError(400, "All fields are required");
    }

    // Ensure license plate is not null or empty
    if (licensePlate && typeof licensePlate !== "string") {
        throw new ApiError(400, "Invalid license plate format");
    }

    // Check if captain already exists by email
    const captainExists = await Captain.findOne({ email });
    if (captainExists) {
        throw new ApiError(400, "Captain already exists with this email");
    }

    try {
        const captain = await Captain.create({
            fullname: fullname.toLowerCase(),
            email,
            password,
            vehicle: {
                model,
                color,
                vehicleType,
                capacity,
                licensePlate: licensePlate || null, // Ensure null is stored if empty
            },
        });

        const createdCaptain = await Captain.findById(captain._id).select(
            "-password -socketId -refreshToken"
        );

        if (!createdCaptain) {
            throw new ApiError(
                500,
                "Something went wrong while creating the captain"
            );
        }

        return res
            .status(201)
            .json(
                new ApiResponse(
                    201,
                    "Captain registered successfully",
                    createdCaptain
                )
            );
    } catch (error) {
        if (error.code === 11000) {
            // Handle duplicate key error based on the field
            if (error.keyPattern?.email) {
                throw new ApiError(400, "Email already exists");
            }
            if (error.keyPattern?.["vehicle.licensePlate"]) {
                throw new ApiError(400, "License plate already exists");
            }
            throw new ApiError(
                400,
                "Duplicate key error: " + JSON.stringify(error.keyValue)
            );
        }
        throw new ApiError(500, "Internal Server Error: " + error.message);
    }
});

const captainLogin = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validate - not empty
    // check if user exist : username and password
    // generate refresh token and save it in db
    // return response

    const errors = await validationResult(req);

    if (!errors.isEmpty()) {
        throw new ApiError(400, "Invalid details");
    }

    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const captain = await Captain.findOne({ email });

    if (!captain) {
        throw new ApiError(401, "Invalid email or password");
    }

    const isPasswordValid = await captain.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid email or password");
    }

    const { accessToken, refreshToken } = await generatAccessAndRefreshToken(
        captain._id
    );

    const loggedInCaptain = await Captain.findById(captain._id).select(
        "-password -socketId -refreshToken"
    );

    if (!loggedInCaptain) {
        throw new ApiError(
            500,
            "Something went wrong while creating the captain"
        );
    }

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
                    user: loggedInCaptain,
                    accessToken,
                },
                "Captain logged in successfully"
            )
        );
});

const captainLogout = asyncHandler(async (req, res) => {
    await Captain.findByIdAndUpdate(
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
        .json(new ApiResponse(200, {}, "captain logged Out"));
});

const captainProfile = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, req.captain, "Captain profile"));
});

export { captainRegister, captainLogin, captainLogout, captainProfile };
