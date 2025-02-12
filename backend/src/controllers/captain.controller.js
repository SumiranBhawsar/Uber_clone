import { Captain } from "../models/captain.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validationResult } from "express-validator";

const captainRegister = asyncHandler(async (req, res) => {
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
        throw new ApiError(500, "Internal Server Error");
    }
});

export { captainRegister };

