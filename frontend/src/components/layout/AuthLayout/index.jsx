export const SplitLayout = ({ form, image }) => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-black text-white">
      <div className="flex items-center justify-center p-10">{form}</div>
      <div className="hidden lg:block w-full h-full overflow-hidden rounded-l-3xl">
        {image}
      </div>
    </div>
  );
};
