export interface PreviewFilmProps {
  ratio: number;
  year: number;
  country: string;
  genre: string;
  duration: number;
  title: string;
  access: PreviewAccessType;
  img: string;
  iviChoice?: boolean;
}

export type PreviewAccessType = 'sub' | 'buy' | 'free';
