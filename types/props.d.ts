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
interface ProfilePageProps {
  user: UserProfile;
  posts: PostCardProps[];
  type: string;
}

interface MeetupCardProps extends PostCardProps {
  meetDay: Date;
}
interface PodcastCardProps extends PostCardProps {
  podcastLength?: string;
}

interface GroupCardProps extends PostCardProps {
  members?: [
    {
      id: string;
      username: string;
      image: string;
    },
  ];
}
