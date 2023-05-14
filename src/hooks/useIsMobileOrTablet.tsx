import { useState, useEffect } from 'react';

const useIsMobileOrTablet = (): boolean => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      const { innerWidth } = window;
      setIsMobileOrTablet(innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    // On initialise la valeur au chargement de la page
    handleResize();

    // On nettoie l'event listener après la fin de l'effet
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileOrTablet;
};

export default useIsMobileOrTablet;
