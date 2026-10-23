export interface Profile {
  name: string;
  role: string;
  location: string;
  photoUrl?: string;
  bio: string[];
  skills: string[];
  links: Link[];
}

export interface Link {
  label: string;
  url: string;
}

/** Common shape for anything shown as a card (music project, game, ...). */
export interface Project {
  title: string;
  year: number;
  description: string;
  imageUrl?: string;
  tags: string[];
  links: Link[];
}

export interface MusicalProject extends Project {
  role: string;
}

export interface Game extends Project {
  engine: string;
  platforms: string[];
}
