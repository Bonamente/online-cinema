import { RefObject } from 'react';

export interface FooterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'middle' | 'large';
  refObj?: RefObject<HTMLButtonElement>;
  handleClick?: () => void;
  isWrappedByLink?: boolean;
  children: React.ReactNode;
}
