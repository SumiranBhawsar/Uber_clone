import { Router } from "express";
import { body } from "express-validator";
import { captainRegister } from "../controllers/captain.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    [
        body("fullname").notEmpty().withMessage("Fullname is required"),
        body("email").isEmail().withMessage("Valid email is required"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
        body("model").notEmpty().withMessage("Vehicle model is required"),
        body("color").notEmpty().withMessage("Vehicle color is required"),
        body("vehicleType").notEmpty().withMessage("Vehicle type is required"),
        body("licensePlate").notEmpty().withMessage("License plate is required"),
        body("capacity").isInt({ min: 1 }).withMessage("Capacity must be at least 1"),
    ],
    captainRegister
);

export default router;

