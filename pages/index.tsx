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
        Recently:
        <ul>
          <li>
            <cite>
              <a href="https://github.com/MikuroXina/xdraw">xdraw</a>
            </cite>{' '}
            The WebGL 3D engine based on both three.js and Unity.
          </li>
          <li>
            <cite>
              <a href="https://github.com/MikuroXina/bms-bounce">bms-bounce</a>
            </cite>{' '}
            The bouncer, convert BMS to WAV.
          </li>
          <li>
            <cite>
              <a href="https://github.com/MikuroXina/lua-js">lua-js</a>
            </cite>{' '}
            The Lua binding for JavaScript.
          </li>
        </ul>
        Old Games (they doesn't work well):
        <ul>
          <li>
            <cite>
              <a href="https://github.com/MikuroXina/Taiku-Ho-Ka">
                Taiku-Ho-Ka
              </a>
            </cite>{' '}
            The fixed point shooting game.
          </li>
          <li>
            <cite>
              <a href="https://github.com/MikuroXina/PullWall">PullWall</a>
            </cite>{' '}
            The dynamic maze.
          </li>
          <li>
            <cite>
              <a href="https://github.com/MikuroXina/CaseByeCase">
                CaseByeCase
              </a>
            </cite>{' '}
            The puzzle inspired by Machinarium.
          </li>
        </ul>
      </section>
      <section>
        <h3>Musics</h3>
        <iframe
          width="320"
          height="160"
          src="https://ext.nicovideo.jp/thumb_user/40015175"
          scrolling="no"
          style={{border: 'solid 1px #CCC;'}}
          frameBorder={0}
        ></iframe>
      </section>
      <section>
        <h3>Books</h3>
        <ul>
          <li>
            <cite>
              <a href="https://github.com/MikuroXina/cpp-book">cpp-book</a>
            </cite>{' '}
            The C++ tutorial book in Japanese.
          </li>
        </ul>
      </section>
      <section>
        <h3>Miscs</h3>
        <ul>
          <li>
            <cite>
              <a href="https://github.com/MikuroXina/cherry-petals-theme">
                cherry-petals-theme
              </a>
            </cite>{' '}
            My favorite theme for VSCode.
          </li>
        </ul>
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
