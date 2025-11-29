export const SocialLinkButtons = () => {
  const icons = {
    google: "/images/icons/Google.svg",
    microsoft: "/images/icons/Microsoft.svg",
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <button className="bg-transparent border border-gray-700 text-white font-medium rounded-lg px-6 py-3.5 w-full flex items-center justify-center gap-3 hover:border-gray-600 transition-all duration-200 cursor-pointer">
        <img src={icons.google} alt="google icon" />
        Sign up with Google
      </button>

      <button className="bg-transparent border border-gray-700 text-white font-medium rounded-lg px-6 py-3.5 w-full flex items-center justify-center gap-3 hover:border-gray-600 transition-all duration-200 cursor-pointer">
        <img src={icons.microsoft} alt="microsoft icon" />
        Sign up with Microsoft
      </button>
    </div>
  );
};
