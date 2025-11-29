import { useRef } from "react";

export const TextLink = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const textRef = useRef(null);

  //Variações de styles
  const variants = {
    primary:
      "bg-transparent text-[#C4FF0D] font-semibold  underline-offset-4 hover:underline transition-colors duration-400",
    secondary:
      "bg-transparent text-[#FFFFFF] font-regular  underline-offset-4 hover:underline transition-colors duration-200",
  };

  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <span
      ref={textRef}
      className={` ${variants[variant]}
        ${size[sizes]}
        ${className}
        `}
    >
      {children}
    </span>
  );
};
