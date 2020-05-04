import {NextPage} from 'next';
import Head from 'next/head';
import {FC} from 'react';

type ProgramItemProps = {
  repo: string;
  desc: string;
};

const RepoItem: FC<ProgramItemProps> = ({repo, desc}) => (
  <>
    <cite>
      <a href={`https://github.com/MikuroXina/${repo}`}>{repo}</a>
    </cite>{' '}
    {desc}
  </>
);

const RepoList: FC<{items: ProgramItemProps[]}> = ({items}) => (
  <ul>
    {items.map((item) => (
      <li key={item.repo}>
        <RepoItem {...item} />
      </li>
    ))}
  </ul>
);

const Main: NextPage = () => (
  <>
    <Head>
      <title>Mikuro Xina's station</title>
    </Head>
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
          <li>
            <ul>
              <li>C++</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Swift</li>
              <li>TypeScript</li>
              <li>Rust</li>
            </ul>
          </li>
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
        Developing:
        <RepoList
          items={[
            {
              repo: 'xdraw',
              desc: 'The WebGL 3D engine based on both three.js and Unity.',
            },
            {repo: 'bms-bounce', desc: 'The bouncer, convert BMS to WAV.'},
            {repo: 'lua-js', desc: 'The Lua binding for JavaScript.'},
          ]}
        />
        Old Games (they don't work well):
        <RepoList
          items={[
            {
              repo: 'Taiku-Ho-Ka',
              desc: 'The fixed point shooting.',
            },
            {repo: 'PullWall', desc: 'The dynamic maze.'},
            {repo: 'CaseByeCase', desc: 'The puzzle inspired by Machinarium.'},
          ]}
        />
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
        <RepoList
          items={[
            {
              repo: 'cpp-book',
              desc: 'The C++ tutorial book in Japanese.',
            },
          ]}
        />
      </section>
      <section>
        <h3>Miscs</h3>
        <RepoList
          items={[
            {
              repo: 'cherry-petals-theme',
              desc: 'My theme for VSCode.',
            },
          ]}
        />
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
