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
interface PostProps {
  key: string;
  title: string;
  content: string;
  tags: any;
  createdAt: Date;
  image: string;
}
interface PostCardProps extends PostProps {
  comments: any;
  views: number;
  createdAt: Date;
  liked: boolean;
}
interface ProfilePageProps {
  user: UserProfile;
  posts: PostCardProps[];
  type: string;
}

interface MeetupCardProps extends PostProps {
  meetDay: Date;
}
interface PodcastCardProps extends PostProps {
  podcastLength?: string;
}

interface GroupCardProps extends PostProps {
  members?: [
    {
      id: string;
      username: string;
      image: string;
    },
  ];
}
