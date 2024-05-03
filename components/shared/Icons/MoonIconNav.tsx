import { useTheme } from "@/context/ThemeProvider";

const MoonIconNav = () => {
  const { mode } = useTheme();
  const color = mode === "light" ? "#808191" : "#F8FAFC";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
      <path
        fill={color}
        d="M15.999 8.793a8.018 8.018 0 0 1-8.251 7.202A8.02 8.02 0 0 1 7.21.002a.263.263 0 0 1 .16.49 5.938 5.938 0 1 0 8.142 8.137.263.263 0 0 1 .487.161v.003Z"
      />
    </svg>
  );
};

export default MoonIconNav;
