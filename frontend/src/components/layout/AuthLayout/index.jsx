export const AuthLayout = ({ children, imageSrc }) => {
  return (
    <div className="min-h-screen w-full flex bg-brand-black overflow-hidden">
      {/* Coluna da Esquerda - Conteúdo */}
      <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-10 overflow-y-auto">
        {/* Logo */}
        <div className="mb-10 flex items-center gap-2">
          <svg className="w-full">
            <img src="/images/logoIcon.svg" alt="Logotipo Syncro" />
          </svg>
        </div>

        {/* Conteúdo da Página */}
        <div className="w-full max-w-md mx-auto">{children}</div>
      </div>

      {/* Coluna da Direita - Arte 3D */}
      {/* Hidden em mobile para focar no form */}
      <div className="hidden md:block md:w-1/2 lg:w-[55%] relative p-4">
        <div className="w-full h-full rounded-3xl overflow-hidden relative">
          <img
            src={imageSrc}
            alt="Artistic 3D Abstract"
            className="w-full h-full object-cover"
          />
          {/* Overlay opcional se a imagem for muito clara */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
  );
};
