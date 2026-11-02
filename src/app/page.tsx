
export default function Home() {
  return (
    <main>
      <header className="navbar">
        <div className="logo">RK.</div>


        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="hero" id="home">
        <p>Hello, I'm</p>
        <h1>Rockey Kumar</h1>
        <h2>Software Developer</h2>
        <p className="hero-descripation">
          I'm a Computer Science graduate and a passionate software developer, problem-solving, and building meaningful digital experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore My Projects
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
