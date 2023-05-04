import style from './vision.module.css';

export const Vision = () => (
  <article>
    <h2>Vision</h2>
    <p className={style.copy}>
      Level our chaos with <span className="colored">Information Science</span>.
    </p>
    <p>
      We have each chaotic prime mover even our life get modernized. Talking to
      others, tripping to somewhere, experiencing a fiction, and so on will help
      us at the another level which is informational.
    </p>
    <p>
      I hope to improve their prime experience a bit with the technology as
      possible. So I always pay attention to whole of a hierarchy of science,
      engineering and user domains.
    </p>
    <section>
      <h3>Timeline</h3>
      <ol className={style.timeline}>
        <li>
          <span className={style.year}>2012</span>Began programming with LEGO
          MINDSTORMS NXT and NXC language.
        </li>
        <li>
          <span className={style.year}>2013</span>Learned C++ and CLI.
        </li>
        <li>
          <span className={style.year}>2014</span>Learned Python, Lua and some
          algorithms.
        </li>
        <li>
          <span className={style.year}>2017</span>Published tiny games with
          SDL2. Learned about objective oriented programming.
        </li>
        <li>
          <span className={style.year}>2018</span>Joined competitive programming
          in AtCoder at first. Created games by own team. Published my color
          theme for Visual Studio Code.
        </li>
        <li>
          <span className={style.year}>2019</span>Learned JavaScript/TypeScript
          and created web pages with Next.js
        </li>
        <li>
          <span className={style.year}>2020</span>Learned Rust deeply. Joined to
          Approvers.
        </li>
        <li>
          <span className={style.year}>2021</span>Learned about Haskell, Scala
          and functional programming.
        </li>
        <li>
          <span className={style.year}>2022</span>Created Discord bots and
          functional programming library in TypeScript.
        </li>
      </ol>
    </section>
    <section>
      <h3>Current Goals</h3>
      <ul>
        <li>
          Gain a qualification &quot;Fundamental Information Technology Engineer
          Examination&quot;
        </li>
        <li>Reach to the cyan rating in AtCoder.</li>
        <li>Get practical experience in business.</li>
      </ul>
    </section>
  </article>
);
