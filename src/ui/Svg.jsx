import Icons from "../assets/sprite.svg";

const Svg = ({ name, color = "black", size = 25, className }) => {
  return (
    <svg
      className={`${className} inline`}
      fill={color}
      width={size}
      height={size}
    >
      <use href={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Svg;
