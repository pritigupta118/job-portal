import { AuthRequest } from "../middlewares/verifyToken";
import { Response } from "express";
import { Job } from "../models/job.model";

export const postJob = async (req: AuthRequest, res: Response): Promise<any> => {
try {
  const { title, description, requirements, salary, location, jobType, experienceLevel, position, company } = req.body;
  const userId = req._id
  
  if (!title || !description || !requirements || !salary || !location || !jobType || !experienceLevel || !position || !company) {
      return res.status(400).json({ message: 'Please fill all fields' });
    
  }
  
  const job = await Job.create({
    title,
    description,
    requirements: requirements.split(','),
    experienceLevel,
    position,
    company,
    salary: Number(salary),
    created_by: userId,
    location,
    jobType
  })
  return res.status(201).json({
    message: "Job created successfully",
    job
  })
} catch (error) {
  return res.status(500).json({ message: "Something went wrong while creating the job", error });
  
}
}

export const getAllJobs = async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const keyword = req.query.keyword || ""

    const query = {
      $or: [
        {title: { $regex: keyword, $options: 'i' }},
        {description: { $regex: keyword, $options: 'i' }},
      ]
    }

    const jobs = await Job.find(query).populate({
      path: "company"
    }).sort({createdAt: -1})


    if (!jobs) {
      return res.status(404).json({ message: "Jobs not found" });
    }

    return res.status(200).json(jobs)
  } catch (error) {
    return res.status(500).json({ message: "Error while fetching jobs", error });
  }
}

export const getJobById = async(req: AuthRequest, res: Response): Promise<any> => {
  try {
    const {id} = req.params;
    const job = await Job.findById(id).populate({path: " applications"})
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    return res.status(200).json(job)
  } catch (error) {
    console.log("Error while fetching job:", error);
    return res.status(500).json({ message: "Error while fetching job", error });
  }
}

export const getAdminJobs = async(req: AuthRequest, res: Response): Promise<any> => {
try {
    const adminId = req._id;
    const jobs = await Job.find({created_by: adminId}).populate({path: "company"}).sort({createdAt: -1})
  
    if (!jobs) {
      return res.status(404).json({ message: "Jobs not found" });
    }
  
    return res.status(200).json(jobs)
} catch (error) {
    return res.status(500).json({ message: "Error while fetching jobs", error });
  
}
}