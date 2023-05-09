export default interface CustomButtonProps {
  children: React.ReactNode;
  colorType: ButtonColorType;
  icon?: React.ReactNode;
}

export type ButtonColorType = 'default' | 'filled';
