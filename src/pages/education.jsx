
export default function Education() {
  return (
    <section className="content-page">
      <p className="eyebrow">MY ACADEMIC BACKGROUND</p>
      <h1>My <span>Education</span></h1>

      <div className="info-grid">
        {/* College */}
        <article className="info-card education-card">
          <p className="eyebrow">2027 · PURSUING</p>
          <h2>B.E. Computer Science and Engineering</h2>
          <h3>S.A. Engineering College (Autonomous)</h3>
          <p className="score">CGPA: 7.86</p>
        </article>

        {/* Class XII */}
        <article className="info-card education-card">
          <p className="eyebrow">CLASS XII · 2023</p>
          <h2>Higher Secondary Education</h2>
          <h3>Balalok MHSS</h3>
          <p>State Board</p>
          <p className="score">Percentage: 79.17%</p>
        </article>

        {/* Class X */}
        <article className="info-card education-card">
          <p className="eyebrow">CLASS X · 2021</p>
          <h2>Secondary Education</h2>
          <h3>Balalok MHSS</h3>
          <p>State Board</p>
          <p className="score">Status: Passed</p>
        </article>
      </div>
    </section>
  );
}
