
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
];

export default function Projects() {
  return (
    <section className="content-page">
      <p className="eyebrow">WHAT I'VE WORKED ON</p>
      <h1>My <span>Projects</span></h1>

      <div className="info-grid">
        {projects.map((project) => (
          <article className="info-card project-card" key={project.number}>
            <p className="project-number">{project.number}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>
          </article>
        ))}
      </div>
      <p className="muted">
        Project source links can be added when the repositories are ready.
      </p>
    </section>
  );
}
