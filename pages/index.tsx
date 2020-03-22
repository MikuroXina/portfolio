import {NextPage} from 'next';

const Main: NextPage = () => (
  <>
    <h1>Mikuro Xina</h1>
    <article>
      <h2>About</h2>
      <dl>
        <dt>Name</dt>
        <dd>Mikuro Xina</dd>
        <dt>E-Mail</dt>
        <dd>ryosukadnak@gmail.com</dd>
        <dt>GitHub</dt>
        <dd>
          <a href="https://github.com/MikuroXina">
            https://github.com/MikuroXina
          </a>
        </dd>
        <dt>Twitter</dt>
        <dd>
          <a href="https://twitter.com/MikuroXina">@MikuroXina</a>
        </dd>
      </dl>
      <section>
        <h3>Objective</h3>
        To help that making tools to create some media.
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>I can use</li>
          <ul>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Swift</li>
            <li>TypeScript</li>
            <li>Rust</li>
          </ul>
          <li>Experienced in coding with a team, publishing web services.</li>
          <li>Capable of translate between English and Japanese</li>
          <li>Expert of Object Oriented Analysis and Design</li>
        </ul>
      </section>
      <section>
        <h3>Education</h3>
        Enrolled in National Institute of Technology, Niihama College
      </section>
    </article>
    <article>
      <h2>My Products</h2>
      <section>
        <h3>Programs</h3>
      </section>
      <section>
        <h3>Musics</h3>
      </section>
      <section>
        <h3>Books</h3>
      </section>
    </article>
    <style jsx>{`
      * {
        color: #bbbbbb;
      }
      h1 {
        color: #c7c7c7;
      }
      h2 {
        color: #3794ff;
      }
      h3 {
        color: #28b66f;
      }
    `}</style>
    <style jsx global>{`
      body {
        background-color: #191d19;
      }
      a:link {
        color: #055bde;
      }
      a:visited {
        color: #7d30d5;
      }
    `}</style>
  </>
);

export default Main;
