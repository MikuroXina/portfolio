import { About } from '../organisms/about';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Skills } from '../organisms/skills';
import style from './index.module.css';
import { Vision } from '../organisms/vision';
import { Projects } from '../organisms/projects';

const Main: NextPage = () => (
  <div className={style.container}>
    <Head>
      <title>MikuroXina&apos;s station</title>
      <meta
        name="description"
        content="MikuroXina is not only a programmer but also does something more..."
      />
      <meta name="theme-color" content="#191d19" />
    </Head>
    <h1>MikuroXina</h1>
    <About />
    <Vision />
    <Skills />
    <Projects />
  </div>
);

export default Main;
