type NavIcons = "layers" | "calendar" | "headphones" | "groups" | "create";
type NavModalIcons = "notifications" | "search";
type Sort = "newest" | "popular" | "following";
type Post = {
  id: string;
  key: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  image: string;
  comments: any;
  views: number;
  createdAt: string;
  liked: boolean;
  meetDay?: string;
  podcastLength?: string;
  liked: boolean;
  members?: [
    {
      id: string;
      username: string;
      image: string;
    },
  ];
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
    name: string;
    onBoardingCompleted: boolean;
    userId: string;
    bio: string;
    journey: string;
    ambitions: string[];
    tech: string[];
    githubLink: string;
    githubHandle: string;
    linkedinLink: string;
    linkedinHandle: string;
    xProfileLink: string;
    xProfileHandle: string;
    instagramLink: string;
    instagramHandle: string;
  };
  posts: Post[];
};
