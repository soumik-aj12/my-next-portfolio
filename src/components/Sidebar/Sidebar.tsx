// Sidebar.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../Navbar/links';
import Link from 'next/link';
import useMediaQuery from '@/hooks/useMediaQuery'; // Import the hook
import FloatingDock from '../Navbar/FloatingDock';

type TextRefType = React.RefObject<HTMLDivElement>;

const Sidebar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [textWidths, setTextWidths] = useState<number[]>([]);
  const textRefs: TextRefType[] = useRef([]).current;

  const isMobileOrTablet = useMediaQuery('(max-width: 1024px)'); 

  const sidebarVariants = {
    hover: { width: '240px' },
    initial: { width: '60px' },
  };

  useEffect(() => {
    const newWidths = textRefs.map((ref) => ref.current?.offsetWidth || 0);
    setTextWidths(newWidths);
  }, [hoveredItem]);

  return (
    <>
      {/* Conditionally render the FloatingDock based on screen size */}
      {isMobileOrTablet ?<FloatingDock/>:(
        <motion.div
        className="fixed left-0 top-0 h-screen text-white"
        initial="initial"
        animate={hoveredItem !== null ? 'hover' : 'initial'}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className="h-full flex flex-col justify-center">
          <ul>
            {navItems.map((item, index) => {
              if (textRefs.length <= index) {
                textRefs.push(React.createRef<HTMLDivElement>());
              }
              return (
                <motion.li
                  key={index}
                  className="mb-8 relative"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="py-2 pr-4 flex items-center h-8">
                    <motion.div
                      className="h-0.5 bg-white absolute"
                      initial={{ width: '10px', height: '10px' }}
                      animate={{
                        width: hoveredItem === index ? '0px' : '20px',
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      ref={textRefs[index]}
                      className="absolute left-4 text-4xl whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredItem === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href={item.href}>
                        <span className='text-green-600'>#</span><span className="text-white font-bold">{item.title}</span>
                      </Link>
                    </motion.div>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-4 h-[0.5px] bg-white"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredItem === index ? `${textWidths[index]}px` : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
      )}
    </>
  );
};

export default Sidebar;
