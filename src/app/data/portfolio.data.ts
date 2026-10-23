import { Game, MusicalProject, Profile, WebApp } from './portfolio.models';

// Placeholder content: replace it with your own.
// Images go in /public (e.g. public/images/game.png -> imageUrl: 'images/game.png').

export const PROFILE: Profile = {
  name: 'Your Name',
  role: 'Musician & Game Developer',
  location: 'City, Country',
  bio: [
    'Write a short introduction about yourself here: who you are and what you do.',
    'Add a second paragraph about your background, studies or what drives your work.',
  ],
  skills: ['Angular', 'TypeScript', 'Unity', 'C#', 'Music production', 'Composition'],
  links: [
    { label: 'GitHub', url: 'https://github.com/juliatogr' },
    { label: 'Email', url: 'mailto:you@example.com' },
  ],
};

export const MUSICAL_PROJECTS: MusicalProject[] = [
  {
    title: 'Sample Album',
    year: 2025,
    role: 'Composer & Producer',
    description: 'Short description of the project, its style and your role in it.',
    tags: ['Electronic', 'Album'],
    links: [{ label: 'Listen', url: '#' }],
  },
  {
    title: 'Band Project',
    year: 2023,
    role: 'Guitar & Vocals',
    description: 'Another project: a band, a live show, a soundtrack...',
    tags: ['Rock', 'Live'],
    links: [],
  },
];

export const GAMES: Game[] = [
  {
    title: 'Sample Game',
    year: 2025,
    engine: 'Unity',
    platforms: ['PC', 'Web'],
    description: 'What the game is about, the gameplay and what you built.',
    tags: ['Game Jam', 'Puzzle'],
    links: [{ label: 'Play on itch.io', url: '#' }],
  },
  {
    title: 'Another Game',
    year: 2024,
    engine: 'Godot',
    platforms: ['PC'],
    description: 'A second game to show how the list scales.',
    tags: ['Platformer'],
    links: [{ label: 'Source code', url: '#' }],
  },
];

export const WEB_APPS: WebApp[] = [
  {
    title: 'Music Bingo',
    year: 2026,
    kind: 'Progressive Web App',
    description:
      'A musical bingo played with a Spotify playlist: generate cards, play the songs and mark them as they sound. Saves each game so you can continue later.',
    tags: ['Spotify API', 'Node.js', 'PWA'],
    links: [{ label: 'Open app', url: 'https://musicbingo.juliatogr.myaddr.io/' }],
  },
];
