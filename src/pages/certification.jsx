
const certifications = [
  "Cisco — Introduction to Cyber Security",
  "Front-End Internship — Femtosoft",
  "Infosys Springboard — Front-End",
  "GUVI — UI/UX",
  "Mendix — Rapid Developer",
];

export default function Certifications() {
  return (
    <section className="content-page">
      <p className="eyebrow">LEARNING & DEVELOPMENT</p>
      <h1>Certifications & <span>Training</span></h1>

      <div className="info-grid">
        {certifications.map((item, index) => (
          <article className="info-card certification" key={item}>
            <span className="project-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
