import React, { ReactNode, Fragment } from 'react';
import { ExternalLink } from '../molecules/external-link';

type Definition = {
  title: string;
  def: ReactNode;
};

const definitions = [
  {
    title: 'Name',
    def: 'MikuroXina',
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
      <iframe
        width="320"
        height="160"
        src="https://ext.nicovideo.jp/thumb_user/40015175"
        style={{ border: 'solid 1px #CCC', overflow: 'hidden' }}
      >
        Mikuroさいな(Xina)
      </iframe>
    ),
  },
  {
    title: 'Bandcamp',
    def: (
      <iframe
        style={{ border: 0, width: '100%', height: 33, overflow: 'hidden' }}
        src="https://bandcamp.com/band_follow_button_classic/12456850"
      ></iframe>
    ),
  },
];

const Define = ({ title, def }: Definition) => (
  <Fragment key={title}>
    <dt>{title}</dt>
    <dd>{def}</dd>
  </Fragment>
);

export const About = () => (
  <article>
    <h2>About</h2>
    {definitions.map((definition, i) => (
      <Define key={i} {...definition} />
    ))}
  </article>
);
