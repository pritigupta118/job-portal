import express from "express";

import { verifyToken } from "../middlewares/verifyToken";
import { getCompany, getCompnyById, registerCompany, updateCompany } from "../controllers/company.controller";

const companyRouter = express.Router();

companyRouter.post("/register",verifyToken, registerCompany)
companyRouter.get("/get-company",verifyToken, getCompany)
companyRouter.get("/get-company/:id",verifyToken, getCompnyById)
companyRouter.put("/update/:id", verifyToken, updateCompany)

export default companyRouter