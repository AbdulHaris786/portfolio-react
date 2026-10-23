
export default function About() {
  return (
    <section className="content-page">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h1>About <span>Me</span></h1>
      <p>
       I'm a final-year Computer Science Engineering student passionate about web development and technology. Through internships and personal projects, I've gained practical experience in building responsive user interfaces and web applications. I'm continuously improving my skills in frontend development, databases, and programming while exploring new ways to create useful and user-friendly digital experiences. I'm looking forward to starting my professional journey and growing as a developer.
      </p>

      <div className="info-grid">
        <article className="info-card">
          <h3>What I Do</h3>
          <p>Build responsive web interfaces and explore UI design.</p>
        </article>
        <article className="info-card">
          <h3>My Approach</h3>
          <p>Learn continuously, solve problems, and work with a team.</p>
        </article>
      </div>
    </section>
  );
}
