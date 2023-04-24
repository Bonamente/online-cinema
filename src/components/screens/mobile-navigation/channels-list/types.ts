import { LinkType } from '@/components/links-list/types';

export type ChannelsListProps = {
  title: string;
  links: LinkType[];
  isMobile?: boolean;
};
