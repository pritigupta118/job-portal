import mongoose, { Schema } from 'mongoose';

export interface IJob {
  title: string;
  description: string;
  requirements: string[];
  experienceLevel: number;
  location: string;
  jobType: string;
  position: string;
  company: mongoose.Types.ObjectId | string;
  salary: number;
  created_by: mongoose.Types.ObjectId | string;
  applications: Array<mongoose.Types.ObjectId>;
}

const JobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [{ type: String }],
  experienceLevel: { type: Number, required: true },
  position: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company',required: true },
  salary: { type: Number, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  applications: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
    }
],
  location: { type: String, required: true },
  jobType: { type: String, required: true },
}, {
  timestamps: true,
});

export const Job = mongoose.model('Job', JobSchema);