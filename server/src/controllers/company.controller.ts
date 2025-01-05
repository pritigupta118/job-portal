import { Response } from "express";
import { Company } from "../models/company.model";
import { AuthRequest } from "../middlewares/verifyToken";

export const registerCompany = async (req: AuthRequest, res: Response) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({ message: "Company name is required!" });
    }

    const isCompanyExist = await Company.findOne({ companyName })

    if (isCompanyExist) {
      return res.status(400).json({ message: "Company already exists!" });
    }

    const newCompany = await Company.create({
      companyName,
      userId: req._id
    });

    return res.status(201).json({ message: "Company created successfully", newCompany });
  } catch (error) {
    return res.status(500).send({ message: "Error while registering the company!", error: error });

  }
}

export const getCompany = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req._id
    const companies = await Company.find({ userId })
    if (!companies) {
      return res.status(404).json({ message: "Company not found!" });

    }
    return res.status(200).json({ message: "Companies found successfully", companies });
  } catch (error) {
    return res.status(500).send({ message: "Error while searching companies!", error: error });

  }

}

export const getCompnyById = async (req: AuthRequest, res: Response) => {
 try {
   const {id} = req.params
    const company = await Company.findById(id)
    if (!company) {
      return res.status(404).json({ message: "Company not found!" });

    }
    return res.status(200).json({ message: "Company found successfully", company });
 } catch (error) {
   return res.status(500).send({ message: "Error while searching company by id!", error: error });
  
 }

}

export const updateCompany = async (req: AuthRequest, res: Response) => {
try {
    const {companyName, description,website,location,logo}= req.body
    const {id} = req.params
    const company = await Company.findByIdAndUpdate(id, {companyName, description,website,location,logo}, {new:true})

    if (!company) {
      return res.status(404).json({
          message: "Company not found.",
          success: false
      })
  }

    return res.status(200).json({ message: "Company updated successfully", company });
} catch (error) {
  return res.status(500).send({ message: "Error while updating company!", error: error });
  
}

}