import CalendarIcon from "./CalendarIcon";
import CreateIcon from "./CreateIcon";
import GroupsIcon from "./GroupsIcon";
import HeadphonesIcon from "./HeadphonesIcon";
import LayersIcon from "./LayersIcon";

export const Icon = ({ id, isSelected }: NavIconProps) => {
  if (id === "layers") return <LayersIcon isSelected={isSelected} />;
  if (id === "calendar") return <CalendarIcon isSelected={isSelected} />;
  if (id === "headphones") return <HeadphonesIcon isSelected={isSelected} />;
  if (id === "groups") return <GroupsIcon isSelected={isSelected} />;
  if (id === "create") return <CreateIcon isSelected={isSelected} />;

  return <CreateIcon />;
};
