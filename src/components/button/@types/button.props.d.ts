export interface IButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

