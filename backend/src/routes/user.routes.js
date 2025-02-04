import { Router } from "express";
import {
    registerUser,
    loginUser,
    getProfile,
    logoutUser,
} from "../controllers/user.controller.js";
import { body } from "express-validator";
// import { verifyJWT } from "../middlewares/auth.middleware.js";
import { authentication } from "../middlewares/auth.middleware.js";

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

router.route("/profile").post(authentication, getProfile);

router.route("/logout").post(authentication, logoutUser);

export default router;
