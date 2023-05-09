export type TvDropdownSliderProps = {
  id: string | number;
  title: string;
  children: React.ReactNode[];
  slidesPerView: number | 'auto';
  spaceBetween: number;
  showNavBtnsOnHoverOnly: boolean;
};
