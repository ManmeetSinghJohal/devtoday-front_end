interface NavIconsState {
  [key: string]: boolean;
}

interface NavIcon {
  id: SelectedIcon;
  href: string;
  icon: ReactElement;
}

interface ModalIcon {
  id: string;
  icon: ReactElement;
}
