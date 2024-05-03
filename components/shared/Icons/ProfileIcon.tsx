import { useTheme } from "@/context/ThemeProvider";

const ProfileIcon: React.FC<IconProps> = ({
  width = 16,
  height = 16,
}: IconProps) => {
  const { mode } = useTheme();

  const color = mode === "light" ? "#262935" : "#F8FAFC";
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
      >
        <path
          fill={color}
          d="M5.642 7.221A4.006 4.006 0 0 0 8 8c.842 0 1.663-.274 2.358-.779A3.98 3.98 0 0 0 12 4c0-2.21-1.79-4-4-4S4 1.79 4 4a3.98 3.98 0 0 0 1.642 3.221ZM15.905 14.205c-.058-.312-.115-.625-.21-.917a8.131 8.131 0 0 0-4.467-5.17 3.042 3.042 0 0 1-.458.39 4.272 4.272 0 0 1-2.578.858 4.23 4.23 0 0 1-2.577-.859c-.21-.156-.4-.331-.573-.507C2.16 9.17.156 12 .002 15.22a.741.741 0 0 0 .192.546.715.715 0 0 0 .534.234h14.527c.21 0 .401-.078.535-.234A.86.86 0 0 0 16 15.2c0-.098 0-.195-.019-.273 0-.234-.038-.488-.076-.722Z"
        />
      </svg>
    </>
  );
};

export default ProfileIcon;
