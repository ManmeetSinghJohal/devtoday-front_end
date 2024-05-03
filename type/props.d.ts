interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  size?: number;
  theme?: "light" | "dark";
  isSelected?: boolean;
  onClick?: () => void;
}

interface NavIconProps {
  id: SelectedIcon;
  isSelected: boolean;
  pending?: boolean;
}
