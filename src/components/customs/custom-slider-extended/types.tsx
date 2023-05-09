export interface SwiperComponentProps {
  id: string | number;
  children: React.ReactNode[];
  buttonsPosition: ButtonsPositionType;
  slidesPerView: SlidesPerViewType;
  slidesPerGroup?: SlidesPerGroupType;
  title?: string;
  link?: string;
  lastSlide?: React.ReactNode;
  spaceBetween?: number;
  allowTouchMove?: boolean;
  showNavBtnsOnHoverOnly?: boolean;
  hasButtons?: boolean;
  hasButtonsBackground?: boolean;
  hasShadow?: boolean;
  centeredSlides?: boolean;
  initialSlide?: number;
  isAutoplay?: boolean;
  loop?: boolean;
  delay?: number;
  speed?: number;
  isTransitionTimingFnLinear?: boolean;
  isDirectionReversed?: boolean;
}

export interface CustomSliderProps extends SwiperComponentProps {
  title?: string;
  link?: string;
}

export type SizeType = 'small' | 'default';
export type ButtonsPositionType = 'inside' | 'outside' | 'promo-large' | 'promo-small';
export type SlidesPerViewType = number | 'auto';
export type SlidesPerGroupType = number | 1;
