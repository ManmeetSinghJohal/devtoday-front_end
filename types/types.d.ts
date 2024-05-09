type NavIcons = "layers" | "calendar" | "headphones" | "groups" | "create";
type NavModalIcons = "notifications" | "search";
type Sort = "newest" | "popular" | "following";
type UserProfile = {
  id: string;
  name?: string;
  createdAt: string;
  email: string;
  password: string;
  username: string;
  image: string | null;
  profile: {
    onBoardingCompleted: boolean;
    userId: string;
    journey: string;
    ambitions: string[];
    tech: string[];
  };
};
