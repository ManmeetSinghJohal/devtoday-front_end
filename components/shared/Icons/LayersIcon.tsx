import { useTheme } from "@/context/ThemeProvider";

const LayersIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  isSelected = false,
}: IconProps) => {
  const { mode } = useTheme();

  const color = !isSelected
    ? mode === "light"
      ? "#808191"
      : "#C5D0E6"
    : "#ffffff";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill={color}
        d="m2.345 13.001-.928.552A.85.85 0 0 0 1 14.29a.866.866 0 0 0 .417.74l8.157 4.852a.834.834 0 0 0 .852 0l8.157-4.853a.85.85 0 0 0 .417-.739.867.867 0 0 0-.417-.738L17.655 13l-6.375 3.793a2.504 2.504 0 0 1-2.56 0l-6.375-3.792Z"
      />
      <path
        fill={color}
        d="m2.345 9.001-.928.552A.85.85 0 0 0 1 10.29a.866.866 0 0 0 .417.74l8.157 4.852a.834.834 0 0 0 .852 0l8.157-4.853a.85.85 0 0 0 .417-.739.867.867 0 0 0-.417-.738L17.655 9l-6.375 3.793a2.504 2.504 0 0 1-2.56 0L2.345 9.001Z"
      />
      <path
        fill={color}
        d="M10.427.114a.858.858 0 0 0-.854 0L1.417 4.788a.834.834 0 0 0-.305.302.81.81 0 0 0 .305 1.122l8.156 4.674a.859.859 0 0 0 .854 0l8.156-4.674a.834.834 0 0 0 .305-.302.81.81 0 0 0-.305-1.122L10.427.114Z"
      />
    </svg>
  );
};

export default LayersIcon;
