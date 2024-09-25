import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import './styles.css';
var StickyHeader = function (_a) {
    var style = _a.style, className = _a.className, children = _a.children;
    var headerRef = useRef(null);
    var _b = useState(0), lastScrollY = _b[0], setLastScrollY = _b[1];
    useEffect(function () {
        var handleScroll = function () {
            if (headerRef.current) {
                var currentScrollY = window.scrollY;
                // Check if we are at the top of the page
                if (currentScrollY === 0) {
                    headerRef.current.classList.remove('StickyHeader-not-pinned');
                    headerRef.current.classList.remove('StickyHeader-pinned');
                }
                else if (currentScrollY > lastScrollY + 2) {
                    // Scrolling down slightly
                    headerRef.current.classList.add('StickyHeader-not-pinned');
                    headerRef.current.classList.remove('StickyHeader-pinned');
                }
                else if (currentScrollY < lastScrollY - 2) {
                    // Scrolling up slightly
                    headerRef.current.classList.add('StickyHeader-pinned');
                    headerRef.current.classList.remove('StickyHeader-not-pinned');
                }
                setLastScrollY(currentScrollY);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    return (_jsx("div", { className: 'StickyHeader-wrapper', children: _jsx("div", { ref: headerRef, style: style, className: "StickyHeader ".concat(className || ''), children: children }) }));
};
export default StickyHeader;
//# sourceMappingURL=StickyHeader.js.map