
const projects = [
  {
    number: "01",
    title: "Responsive E-commerce Website",
    description:
      "A responsive online store interface built with HTML, CSS, and JavaScript.",
    tech: "HTML · CSS · JavaScript",
  },
  {
    number: "02",
    title: "MERN Blog Website",
    description:
      "A blog application with create, read, update, and delete functionality.",
    tech: "MongoDB · Express · React · Node.js",
  },
  {
    number: "03",
    title: "Personal Portfolio Website",
    description:
      "A personal website to present my skills, projects, and background.",
    tech: "Web Development",
  },
  {
    number: "04",
    title: "Spotify-style UI",
    description:
      "A music-streaming interface concept designed in Figma.",
    tech: "Figma · UI/UX",
  },
  {
    number: "05",
    title: "NOVASTORE – E-commerce Website",
    description:
      "A modern e-commerce frontend with product browsing, cart, wishlist, and demo checkout.",
    tech: "React · Redux · React Router · CSS",
  },
];

export default function Projects() {
  return (
    <section className="content-page">
      <p className="eyebrow">WHAT I'VE WORKED ON</p>
      <h1>
        My <span>Projects</span>
      </h1>

      <div className="info-grid">
        {projects.map((project) => (
          <article
            className="info-card project-card"
            key={project.number}
          >
            <p className="project-number">{project.number}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>

            {(project.number === "01" ||
              project.number === "03" ||
              project.number === "05") && (
              <a
                href={
                  project.number === "01"
                    ? "https://harisstore.vercel.app/"
                    : project.number === "03"
                    ? "https://abdulharis.vercel.app/"
                    : "https://novastoreharis.vercel.app/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </article>
        ))}
      </div>

    
    </section>
  );
}
