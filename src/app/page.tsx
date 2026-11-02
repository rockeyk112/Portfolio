
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

        {/* ===== ABOUT SECTION ===== */}

        <section className="about" id="about">

          {/* About content */}
          <div className="about-content">
            <h3> I'm Rockey Kumar</h3>

            <p>
              I'm a Computer Science and Engineering graduate with an interest in software development,
              problem-solving, and building practical digital solutions.
            </p>

            <p>
              I'm continuously improving my programming skills and exploring modern technologies to turn
              to turn ideas into useful applications.
            </p>

            {/* Technical skills */}

            <div className="about-skills">
              <h3>Technical Skills</h3>

              <div className="skills-list">
                <span>C</span>
                <span>C++</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Git</span>
              </div>
            </div>
          </div>

           {/* Section heading */}
          <div className="about-heading">
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>
        </section>
    </main>
  );
}
