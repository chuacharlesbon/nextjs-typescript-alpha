import React, { FC } from 'react';

interface DataProps {
    className?: string;
    children?: any;
    props?: any;
}

export const Span: FC<DataProps> = ({ className, children, ...props }) => (
  <span className={`${className}`} {...props}>
    {children}
  </span>
);