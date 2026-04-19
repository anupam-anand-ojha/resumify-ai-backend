import resumeModel from "../src/models/resumeModel";

export const generateResume = async (req,res) => {
    try{
        const {ame, education, experience, skills, projects} = req.body;


        if (!name || !education || !experience || !skills || !projects) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    }
    catch(err){
        console.error("controller error", err);
    }

}