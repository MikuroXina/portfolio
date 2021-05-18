import React, {ReactNode, Fragment} from 'react';

type Definition = {
  title: string;
  def: ReactNode;
};

const definitions = [
  {
    title: 'Name',
    def: 'Mikuro Xina',
  },
  {
    title: 'E-Mail',
    def: 'ryosukadnak@gmail.com',
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
];

const define = ({title, def}: Definition) => (
  <Fragment key={title}>
    <dt>{title}</dt>
    <dd>{def}</dd>
  </Fragment>
);

export const About = () => (
  <section>
    <h2>About</h2>
    {definitions.map(define)}
  </section>
);
