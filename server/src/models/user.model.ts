import mongoose, { Schema } from 'mongoose';

interface IUser {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: number;
  role: string;
  profile: {
    bio: string;
    skills: string[];
    resume: string;
    resumeOriginalName: string;
    experience: Array<mongoose.Types.ObjectId>;
    profilePhoto: string;
  }
}

const userSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  role: { type: String, enum: ["student", "recruiter"], required: true },
  profile:{
    bio:{type:String},
    skills:[{type:String}],
    resume:{type:String},
    resumeOriginalName:{type:String},
    experience:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, 
    profilePhoto:{
        type:String,
        default:""
    }
}, 
},{timestamps:true});

export const User = mongoose.model('User', userSchema);

