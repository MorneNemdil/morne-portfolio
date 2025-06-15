import { useEffect, useState } from 'react';

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<'sm' | 'md' | 'lg' | 'xl'>('sm');

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setBreakpoint('xl');
      else if (width >= 1024) setBreakpoint('lg');
      else if (width >= 768) setBreakpoint('md');
      else setBreakpoint('sm');
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // Initial check

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return breakpoint;
}
