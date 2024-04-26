const CreateIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  theme = "light",
  isSelected = false,
}: IconProps) => {
  const color = !isSelected
    ? theme === "light"
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
        d="M13.883 1.667c2.834 0 4.45 1.6 4.45 4.441v7.784c0 2.825-1.608 4.441-4.441 4.441H6.108c-2.841 0-4.441-1.616-4.441-4.441V6.108c0-2.841 1.6-4.441 4.441-4.441h7.775ZM9.992 6.258a.69.69 0 0 0-.692.692V9.3H6.942a.723.723 0 0 0-.492.2.721.721 0 0 0-.2.492c0 .383.308.691.692.7H9.3v2.358a.69.69 0 0 0 .692.692.69.69 0 0 0 .691-.692v-2.358h2.367a.703.703 0 0 0 .692-.7.69.69 0 0 0-.692-.692h-2.367V6.95a.69.69 0 0 0-.691-.692Z"
      />
    </svg>
  );
};

export default CreateIcon;
