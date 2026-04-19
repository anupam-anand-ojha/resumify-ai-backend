import resumeModel from "../src/models/resumeModel";
import { generateResumeAI } from "../services/groqService";

export const generateResume = async (req,res) => {
    try{
        const {ame, education, experience, skills, projects} = req.body;


        if (!name || !education || !experience || !skills || !projects) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const generateResume = await generateResumeAI(req.body);

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
      resume,
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