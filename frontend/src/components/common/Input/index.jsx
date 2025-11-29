export const Input = ({
  placeholder,
  type = "text",
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex px-4 py-3.5 flex-col gap-1.5 w-full rounded-lg bg-[var(--color-bg-neutral-secondary)] border border-[var(--color-border-neutral-secondary)]">
      {label && (
        <label
          htmlFor={type}
          className="text-[var(--color-text-neutral-tertiary)] text-xs font-medium "
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-[var(--color-text-neutral-white)] focus:outline-none text-sm placeholder:text-[var(--color-text-neutral-placeholder)]  transition-all duration-200"
      />
    </div>
  );
};
