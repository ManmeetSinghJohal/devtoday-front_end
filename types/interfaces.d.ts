interface NavIconsState {
  [key: string]: boolean;
}

interface NavIcon {
  id: SelectedIcon;
  href: string;
  icon: ReactElement;
  exact?: boolean;
}

interface ModalIcon {
  id: string;
  icon: ReactElement;
}
interface SortFiltersCard {
  id: string;
  label: string;
}

interface Post {
  id: string;
  key: string;
  title: string;
  tinyContent: string;
  interestTechTags: Tag[];
  createdAt: string;
  coverImage: string;
  comments: any;
  views: number;
  createdAt: string;
  meetupDate?: string;
  podcastLength?: string;
  likes: Like[];
  members?: [
    {
      id: string;
      username: string;
      image: string;
    },
  ];
  name?: string;
  coverImage?: string;
  bio?: string;
  groupUser?: GroupUser[];
  _count?: {
    groupUser: number;
  };
}

interface InterestTechTag {
  name: string;
}

interface PostData {
  id: string;
  authorId: string;
  title: string;
  createType: "STANDARD" | "MEETUP" | "PODCAST";
  groupId: string;
  coverImage: string;
  audioFile: string;
  audioTitle: string;
  meetupLocation: string;
  meetupDate: Date | null;
  tinyContent: string;
  createdAt: string;
  views: number;
  interestTechTags: InterestTechTag[];
}
