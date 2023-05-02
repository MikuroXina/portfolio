import React, { ReactNode, Fragment } from 'react';

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
      <a href="https://github.com/MikuroXina">https://github.com/MikuroXina</a>
    ),
  },
  {
    title: 'Twitter',
    def: <a href="https://twitter.com/MikuroXina">@MikuroXina</a>,
  },
  {
    title: 'niconico',
    def: (
      <iframe
        width="320"
        height="160"
        src="https://ext.nicovideo.jp/thumb_user/40015175"
        scrolling="no"
        style={{ border: 'solid 1px #CCC' }}
        frameBorder="0"
      >
        Mikuroさいな(Xina)
      </iframe>
    ),
  },
  {
    title: 'Bandcamp',
    def: (
      <iframe
        scrolling="no"
        style={{ border: 0, width: '100%', height: 33 }}
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
  <section>
    <h2>About</h2>
    {definitions.map((definition, i) => (
      <Define key={i} {...definition} />
    ))}
  </section>
);
