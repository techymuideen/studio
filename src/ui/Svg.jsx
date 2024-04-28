import Icons from "../assets/sprite.svg";

const Svg = ({
  name,
  color = "currentcolor",
  size = 25,
  className,
  onClick,
}) => {
  return (
    <svg
      className={`${className} inline`}
      fill={color}
      width={size}
      height={size}
      onClick={onClick}
    >
      <use href={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Svg;
