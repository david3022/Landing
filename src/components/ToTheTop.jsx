import { useRef, useEffect } from 'react';
import Tilt from 'react-tilt';

const ToTheTop = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        // Accede al elemento Tilt utilizando la referencia y haz las operaciones necesarias
        if (tiltRef.current) {
          // Por ejemplo, puedes cambiar la clase del elemento
          tiltRef.current.classList.add('scrolled');
        }
      } else {
        // Si lo necesitas, puedes revertir las operaciones al deshacer el scroll
        if (tiltRef.current) {
          tiltRef.current.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Tilt ref={tiltRef}>
      {/* Contenido de tu componente */}
    </Tilt>
  );
};

export default ToTheTop;

