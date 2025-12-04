import { useRef, useState, useEffect } from "react";

export const OTPInput = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // Permite apenas o último caractere inserido
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Trigger onComplete
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onComplete(combinedOtp);

    // Move para o próximo input se houver valor
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div
      className={`flex px-4 py-3.5 flex-col gap-1.5 w-full rounded-lg bg-[var(--color-bg-neutral-secondary)] border border-[var(--color-border-neutral-secondary)]`}
    >
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(input) => (inputRefs.current[index] = input)}
          type="number"
          value={value}
          required
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-full text-[var(--color-text-neutral-white)] focus:outline-none placeholder:text-[var(--color-text-neutral-placeholder)]  transition-all duration-200"
        />
      ))}
    </div>
  );
};
