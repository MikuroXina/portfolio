import React, { ReactNode, Fragment } from 'react';
import { ExternalLink } from '../molecules/external-link';
import style from './about.module.css';

type Definition = {
  title: string;
  def: ReactNode;
};

const definitions = [
  {
    title: 'Name',
    def: 'Mikuroさいな',
  },
  {
    title: 'GitHub',
    def: (
      <ExternalLink href="https://github.com/MikuroXina">
        https://github.com/MikuroXina
      </ExternalLink>
    ),
  },
  {
    title: 'Twitter',
    def: (
      <ExternalLink href="https://twitter.com/MikuroXina">
        @MikuroXina
      </ExternalLink>
    ),
  },
  {
    title: 'niconico',
    def: (
      <ExternalLink href="https://www.nicovideo.jp/user/40015175">
        Mikuroさいな(Xina) videos
      </ExternalLink>
    ),
  },
  {
    title: 'Bandcamp',
    def: (
      <ExternalLink href="https://mikuroxina.bandcamp.com/">
        Musics powered by Bandcamp
      </ExternalLink>
    ),
  },
  {
    title: 'AtCoder',
    def: (
      <ExternalLink href="https://atcoder.jp/users/MikuroXina">
        Competitive programming stats on AtCoder
      </ExternalLink>
    ),
  },
  {
    title: 'Qiita',
    def: (
      <ExternalLink href="https://qiita.com/MikuroXina">
        Tech posts on Qiita
      </ExternalLink>
    ),
  },
];

const Define = ({ title, def }: Definition) => (
  <>
    <dt>{title}</dt>
    <dd>{def}</dd>
  </>
);

export const About = () => (
  <article>
    <h2>About</h2>
    <div className={style.card}>
      <img
        className={style.icon}
        src="./icon.png"
        alt="A cute icon"
        width="128"
        height="128"
      />
      <dl className={style.defRow}>
        {definitions.map((definition, i) => (
          <Define key={i} {...definition} />
        ))}
      </dl>
    </div>
  </article>
);
