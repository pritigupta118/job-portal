import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/verifyToken";

const userRouter = express.Router();

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.post("/logout", logout)
userRouter.post("/update-profile", verifyToken, updateProfile)

export default userRouter