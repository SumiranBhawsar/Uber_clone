import { Router } from "express";
import { captainRegister } from "../controllers/captain.controller.js";
import { body } from "express-validator";

const router = Router();

router
    .route("/register", [
        body("email").isEmail().withMessage("Please provide a valid email"),
        body("fullname")
            .isLength({ min: 3 })
            .withMessage("Please provide a valid fullname"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),
        body("color").notEmpty().withMessage("please provide a valid color"),
        body("licensePlate")
            .notEmpty()
            .withMessage("please provide a valid licensePlate"),
        body("capacity")
            .isLength({ min: 1 })
            .withMessage("capacity must be at least 1"),
        body("model").isEmpty().withMessage("please provide a valid model"),
    ])
    .post(captainRegister);

export default router;
