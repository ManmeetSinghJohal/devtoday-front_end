interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  size?: number;
  theme?: "light" | "dark";
  isSelected?: boolean;
  pending?: boolean;
  onClick?: () => void;
}

interface NavIconProps {
  id: SelectedIcon;
  isSelected: boolean;
}
