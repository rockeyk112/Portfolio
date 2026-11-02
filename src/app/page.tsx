
export default function Home() {
  return (
    <main>
      {/* ===== NAVIGATION BAR ===== */}
      <header className="navbar">
         {/* Website logo */}
        <div className="logo">RK.</div>


        {/* Navigation links */}
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

       {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">

         {/* Left column: Introduction and buttons */}
        <div className="hero-content">

          {/* Personal introduction */}
        <p>Hello, I'm</p>
        <h1>Rockey Kumar</h1>
        <h2>Software Developer</h2>

        {/* Short professional description */}
        <p className="hero-description">
          I'm a Computer Science graduate and a passionate software developer, problem-solving, and building meaningful digital experiences.
        </p>

        {/* Hero action buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore My Projects
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
        </div>

        {/* Right column: Developer visual card */}
        <div className="hero-visual">
          <div className="visual-card">

            {/* Card label */}
            <p>MY CURRENT FOCUS</p>

            {/* Programming symbol */}
            <div className="code-symbol">&lt;/&gt;</div>

            {/* Main card heading */}
            <h3>
              Turning ideas
              <br />
              into reality.
            </h3>

            {/* Development category */}
            <span>SOFTWARE DEVELOPMENT</span>
          </div>
        </div>
        </section>
    </main>
  );
}
