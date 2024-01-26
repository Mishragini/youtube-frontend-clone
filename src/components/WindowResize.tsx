import { sideNavbarState } from '@/store/atom';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const WindowResize = () => {
  // State to store the window dimensions
  const [windowSize, setWindowSize] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const [open, setOpen] = useRecoilState(sideNavbarState);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(
        typeof window !== 'undefined' ? window.innerWidth : 0
      );

      if (windowSize < 640) {
        setOpen(false);
      }
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return (
    <>
      {/* Your component JSX here */}
    </>
  );
};

export default WindowResize;
