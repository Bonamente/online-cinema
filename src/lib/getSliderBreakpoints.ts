export function getSliderBreakpoints(slidesPerView: number | 'auto'): {
  [key: number]: {
    slidesPerView: number;
    slidesPerGroup: number;
    spaceBetween?: number;
  };
} {
  if (slidesPerView === 'auto') return {};
  if (slidesPerView === 7)
    return {
      1: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      390: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      501: {
        slidesPerView: 4,
        slidesPerGroup: 3,
      },
      745: {
        slidesPerView: 5,
        slidesPerGroup: 4,
      },
      921: {
        slidesPerView: 6,
        slidesPerGroup: 5,
      },
      1096: {
        slidesPerView: 7,
        slidesPerGroup: 6,
        spaceBetween: 10,
      },
    };
  if (slidesPerView === 4)
    return {
      390: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      745: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      921: {
        slidesPerView: 4,
        slidesPerGroup: 5,
        spaceBetween: 30,
      },
    };

  return {};
}
