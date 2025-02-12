import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const captainSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            minlength: [3, "Firstname must be at least 3 characters long"],
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: [6, "Password must be at least 6 characters long"],
        },
        vehicle: {
            color: {
                type: String,
                required: true,
            },
            model: {
                type: String,
                required: true,
            },
            vehicleType: {
                type: String,
                required: true,
                enum: ["auto", "car", "bike"],
            },
            licensePlate: {
                type: String,
                required: true,
                unique: true,
                sparse: true,
            },
            capacity: {
                type: Number,
                required: true,
                min: [1, "Capacity must be at least 1"],
            },
        },
    },
    { timestamps: true }
);

captainSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

captainSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

captainSchema.methods.generatAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};

captainSchema.methods.generatRefreshToken = function () {
    return jwt.sign(
        {
            id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

export const Captain = mongoose.model("Captain", captainSchema);
