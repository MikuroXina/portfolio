import {ReactNode} from 'react';

type Definition = {
  title: ReactNode;
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
  <>
    <dt>{title}</dt>
    <dd>{def}</dd>
  </>
);

export const About = () => (
  <section>
    <h2>About</h2>
    {definitions.map(define)}
  </section>
);
