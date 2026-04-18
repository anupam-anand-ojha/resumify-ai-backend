import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    education:{
        type: String,
        required: true,

    },
    experience:{
        type: String,
        required: true,
    },
    skills:{
        type: String,
        required: true,
    },
    projects:{
        type: String,
        required: true,
    },
    generatedResume:{
        type: String,
        required: true,

    }
},
{timestamps: true}
)

const resumeModel = mongoose.model("Resume", resumeSchema);

export default resumeModel