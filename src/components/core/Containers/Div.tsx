import React, { FC } from 'react';

interface DivProps {
  className?: string;
  children?: any;
  props?: any;
  style?: any;
}

export const Div: FC<DivProps> = ({ className, children, style, ...props }) => (
  <div className={`${className}`} {...props} style={style} >
    {children}
  </div>
);