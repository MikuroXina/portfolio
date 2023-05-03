import { About } from '../components/about';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Skills } from '../components/skills';
import style from './index.module.css';
import { Vision } from '../components/vision';
import { Projects } from '../components/projects';

const Main: NextPage = () => (
  <div className={style.container}>
    <Head>
      <title>MikuroXina&apos;s station</title>
    </Head>
    <h1>MikuroXina</h1>
    <About />
    <Vision />
    <Skills />
    <Projects />
  </div>
);

export default Main;
