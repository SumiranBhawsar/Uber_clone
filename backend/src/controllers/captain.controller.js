import { Captain } from "../models/captain.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiRespnse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validationResult } from "express-validator";

const captainRegister = asyncHandler(async (req, res) => {
    // get captain details from frontend
    // validation - not empty
    // check if captain already exists: captainname, email
    // create captain object - create entry in db
    // remove password and refresh token field from response
    // check for captain creation
    // return res

    const errors = await validationResult(req);

    if (!errors.isEmpty()) {
        throw new ApiError(400, "Invalid details");
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

    // console.log(
    //     fullname,
    //     email,
    //     password,
    //     model,
    //     color,
    //     vehicleType,
    //     licensePlate,
    //     capacity
    // );

    if (
        !fullname ||
        !email ||
        !password ||
        !model ||
        !color ||
        !vehicleType ||
        !capacity ||
        !licensePlate
    ) {
        throw new ApiError(400, "All fields must be required");
    }

    // check if captain already exists
    const captainExists = await Captain.findOne({ email });
    if (captainExists) {
        throw new ApiError(400, "Captain already exists");
    }

    const captain = await Captain.create({
        fullname: fullname.toLowerCase(),
        email,
        password,
        vehicle: {
            model,
            color,
            vehicleType,
            licensePlate,
            capacity,
        },
    });

    const createdCaptain = await Captain.findById(captain._id).select(
        "-password -socketId -refreshToken"
    );

    if (!createdCaptain) {
        throw new ApiError(500, "Something went wrong while creating a user");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                201,
                "Captain registered successfully",
                createdCaptain
            )
        );
});

export { captainRegister };
