export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  appearance?: "close" | 'pagination'
  isActive? : boolean
}
