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
  content: string;
  tags: Tag[];
  createdAt: string;
  image: string;
  comments: any;
  views: number;
  createdAt: string;
  liked: boolean;
  meetDate?: string;
  podcastLength?: string;
  liked: boolean;
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
