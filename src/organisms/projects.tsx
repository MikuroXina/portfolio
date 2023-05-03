import { ExternalLink } from '../molecules/external-link';

type ProgramItemProps = {
  repo: string;
  desc: string;
};

const RepoItem = ({ repo, desc }: ProgramItemProps) => (
  <>
    <cite>
      <ExternalLink href={`https://github.com/MikuroXina/${repo}`}>
        {repo}
      </ExternalLink>
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
