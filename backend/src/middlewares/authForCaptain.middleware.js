import { Captain } from "../models/captain.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const authentication = asyncHandler(async (req, res, next) => {
    // get jwt token from cookie or header
    // check if token present or ton
    // verify token is valid
    // if valid then find user from database with the help of token data
    // if user found then attach user to req object
    // next()

    try {
        const token =
            req.cookies?.accessToken ||
            req.headers.authorization?.split(" ")[1];
        if (!token) {
            throw new ApiError(401, "No token provided");
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const captain = await Captain.findById(decoded.id);
        if (!captain) {
            throw new ApiError(401, "User not found");
        }

        req.captain = captain._id;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message);
    }
});
