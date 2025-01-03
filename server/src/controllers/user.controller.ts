import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response): Promise<any> => {
try {
  const {fullName, email, password, phoneNumber, role} = req.body
  
  if ([fullName, email, password, phoneNumber, role].some((field) => field.trim() === "")) {
    return res.status(400).json({ message: "Please provide all fields" });
  }
  
  const existingUser = await User.findOne({email})
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  
  const newUser = new User({
    fullName,
    email,
    password: hashedPassword,
    phoneNumber,
    role
  })

  const jwtToken = jwt.sign(
    {
      _id: newUser._id,
      email: newUser.email,
    },
    process.env.JWT_KEY!,
    {
      expiresIn: "1d",
    }
  )

  res.cookie("token", jwtToken, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    httpOnly: true,
    sameSite: "none", 
    secure: true 
  });

  res.status(201).json({ message: "User created successfully", newUser });

} catch (error) {
  return res.status(500).send({ message: "Error signing up!", error: error });
}

}

export const login = async (req: Request, res: Response): Promise<any> => {
try {
    const { email, password, role } = req.body;

    if ([ email, password, role].some((field) => field.trim() === "")) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    const user = await User.findOne({email})

    if(!user){
     return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
      
    }

    if (role !== user.role) {
      return res.status(400).json({ message: "Invalid role" });
      
    }

    const jwtToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.JWT_KEY!,
      {
        expiresIn: "1d",
      }
    )

    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "none", 
      secure: true 
    });

    return res.status(200).json({ message: "Login successful", user});

    
} catch (error) {
  return res.status(500).send({ message: "Error logging in!", error: error });
  
}
}

export const logout = async (req: Request, res: Response): Promise<any> => {
try {
    res.clearCookie("token",{
      httpOnly: true,
      sameSite: "none", 
      secure: true 
    });

    return res.status(200).json({ message: "Logout successful" });
} catch (error) {
  return res.status(500).send({ message: "Error logging out!", error: error });
}
}

// export const updateProfile = async (req: Request, res: Response): Promise<any> => {
//   try {
//     const { fullName, email, phoneNumber, bio, skills } = req.body;
   

//     const skillsArray = skills.split(",")


//   } catch (error) {
//     return res.status(500).send({ message: "Error updating profile!", error: error });
    
//   }
// }