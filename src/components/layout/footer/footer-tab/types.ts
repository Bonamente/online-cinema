export interface FooterTabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  handleClick?: () => void;
  children: React.ReactNode;
}
