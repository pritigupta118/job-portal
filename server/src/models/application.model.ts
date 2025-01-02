import mongoose, {Schema} from "mongoose";

interface IApplicants {
    job: mongoose.Types.ObjectId | string;
    applicant: mongoose.Types.ObjectId | string;
    status: string;
}

const applicationSchema = new Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'rejected'],
        default:'pending'
    }
},{timestamps:true});
export const Application  = mongoose.model("Application", applicationSchema);