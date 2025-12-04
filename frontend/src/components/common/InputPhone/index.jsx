import { useState, useRef, useEffect } from "react";
import arrowButton from "../../../assets/images/icons/chevron-down.svg";

const countryCodes = [
  { code: "+1", country: "US" },
  { code: "+55", country: "BR" },
  { code: "+44", country: "UK" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+34", country: "ES" },
  { code: "+39", country: "IT" },
  { code: "+351", country: "PT" },
  { code: "+52", country: "MX" },
  { code: "+54", country: "AR" },
];

export const InputPhone = ({ placeholder }) => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");
    return numbers;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <div className="flex px-4 py-3.5 flex-col gap-1.5 w-full rounded-lg bg-[var(--color-bg-neutral-secondary)] border border-[var(--color-border-neutral-secondary)]">
      <label className="text-[var(--color-text-neutral-tertiary)] text-xs font-medium">
        Phone Number
      </label>
      <div className="flex gap-2 w-full">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex gap-1 justify-center items-center text-[var(--color-text-neutral-white)]"
          >
            <span className="text-gray-300 font-medium">
              {selectedCode.code}
            </span>
            <img
              src={arrowButton}
              alt="icon seta para baixo"
              className={`w-4 h-4 text-gray-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              } duration-500`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            />
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute text-[var(--color-text-neutral-white)] top-full mt-2 w-28 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-xl z-10 max-h-64 overflow-y-auto">
              {countryCodes.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    setSelectedCode(country);
                    setIsOpen(false);
                  }}
                  className="w-full p-3 flex items-center hover:bg-gray-800 transition-colors text-left"
                >
                  <span className="text-sm">
                    {country.code}{" "}
                    <span className="text-[var(--color-text-neutral-tertiary)] text-[10px]">
                      {country.country}
                    </span>
                  </span>

                  <span className="font-medium">{}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          className="w-full text-[var(--color-text-neutral-white)] focus:outline-none text-sm placeholder:text-[var(--color-text-neutral-placeholder)]  transition-all duration-200"
        />
      </div>
    </div>
  );
};
