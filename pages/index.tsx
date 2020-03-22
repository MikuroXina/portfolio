import {NextPage} from 'next';

const Main: NextPage = () => (
  <>
    <h1>Mikuro Xina</h1>
    <article>
      <h2>About</h2>
      <section>
        <h3>Objective</h3>
      </section>
      <section>
        <h3>Skills</h3>
      </section>
      <section>
        <h3>Education</h3>
      </section>
    </article>
    <article>
      <h2>My Products</h2>
      <section>
        <h3>Programs</h3>
      </section>
      <section>
        <h3>Musics</h3>
      </section>
      <section>
        <h3>Books</h3>
      </section>
    </article>
    <style jsx>{`
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
        color: #bbbbbb;
      }
    `}</style>
  </>
);

export default Main;
