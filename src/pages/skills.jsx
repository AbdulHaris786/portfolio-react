
const groups = [
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript (Basics)"],
  },
  {
    title: "Programming",
    items: ["Java (Basics)", "Python (Basics)"],
  },
  {
    title: "Database",
    items: ["SQL", "MongoDB"],
  },
  {
    title: "Tools & Version Control",
    items: ["VS Code", "Git", "GitHub"],
  },
  {
    title: "Professional Skills",
    items: [
      "Communication",
      "Problem Solving",
      "Team Collaboration",
      "Active Listening",
      "Time Management",
    ],
  },
];

export default function Skills() {
  return (
    <section className="content-page">
      <p className="eyebrow">WHAT I BRING</p>
      <h1>My <span>Skills</span></h1>

      <div className="info-grid">
        {groups.map((group) => (
          <article className="info-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
