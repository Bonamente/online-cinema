export type CustomSliderProps = {
  children: React.ReactNode[];
  id: string | number;
  buttonsPosition: ButtonsPositionType;
  lastSlide?: React.ReactNode;
  slidesPerView: SlidesPerViewType;
  spaceBetween?: number;
  showNavBtnsOnHoverOnly?: boolean;
  isAutoplay?: boolean;
  delay?: number;
  speed?: number;
  isTransitionTimingFnLinear?: boolean;
  isDirectionReversed?: boolean;
};

export type SizeType = 'small' | 'default';
export type ButtonsPositionType = 'inside' | 'outside';
export type SlidesPerViewType = number | 'auto';
