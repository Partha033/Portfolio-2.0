const config = {
  title: "Parthiban | MERN Stack Developer",
  description: {
    long: "Passionate MERN Stack Developer with hands-on experience in building scalable, responsive web applications. Skilled in MongoDB, Express.js, React.js, and Node.js, with expertise in Redux, GraphQL, and Tailwind CSS for efficient frontend development. Proficient in Git/GitHub for version control, with a track record of optimizing application performance (+30%) and reducing deployment times (25%). Committed to continuous learning, delivering clean code, and collaborating effectively in Agile teams.",
    short:
      "A MERN stack developer with expertise in building scalable and responsive web applications.",
  },
  keywords: [
    "Partha",
    "portfolio",
    "MERN stack developer",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "GraphQL",
    "Redux",
    "Tailwind CSS",
    "JAVA",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  author: "PARTHIBAN.A",
  email: "parthibanalaraj@gmail.com",
  site: "https://nareshkhatri.site",

  // for github stars button
  githubUsername: "Parthiban",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/Parthiban",
    github: "https://github.com/Parthiban",
  },
};
export { config };
