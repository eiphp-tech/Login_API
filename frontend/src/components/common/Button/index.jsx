import { useRef, useEffect} from 'react';
import gsap from  'gsap';


/**
 * Componente de botão com animações GSAP
 * 
 * @param {string} variant - 'primary' | 'secondary' | 'outline'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {ReactNode} icon - Icon element
 * @param {boolean} fullWidth - Full width button
 * @param {boolean} isLoading - Loading state
 * @param {boolean} disabled - Disabled state
 * @param {function} onClick - Click handler
 * @param {string} type - Button type
 * @param {ReactNode} children - Button content
 */

const Button = ({
  children,
  variant = 'primario',
  size = 'md',
  fullWidth = false,
  onClick,
  disabled = false,
  type = 'button',
  isLoading = false,
  className = ''
}) => {
  const buttonRef = useRef(null);

  //classe base
  const baseClasses = 'font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed';

  //variantes dos estilos
  const variants = {
    primary: 'bg-primary text-black hover:bg-primary-600',
    secondary: 'bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20',
    outline: 'bg-transparent text-white border border-white/30 hover:bg-white/5'
  }

  //Size dos estilos
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3.5 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  // GSAP Hover Animation
  const handleMouseEnter = () => {
    if (disabled || isLoading) return;
    
    gsap.to(buttonRef.current, {
      scale: 1.02,
      boxShadow: variant === 'primary' 
        ? '0 0 20px rgba(212, 255, 0, 0.3)' 
        : '0 0 15px rgba(255, 255, 255, 0.2)',
      duration: 0.3,
      ease: 'power1.out'
    });
  };

  const handleMouseLeave = () => {
    if (disabled || isLoading) return;
    
    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
      duration: 0.3,
      ease: 'power1.out'
    });
  };

  // GSAP Click Animation
  const handleClick = (e) => {
    if (disabled || isLoading) return;
    
    gsap.fromTo(buttonRef.current,
      { scale: 1.02 },
      { 
        scale: 0.98,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          if (onClick) onClick(e);
        }
      }
    );
  };

  // Loading pulse animation
  useEffect(() => {
    if (isLoading && buttonRef.current) {
      gsap.to(buttonRef.current, {
        opacity: 0.7,
        duration: 0.6,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
      });
    } else if (buttonRef.current) {
      gsap.killTweensOf(buttonRef.current);
      gsap.to(buttonRef.current, { opacity: 1, duration: 0.3 });
    }

    return () => {
      if (buttonRef.current) {
        gsap.killTweensOf(buttonRef.current);
      }
    };
  }, [isLoading]);

  return (
    <button ref={buttonRef}
    type={type}
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    disabled = {disabled || isLoading}
    className={
      `${baseClasses} ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
        `}
    >
      {
        isLoading ? (
          <>
          <div className='w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin'>
            Carregando...
          </div>
          </>
        ) : <>
        {children}
        </>
      }
    </button>
  )
}

export default Button