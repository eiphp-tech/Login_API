import { useRef } from "react";

export const Button = ({
  children,
  icon,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
}) => {
  const buttonRef = useRef(null);

  const baseClasses =
    "font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  //Variações de styles
  const variants = {
    primary:
      "bg-[#C4FF0D] text-black rounded-lg w-full hover:bg-[#B8F000] active:bg-[#A8E000] transition-all duration-200 shadow-[0_0_20px_rgba(196,255,13,0.3)] hover:shadow-[0_0_30px_rgba(196,255,13,0.5)]",
    secondary:
      "bg-transparent border-2 border-gray-700 text-white rounded-lg w-full  hover:border-gray-600 active:bg-gray-700 transition-all duration-200 ",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`${baseClasses} ${variants[variant]}
        ${size[sizes]}
        ${className}
        `}
    >
      {children}
    </button>
  );
};
