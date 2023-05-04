const learnedLanguages = [
  'C++',
  'JavaScript',
  'Python',
  'Swift',
  'TypeScript',
  'Rust',
];

export const Skills = () => (
  <article>
    <h2>Skills</h2>
    <ul>
      <li>I can use:</li>
      <li>
        <ul>
          {learnedLanguages.map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
      </li>
      <li>Experienced in coding with a team, publishing web services.</li>
      <li>Capable of translate between English and Japanese</li>
      <li>Expert of Object Oriented Analysis and Design</li>
    </ul>
  </article>
);
