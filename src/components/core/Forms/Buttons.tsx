import React, { FC } from 'react';

interface DataProps {
    className?: string;
    children: any;
    onClick: any;
    isSubmit?: boolean;
}

export const ButtonClassA: FC<DataProps> = ({ className, children, onClick, isSubmit }) => {

    return (
            <button
                className={`duration-700 shadow-lg py-1 px-4 font-bold ${className}`}
                onClick={onClick}
                type={isSubmit ? "submit" : "button"}
            >
                {children}
            </button>
    );
};

export const RawButtonClass: FC<DataProps> = ({ className, children, onClick, isSubmit }) => {

    return (
            <button
                className={className}
                onClick={onClick}
                type={isSubmit ? "submit" : "button"}
            >
                {children}
            </button>
    );
};