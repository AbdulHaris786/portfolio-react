
const certifications = [
  {
    name: "Cisco — Introduction to Cyber Security",
    file: "/certificates/cisco.pdf.pdf",
  },
  {
    name: "Front-End Internship — Femtosoft",
    file: null,
  },
  {
    name: "Infosys Springboard — Front-End",
    file: "/certificates/frontend.pdf.pdf",
  },
  {
    name: "GUVI — UI/UX",
    file: "/certificates/guvi.jpeg.jpeg",
  },
  {
    name: "Mendix — Rapid Developer",
    file: "/certificates/mendix.pdf.pdf",
  },
  {
    name: "NPTEL — Software Testing",
    file: "/certificates/Software%20Testing.pdf",
  },
];

export default function Certifications() {
  return (
    <section className="content-page">
      <p className="eyebrow">LEARNING & DEVELOPMENT</p>
      <h1>
        Certifications & <span>Training</span>
      </h1>

      <div className="info-grid">
        {certifications.map((item, index) => (
          <a
            key={item.name}
            href={item.file || undefined}
            target={item.file ? "_blank" : undefined}
            rel={item.file ? "noopener noreferrer" : undefined}
            style={{
              color: "inherit",
              textDecoration: "none",
              cursor: item.file ? "pointer" : "default",
            }}
          >
            <article className="info-card certification">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.name}</h3>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
