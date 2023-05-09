import { LinkType } from '@/components/links-list/types';
import { BroadcastDataItem } from '../broadcast-list/broadcastsData';

export type TvDropdownPopularProps = {
  items: LinkType[] | BroadcastDataItem[];
};
