import mongoose from 'mongoose'

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "job-portal"
    })
    console.log('Connected to the database');
  } catch (error) {
    console.log("Error connecting to database", error);
    
  }
}