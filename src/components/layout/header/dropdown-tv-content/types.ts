import { BroadcastDataItem } from '../broadcast-list/broadcastsData';
import { LinkType } from '@/components/links-list/types';

export type DropdownTvContentProps = {
  tvLinks: LinkType[];
  tvChannelLinks?: LinkType[];
  tvSportLinks?: LinkType[];
  broadcasts?: BroadcastDataItem[];
  isMobile?: boolean;
};
