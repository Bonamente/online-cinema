export type LinkType = {
  path: string;
  text?: string;
  title?: string;
  isExternal: boolean;
  hasGradient?: boolean;
  imgUrl?: string;
};

export type LinksListProps = {
  direction: 'row' | 'column';
  links: LinkType[];
};
