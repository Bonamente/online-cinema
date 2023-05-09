import React from 'react';

export interface SwiperComponentProps {
  children: React.ReactNode[];
  id: string | number;
  buttonsPosition: ButtonsPositionType;
  lastSlide?: React.ReactNode;
  slidesPerView: SlidesPerViewType;
}

export interface CustomSliderProps {
  title?: string;
  id: string | number;
  children: React.ReactNode[];
  link?: string;
  lastSlide?: React.ReactNode;
  slidesPerView: SlidesPerViewType;
  buttonsPosition: ButtonsPositionType;
}

export type SizeType = 'small' | 'default';
export type ButtonsPositionType = 'inside' | 'outside';
export type SlidesPerViewType = number | 'auto';
