export type Pub = {
  title: string;
  authors: string;
  venue?: string;
  year?: number;
  link?: string;
  arxiv?: string;
};

export const pubs: Pub[] = [
  {
    title: 'Title of Your Paper',
    authors: 'Sophia Cao, Collaborator Name',
    venue: 'PRX Quantum',
    year: 2025,
    arxiv: 'https://arxiv.org/abs/xxxx.xxxxx'
  }
];