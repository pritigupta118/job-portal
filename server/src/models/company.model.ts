import mongoose, {Schema} from "mongoose";

interface ICompany {
  companyName: string;
  description: string;
  website: string;
  location: string;
  logo: string;
  userId: mongoose.Types.ObjectId | string
}

const companySchema = new Schema<ICompany>({
    companyName:{
      type:String,
      required:true,
      unique:true
  },
  description:{
      type:String, 
  },
  website:{
      type:String 
  },
  location:{
      type:String 
  },
  logo:{
      type:String // URL to company logo
  },
  userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
  }
},{timestamps:true})
export const Company = mongoose.model("Company", companySchema);