const usingLangs = ['C++', 'TypeScript', 'JavaScript', 'Rust', 'Python'];

export const Skills = () => (
  <article>
    <h2>Skills</h2>
    <ul>
      <li>I frequently use:</li>
      <li>
        <ul>
          {usingLangs.map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
      </li>
      <li>Experienced in coding with a team, publishing web services.</li>
      <li>Capable of translate from English to Japanese</li>
      <li>Expert of Software Analysis and Design with OOP and FP</li>
    </ul>
  </article>
);
