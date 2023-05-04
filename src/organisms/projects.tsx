import { ExternalLink } from '../molecules/external-link';

interface RepoItemProps {
  repo: string;
  desc: string;
}

const RepoItem = ({ repo, desc }: RepoItemProps) => (
  <span>
    <ExternalLink href={`https://github.com/${repo}`}>{repo}</ExternalLink>{' '}
    {desc}
  </span>
);

const Repos = ({ repos }: { repos: readonly RepoItemProps[] }) => (
  <ul>
    {repos.map((item) => (
      <li key={item.repo}>
        <RepoItem {...item} />
      </li>
    ))}
  </ul>
);

const myActiveRepos: readonly RepoItemProps[] = [
  {
    repo: 'approvers/OreOreBot2',
    desc: 'The multipurpose Discord bot with TypeScript.',
  },
  {
    repo: 'MikuroXina/yozakura-theme',
    desc: 'The dark color theme with my favorite color scheme for Visual Studio Code.',
  },
  {
    repo: 'MikuroXina/hazakura-theme',
    desc: 'The light color theme with my favorite color scheme for Visual Studio Code.',
  },
  {
    repo: 'MikuroXina/rich-sdl2-rust',
    desc: 'The wrapper and binding library for SDL2 in Rust.',
  },
  {
    repo: 'MikuroXina/bms-rs',
    desc: 'The parser library for BMS, the music game format.',
  },
  {
    repo: 'MikuroXina/mini-fn',
    desc: 'The functional programming library for TypeScript.',
  },
  {
    repo: 'approvers/site',
    desc: 'The official site for Approvers.',
  },
  {
    repo: 'approvers/pindome-chan',
    desc: 'The Discord bot for transferring message with Webhook.',
  },
  {
    repo: 'MikuroXina/PsdRename',
    desc: 'The tool for renaming layers in your PSD files for PSDTool.',
  },
  {
    repo: 'MikuroXina/bemake',
    desc: 'The BMS editor with Tauri framework.',
  },
  {
    repo: 'MikuroXina/gem-knight',
    desc: 'The bot player for Splendor, the board game.',
  },
];

const myInactiveRepos: readonly RepoItemProps[] = [
  {
    repo: 'MikuroXina/aviutl-plugin-rs',
    desc: 'The plugin framework for AviUtl in Rust.',
  },
  {
    repo: 'MikuroXina/rb_tree',
    desc: 'The Red-Black tree implementation with Rust.',
  },
  {
    repo: 'MikuroXina/lifegame-comonad',
    desc: "The practice for Comonad concept with Conway's game of life.",
  },
  {
    repo: 'approvers/xdraw',
    desc: 'The 3D graphics engine with WebGL2.',
  },
  {
    repo: 'approvers/github-secretary',
    desc: 'The Discord bot for showing Issues and PRs from GitHub.',
  },
  {
    repo: 'approvers/bms-bounce',
    desc: 'The music bouncer for BMS.',
  },
  {
    repo: 'approvers/do-lua',
    desc: 'The Lua native binding for Node.js with Rust.',
  },
  {
    repo: 'approvers/musical-typer-rust',
    desc: 'The port of Musical Typer by loxygen with Rust.',
  },
  {
    repo: 'MikuroXina/DiceS',
    desc: 'The tutorial for creating an app with Next.js.',
  },
  {
    repo: 'MikuroXina/CaseByeCase',
    desc: 'My old puzzle game, pushes container cases.',
  },
  {
    repo: 'MikuroXina/PullWall',
    desc: 'My old puzzle game, pulls obstacle walls.',
  },
  {
    repo: 'approvers/akeo.me',
    desc: 'The celebration of happy new day.',
  },
  {
    repo: 'MikuroXina/nyansphere',
    desc: 'The programming education system.',
  },
  {
    repo: 'MikuroXina/Taiku-Ho-Ka',
    desc: 'My old shooting game, shots from a big cannon.',
  },
  {
    repo: 'MikuroXina/bevy_breakout',
    desc: 'The refactor of Breakout example from Bevy, the game framework.',
  },
  {
    repo: 'MikuroXina/deiciserver',
    desc: 'The port of nineserver with Rust.',
  },
];

const othersRepos: readonly RepoItemProps[] = [
  {
    repo: 'bemusic/bemuse',
    desc: 'The web-based BMS player, or rhythm action game.',
  },
  {
    repo: 'm-masaki72/SANA_8BIT_VST',
    desc: 'The audio source for Chiptune sound.',
  },
  {
    repo: 'approvers/genkainet',
    desc: 'The overlay network with WebRTC.',
  },
];

export const Projects = () => (
  <article>
    <section>
      <h2>My Projects</h2>
      <h3>Active Projects</h3>
      <Repos repos={myActiveRepos} />
      <h3>Stale Projects</h3>
      <Repos repos={myInactiveRepos} />
    </section>
    <h2>Other Persons&apos; Projects</h2>
    <Repos repos={othersRepos} />
  </article>
);
