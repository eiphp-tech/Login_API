export const AuthLayout = ({ children, imageSrc }) => {
  return (
    <div className="h-screen min-h-screen w-full flex justify-center overflow-hidden ">
      {/* Coluna da Esquerda - Conteúdo */}
      <div className="w-full md:w-1/2 lg:min-w-[20%] flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-10 overflow-y-hidden">
        {/* Logo */}
        <div className="mb-10 lg:ml-5 flex items-center ">
          <img src="/images/syncro-logo.svg" alt="Logotipo Syncro" />
        </div>

        {/* Conteúdo da Página */}
        <div className="w-full max-w-md mx-auto">{children}</div>
      </div>

      {/* Coluna da Direita - Arte 3D */}
      {/* Hidden em mobile para focar no form */}
      <div className="hidden md:block md:w-1/2 lg:w-[55%] relative p-1 pr-0">
        <div className="w-full h-full rounded-3xl overflow-hidden relative">
          <img
            src={imageSrc}
            alt="Artistic 3D Abstract"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
