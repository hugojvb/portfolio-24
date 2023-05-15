import "./styles.scss";

export default function Hero() {
  return (
    <section id="home">
      <div class="hero-container">
        <div class="hero-container__text">
          <h2>Hello there,</h2>
          <h1>
            I'm <span>Hugo</span>
          </h1>
          <h2>And I love what I do.</h2>
          <h3>Front-end Developer</h3>
          <button class="hero-container__text--button">
            <a href="#contact">
              &#x260E; Let's talk
            </a>
          </button>
        </div>
        <div class="hero-container__image">
          <img
            src="https://avatars.githubusercontent.com/u/62519943?v=5"
            alt="Hugo"
            elementtiming="Hero image"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  );
}
