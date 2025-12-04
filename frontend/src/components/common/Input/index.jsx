import { useState } from "react";

export const Input = ({
  label,
  type = "text",
  placeholder,
  id,
  onChange,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div
      className={`flex px-4 py-3.5 flex-col gap-1.5 w-full rounded-lg bg-[var(--color-bg-neutral-secondary)] border border-[var(--color-border-neutral-secondary)] ${className}`}
    >
      {label && (
        <label
          htmlFor={id}
          className="text-[var(--color-text-neutral-tertiary)] text-xs font-medium "
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full text-[var(--color-text-neutral-white)] focus:outline-none text-sm placeholder:text-[var(--color-text-neutral-placeholder)]  transition-all duration-200"
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-neutral-tertiary)] text-sm font-medium hover:text-brand-limeHover transition-colors"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};
