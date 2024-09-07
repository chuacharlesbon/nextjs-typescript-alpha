import React, { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FlexRow } from "../../core/Containers";
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { MenuList } from '../../../constants/constants';

interface ButtonProps {
    className?: string;
    title: string;
    onClose: any;
    description?: string;
    isOpen: boolean;
}

export const ToastMenu: FC<ButtonProps> = ({
    title, description, onClose, isOpen
}) => {

    return (
        <Transition appear as={Fragment} show={isOpen}>
            <Dialog
                as="div"
                className="fixed top-0 left-0 right-0 bottom-0 z-40 h-screen w-screen flex justify-center items-center bg-secondary-200"
                onClose={onClose}
            >
                <div className="w-full h-screen text-center">

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease duration-300 transform"
                        enterFrom="opacity-0 -translate-y-full"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease duration-300 transform"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-full"
                    >
                        <div
                            className="h-full w-full overflow-hidden text-left z-50 p-4 align-middle transition-all transform flex flex-col justify-end items-center"
                        >
                            <div
                                className={`flex flex-col justify-around p-4 text-gray-500 w-full medium:w-300px rounded-lg shadow-xl dark:text-gray-400 font-robot bg-secondary-100 mb-8`}
                                id="toast-success"
                                role="alert"
                            >
                                <FlexRow className={`w-full pb-2 border-b border-grey-400 justify-between ${description ? 'items-start' : 'items-center'}`}>
                                    <div>
                                        <div className={`font-semibold font-robot text-base text-grey-400`}>
                                            {title.toUpperCase()}
                                        </div>
                                        {
                                            description
                                                ? <div className="text-sm font-normal font-robot text-white">{description}</div>
                                                : <></>
                                        }
                                    </div>
                                    <div className='w-4 h-4' />
                                    <button
                                        aria-label="Close"
                                        className="-mr-2 -mt-2 bg-secondary-300 hover:bg-secondary-200 text-white text-lg rounded-lg inline-flex h-8 w-8 justify-center items-center"
                                        data-collapse-toggle="toast-success"
                                        onClick={onClose}
                                        type="button"
                                    >
                                        <FaTimes />
                                    </button>
                                </FlexRow>

                                <div className='w-full'>
                                {MenuList.map((value: any) => (
                                    <div className="p-1" key={value.name}>
                                        {value.links.map((link: any) => (
                                            <Link
                                                className={`hover:bg-dark-100 text-white group flex rounded-md items-center w-full p-2 text-base`}
                                                href={link.url}
                                                key={link.name}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};
