import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

type StickyHeaderProps = {
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactNode;
};

const StickyHeader: React.FC<StickyHeaderProps> = ({ style, className, children }) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const currentScrollY = window.scrollY;

                // Check if we are at the top of the page
                if (currentScrollY === 0) {
                    headerRef.current.classList.remove('StickyHeader-not-pinned');
                    headerRef.current.classList.remove('StickyHeader-pinned');
                } else if (currentScrollY > lastScrollY + 2) {
                    // Scrolling down slightly
                    headerRef.current.classList.add('StickyHeader-not-pinned');
                    headerRef.current.classList.remove('StickyHeader-pinned');
                } else if (currentScrollY < lastScrollY - 2) {
                    // Scrolling up slightly
                    headerRef.current.classList.add('StickyHeader-pinned');
                    headerRef.current.classList.remove('StickyHeader-not-pinned');
                }

                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className='StickyHeader-wrapper'>
            <div ref={headerRef} style={style} className={`StickyHeader ${className || ''}`}>
                {children}
            </div>
        </div>
    );
};

export default StickyHeader;
