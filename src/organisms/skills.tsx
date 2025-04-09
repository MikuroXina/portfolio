import { ExternalLink } from '../molecules/external-link';

export const Skills = () => (
  <article>
    <h2>Skills</h2>
    <section>
      <h3>Favorite Programming Languages</h3>
      <ul>
        <li>C++ - Useful for any purpose except modern UI tech stack.</li>
        <li>TypeScript - Better way to develop web stuff currently.</li>
        <li>JavaScript - Runs anywhere thanks to web standard.</li>
        <li>Rust - New wave to develop system software in modern way.</li>
        <li>Python - Useful for tooling of building softwares.</li>
        <li>Haskell - Provides nice abstraction of system as a processor.</li>
      </ul>
    </section>
    <section>
      <h3>Frequently Using Technologies</h3>
      <ul>
        <li>
          <ExternalLink href="https://hono.dev/">
            Hono - The lightweight web server.
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://reactrouter.com/">
            React Router - The framework for widget-like web app.
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://godotengine.org/">
            Godot - The lightweight 2D and 3D game engine.
          </ExternalLink>
        </li>
      </ul>
    </section>
    <section>
      <h3>Interested Field</h3>
      <ul>
        <li>System Integration</li>
        <li>Static Code Analysis</li>
        <li>Model Checking</li>
        <li>Mathematical Model of Memory Safety</li>
      </ul>
    </section>
    <section>
      <h3>Gained Examinations</h3>
      <ul>
        <li>TOEIC: 625 points</li>
        <li>PAST: Advanced Beginner</li>
      </ul>
    </section>
  </article>
);
