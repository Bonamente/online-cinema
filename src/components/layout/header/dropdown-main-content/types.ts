import { LinkType } from '@/components/links-list/types';

export type DropdownMainContentProps = {
  genresLinks: LinkType[];
  contriesLinks: LinkType[];
  yearsLinks: LinkType[];
  newLinks: LinkType[];
  isMobile?: boolean;
  mobileLinkText?: string;
  mobileLinkURL?: string;
};
