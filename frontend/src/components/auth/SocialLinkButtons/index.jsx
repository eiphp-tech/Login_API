import googleIcon from "../../../assets/images/icons/Google.svg";
import microsoftIcon from "../../../assets/images/icons/Microsoft.svg";

export const SocialLinkButtons = ({ children, size = "md" }) => {
  const icons = {
    google: googleIcon,
    microsoft: microsoftIcon,
  };

  const iconSize = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <button className="bg-transparent border-2 border-[var(--color-border-neutral-secondary)] text-[var(--color-text-neutral-white)] font-medium rounded-lg px-6 py-3.5 w-full flex items-center justify-center gap-3 hover:border-[var(--color-border-neutral-tertiary)] transition-all duration-200 cursor-pointer">
        <img
          src={icons.google}
          alt="google icon"
          className={`${iconSize[size]}`}
        />
        {children} Google
      </button>

      <button className="bg-transparent border-2 border-[var(--color-border-neutral-secondary)] text-[var(--color-text-neutral-white)] font-medium rounded-lg px-6 py-3.5 w-full flex items-center justify-center gap-3 hover:border-[var(--color-border-neutral-tertiary)] transition-all duration-200 cursor-pointer">
        <img
          src={icons.microsoft}
          alt="microsoft icon"
          className={`${iconSize[size]}`}
        />
        {children} Microsoft
      </button>
    </div>
  );
};
