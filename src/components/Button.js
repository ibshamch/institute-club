import classNames from "classnames";

const Button = ({
  children,
  type,
  className,
  rounded,
  roundedFull,
  primary,
  disable,
  welcome,
  warning,
  ...rest
}) => {
  const classes = classNames(
    {
      "bg-blue-700  hover:bg-blue-600": primary,
      "bg-green-700 hover:bg-green-600": welcome,
      "bg-red-700 hover:bg-red-600": warning,
      "rounded-xl": rounded,
      "rounded-full": roundedFull,
    },
    className
  );
  return (
    <button type={type} {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
