type ProgramItemProps = {
  repo: string;
  desc: string;
};

const RepoItem = ({ repo, desc }: ProgramItemProps) => (
  <>
    <cite>
      <a href={`https://github.com/MikuroXina/${repo}`}>{repo}</a>
    </cite>{' '}
    {desc}
  </>
);

const RepoList = ({ items }: { items: ProgramItemProps[] }) => (
  <ul>
    {items.map((item) => (
      <li key={item.repo}>
        <RepoItem {...item} />
      </li>
    ))}
  </ul>
);

export const Projects = () => (
  <article>
    <h2>Projects</h2>
  </article>
);
