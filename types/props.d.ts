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
interface UserProfileProps {
  user: UserProfile;
  isOwner: boolean;
}
interface EditProfileProps {
  user: UserProfile;
}
interface PostProps {
  user: UserProfile;
  key: string;
  post: Post;
  /*  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  image: string; */
}

/* interface PostCardProps extends PostProps {

user: UserProfile;
} */

/* interface MeetupCardProps extends PostProps {
  meetDay: string;
}
interface PodcastCardProps extends PostProps {
  podcastLength?: string;
  liked: boolean;
}

interface GroupCardProps extends PostProps {
  members?: [
    {
      id: string;
      username: string;
      image: string;
    },
  ];
} */
interface ProfilePageProps {
  user: UserProfile;
  posts: Post[];
  type: string;
  isOwner: boolean;
}

interface RecentPostsProps {
  posts: Post[];
  user: UserProfile;
}
interface PerformancesCardProps {
  posts: Post[];
}
interface InfiniteScrollProps {
  user: UserProfile;
  type: string;
  initialPosts: Post[];
}
