declare module "@swapnesh.io/stickyheader" {
    import { FC, ReactNode, CSSProperties } from 'react';

    export type StickyHeaderProps = {
        style?: CSSProperties;
        className?: string;
        children: ReactNode;
    };

    export const StickyHeader: FC<StickyHeaderProps>;
    export default StickyHeader;
}
