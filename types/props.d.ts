interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  size?: number;
  theme?: "light" | "dark";
  isSelected?: boolean;
  onClick?: () => void;
  pending?: boolean;
}

interface NavIconProps {
  id: SelectedIcon;
  pending?: boolean;
}
interface PostCardProps {
  title: string;
  content: string;
  tags: any;
  comments: any;
  views: number;
  createdAt: Date;
  liked: boolean;
  image: string;
}
interface ProfileProps {
  user: UserProfile;
}
