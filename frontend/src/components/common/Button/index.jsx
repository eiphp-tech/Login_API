export const Button = ({
  children,
  icon: Icon,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    "font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  //Variações de styles
  const variants = {
    primary:
      "bg-[var(--color-fg-brand-primary)] text-[var(--color-text-neutral-inverse)] rounded-lg w-full hover:bg-[#B8F000] active:bg-[#A8E000] transition-all duration-200 ",
    secondary:
      "bg-transparent border-2 border-[var(--color-border-neutral-secondary)] text-[var(--color-text-neutral)] rounded-lg w-full  hover:border-gray-600 active:bg-gray-700 transition-all duration-200 ",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]}
        ${size[sizes]}
        ${className}
        `}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <img src={Icon} alt="" className="w-5 h-5" />}
      {children}
    </button>
  );
};
