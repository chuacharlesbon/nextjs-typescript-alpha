import { AllLinks } from "../../../constants/constants";
import { Span } from "../../core/TextElements";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { FC, Fragment } from "react";
import { Spacer } from "../Containers";

interface ModalProps {
    isOpen: boolean;
    onClose: any;
}

export const ToastDrawerLeft: FC<ModalProps> = ({ isOpen, onClose }) => {

    return (
        <Transition appear as={Fragment} show={isOpen}>
            <Dialog
                as="div"
                className="fixed h-full w-72 inset-0 z-10 overflow-hide ml-auto"
                onClose={onClose}
            >
                <div className="h-full text-center flex justify-start">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease duration-700 transform"
                        enterFrom="opacity-0 -translate-x-full"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease duration-1000 transform"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 -translate-x-full"
                    >
                        <div
                            className="h-full w-full overflow-hidden text-left z-20 py-5 items-center
                align-middle transition-all transform bg-grey-600 shadow-xl flex flex-col"
                        >
                            <Link className="text-center phone:w-1/2 tablet:w-auto" href="/home" target='_blank'>
                                <Spacer className='w-24 h-10 rounded-full bg-blue-100 mx-auto tablet:mx-1' />
                            </Link>

                            {AllLinks[0].links.map((value: any) => (
                                <Link
                                    className={`w-full py-5 tex-base font-medium hover:text-blue-100 hover:border-r-4 text-primary-100 text-center`}
                                    key={value.name}
                                    href={value.url}
                                >
                                    {/* <i className={`${value.icon} w-14 text-2xl`} /> */}
                                    <Span className="font-robot text-primary-100">{value.name}</Span>
                                </Link>
                            ))}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export const ToastDrawerRight: FC<ModalProps> = ({ isOpen, onClose }) => {

    return (
        <Transition appear as={Fragment} show={isOpen}>
            <Dialog
                as="div"
                className="fixed h-full w-72 inset-0 z-50 overflow-hide ml-auto"
                onClose={onClose}
            >
                <div className="h-full text-center flex justify-start">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease duration-700 transform"
                        enterFrom="opacity-0 translate-x-full"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease duration-1000 transform"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-full"
                    >
                        <div
                            className="h-full w-full overflow-hidden text-left py-5 items-center
                align-middle transition-all transform bg-grey-600 shadow-xl flex flex-col"
                        >
                            <Link className="text-center phone:w-1/2 tablet:w-auto" href="/home" target='_blank'>
                                <Spacer className='w-24 h-10 rounded-full bg-blue-100 mx-auto tablet:mx-1' />
                            </Link>
                            
                            {AllLinks[0].links.map((value: any) => (
                                <Link
                                    className={`w-full py-5 tex-base font-medium hover:text-blue-100 hover:border-r-4 text-primary-100 text-center`}
                                    key={value.name}
                                    href={value.url}
                                >
                                    {/* <i className={`${value.icon} w-14 text-2xl`} /> */}
                                    <Span className="font-robot text-primary-100">{value.name}</Span>
                                </Link>
                            ))}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};