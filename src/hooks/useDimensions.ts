import { MutableRefObject, useEffect, useState } from 'react';

export const useDimensions = (
  ref: MutableRefObject<HTMLElement | null>,
  update: any,
) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window?.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      const boundingRect = ref.current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, [ref, update, windowWidth]);

  return dimensions;
};
