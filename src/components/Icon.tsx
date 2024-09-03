const Icon = ({
  urlIcon,
  width,
  height,
  className,
  onClick,
}: {
  urlIcon: string;
  width: number;
  height: number;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <img
      src={urlIcon}
      alt="icon"
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  );
};

export default Icon;
