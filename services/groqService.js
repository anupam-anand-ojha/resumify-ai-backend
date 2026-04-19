import Groq from "groq-sdk";

export const generateResumeAI = async (data)=> {
 const{
    name = "",
    education = "",
    experience = "",
    skills = "",
    projects = ""
} = data;

const prompt = `Create a professional ATS-friendly resume.
Name: ${name}
Education: ${education}
Experience: ${experience}
Skills: ${skills}
Projects: ${projects}`;

const response = await Groq.Chat.Completions.create({
    model: "llama-3.1-8b-instant",
    message:[
        {role: "system", content: "You are a professional resume writer."},
        {roel: "user", content: "prompt" },
    ],
});
 
  return response.choices[0].message.content;
}