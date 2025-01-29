import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { singleUpload } from "../middlewares/multer";

const userRouter = express.Router();

userRouter.post("/register",singleUpload, register)
userRouter.post("/login", login)
userRouter.post("/logout", logout)
userRouter.post("/update-profile", verifyToken, updateProfile)

export default userRouter