import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = Router();

router
    .route("/register", [
        body("email").isEmail().withMessage("Please provide a valid email"),
        body("fullname.firstname")
            .isLength({ min: 3 })
            .withMessage("Please provide a valid fullname"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),
    ])
    .post(registerUser);

router
    .route("/login", [
        body("email").isEmail().withMessage("Please provide a valid email"),
    ])
    .post(loginUser);

export default router;
