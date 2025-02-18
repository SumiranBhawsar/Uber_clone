import { Router } from "express";
import { body } from "express-validator";
import {
    captainLogin,
    captainLogout,
    captainProfile,
    captainRegister,
} from "../controllers/captain.controller.js";
import { authentication } from "../middlewares/authForCaptain.middleware.js";

const router = Router();

router
    .route("/register")
    .post(
        [
            body("fullname").notEmpty().withMessage("Fullname is required"),
            body("email").isEmail().withMessage("Valid email is required"),
            body("password")
                .isLength({ min: 6 })
                .withMessage("Password must be at least 6 characters long"),
            body("model").notEmpty().withMessage("Vehicle model is required"),
            body("color").notEmpty().withMessage("Vehicle color is required"),
            body("vehicleType")
                .notEmpty()
                .withMessage("Vehicle type is required"),
            body("licensePlate")
                .notEmpty()
                .withMessage("License plate is required"),
            body("capacity")
                .isInt({ min: 1 })
                .withMessage("Capacity must be at least 1"),
        ],
        captainRegister
    );

router
    .route("/login", [
        body("email").isEmail().withMessage("Please provide a valid email"),
        body("password").notEmpty().withMessage("Password is required"),
    ])
    .post(captainLogin);

router.route("/logout").post(authentication, captainLogout);

router.route("/profile").post(authentication, captainProfile);

export default router;
