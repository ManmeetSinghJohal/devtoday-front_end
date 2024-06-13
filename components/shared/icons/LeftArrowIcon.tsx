const LeftArrowIcon: React.FC<IconProps> = ({
  width = 15,
  height = 12,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2 7H1.79995M1.79995 7L7.39995 1M1.79995 7L7.39995 13"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LeftArrowIcon;
