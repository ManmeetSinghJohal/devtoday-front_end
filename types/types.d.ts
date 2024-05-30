type NavIcons = "layers" | "calendar" | "headphones" | "groups" | "create";
type NavModalIcons = "notifications" | "search";
type Sort = "newest" | "popular" | "following";
type Tag = {
  id: string;
  name: string;
};

type UserProfile = {
  id: string;
  createdAt: string;
  email: string;
  password: string;
  username: string;
  image: string | null;
  followers: { followerId: string; followingId: string }[];
  following: { followerId: string; followingId: string }[];
  profile: {
    name: string | null;
    onBoardingCompleted: boolean;
    userId: string;
    bio: string;
    journey: string;
    ambitions: string;
    tech: string[];
    githubLink: string | null;
    githubHandle: string | null;
    linkedinLink: string | null;
    linkedinHandle: string | null;
    xProfileLink: string | null;
    xProfileHandle: string | null;
    instagramLink: string | null;
    instagramHandle: string | null;
  };
  _count: {
    following: number;
    followers: number;
  };
  posts: Post[];
  userIsFollowed: boolean;
};

type GroupUser = {
  id: string;
  userId: string;
  groupId: string;
  isAdmin: boolean;
  active: boolean;
  isCreator: boolean;
  user: UserProfile;
};
type Like = {
  userId: string;
  user: UserProfile;
  postId: string;
  post: Post;
};
