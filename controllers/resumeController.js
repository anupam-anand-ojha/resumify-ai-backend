import resumeModel from "../src/models/resumeModel.js";
import { generateResumeAI } from "../services/groqService.js";

export const generateResume = async (req,res) => {
    try{
        const {name, education, experience, skills, projects} = req.body;


        if (!name || !education || !experience || !skills || !projects) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const generatedResume = await generateResumeAI(req.body);

    const resume = await resumeModel.create({
      name,
      education,
      experience,
      skills,
      projects,
      generatedResume,
    })
     res.json({
      success: true,
      resume: generatedResume
    });
    }
    catch (error) {
    console.error("CONTROLLER ERROR:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }

}