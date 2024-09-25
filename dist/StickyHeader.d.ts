import React from 'react';
import './styles.css';
type StickyHeaderProps = {
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactNode;
};
declare const StickyHeader: React.FC<StickyHeaderProps>;
export default StickyHeader;
