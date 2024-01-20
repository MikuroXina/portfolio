import { About } from '../organisms/about';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Skills } from '../organisms/skills';
import style from './page.module.css';
import { Vision } from '../organisms/vision';
import { Projects } from '../organisms/projects';

const Main: NextPage = () => (
  <div className={style.container}>
    <h1>MikuroXina</h1>
    <About />
    <Vision />
    <Skills />
    <Projects />
  </div>
);

export default Main;
