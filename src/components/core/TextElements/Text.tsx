import React, { FC } from 'react';

interface DataProps {
    className?: string;
    children?: any;
    props?: any;
}

export const Text: FC<DataProps> = ({ className, children, ...props }) => (
    <p className={`font-robot font-regular ${className}`} {...props}>
        {children}
    </p>
);