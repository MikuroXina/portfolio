const learnedLaungages = [
  'C++',
  'JavaScript',
  'Python',
  'Swift',
  'TypeScript',
  'Rust',
];

export const Skills = () => (
  <section>
    <h3>Skills</h3>
    <ul>
      <li>I can use:</li>
      <li>
        <ul>
          {learnedLaungages.map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
      </li>
      <li>Experienced in coding with a team, publishing web services.</li>
      <li>Capable of translate between English and Japanese</li>
      <li>Expert of Object Oriented Analysis and Design</li>
    </ul>
  </section>
);
