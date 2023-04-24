import dynamic from 'next/dynamic';

const CustomSlider = dynamic(() => import('./SwiperComponentExtended'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default CustomSlider;
