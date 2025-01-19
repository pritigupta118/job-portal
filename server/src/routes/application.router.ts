import express from "express";

import { verifyToken } from "../middlewares/verifyToken";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller";


const applicationRouter = express.Router();

applicationRouter.get("/apply/:id",verifyToken, applyJob)
applicationRouter.get("/get",verifyToken, getAppliedJobs)
applicationRouter.get("/:id/applicants",verifyToken, getApplicants)
applicationRouter.post("/status/:id/update", verifyToken, updateStatus)


export default applicationRouter