import { useTheme } from "@/context/ThemeProvider";

const SearchIcon: React.FC<IconProps> = ({ isSelected }: IconProps) => {
  const { mode } = useTheme();

  const color = !isSelected
    ? mode === "light"
      ? "#808191"
      : "#C5D0E6"
    : "#ffffff";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
      <path
        fill={color}
        fillRule="evenodd"
        d="M.667 7.892c0-3.99 3.2-7.225 7.148-7.225a7.11 7.11 0 0 1 5.054 2.116 7.265 7.265 0 0 1 2.094 5.109c0 3.99-3.2 7.224-7.148 7.224-3.948 0-7.148-3.234-7.148-7.224Zm14.178 5.82 2.128 1.718h.037c.431.436.431 1.142 0 1.577a1.094 1.094 0 0 1-1.56 0l-1.766-2.025a.902.902 0 0 1 0-1.27.822.822 0 0 1 1.16 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SearchIcon;
