import {NextPage} from 'next';
import Head from 'next/head';
import {FC} from 'react';
import {About} from '../components/about';
import {Skills} from '../components/skills';

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
    <div className="container">
      <Head>
        <title>Mikuro Xina's station</title>
      </Head>
      <h1>Mikuro Xina</h1>
      <article>
        <About />
        <section>
          <h3>Objective</h3>
          To help that making tools to create some media.
        </section>
        <Skills />
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
                repo: 'rich-sdl2-rust',
                desc: 'The wrapper for SDL2.',
              },
              {
                repo: 'nyansphere',
                desc: 'The programming education system.',
              },
              {repo: 'bms-bounce', desc: 'The bouncer, convert BMS to WAV.'},
              {repo: 'lua-js', desc: 'The Lua binding for JavaScript.'},
            ]}
          />
          Old Games (they don't work well now):
          <RepoList
            items={[
              {
                repo: 'Taiku-Ho-Ka',
                desc: 'The fixed point shooting.',
              },
              {repo: 'PullWall', desc: 'The dynamic maze.'},
              {
                repo: 'CaseByeCase',
                desc: 'The puzzle inspired by Machinarium.',
              },
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
            style={{border: 'solid 1px #CCC'}}
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
                desc: 'Own theme for VSCode.',
              },
            ]}
          />
        </section>
      </article>
    </div>
    <style jsx>{`
      * {
        color: #bbbbbb;
      }
      .container {
        display: flex;
        flex-flow: column;
        align-content: center;
      }
      .container > * {
        margin: 0 auto;
        max-width: 800px;
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
