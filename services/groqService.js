import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateResumeAI = async (data) => {
  const {
    name = "",
    education = "",
    experience = "",
    skills = "",
    projects = "",
  } = data;

  const prompt = `
Create a professional formatting ATS-friendly resume.

Sections:
 Name, Summary, Education, Experience, Skills, Projects,

Name: ${name}
Education: ${education}
Experience: ${experience}
Skills: ${skills}
Projects: ${projects}
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content: "You are a professional resume writer.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content;
};