import React, { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FlexRow } from "../../core/Containers";
import { FaTimes } from 'react-icons/fa';

interface ButtonProps {
  className?: string;
  title: string;
  onClose: any;
  description?: string;
  isOpen: boolean;
  toastKind: string;
  children?: any;
}

export const ToastDialogInfo: FC<ButtonProps> = ({
  title, description, onClose, isOpen, toastKind, children
}) => {

  const getTitle = () => {
    switch (toastKind) {
      case 'info':
        return <div className={`font-semibold font-robot text-base text-dark-100`}>
          {title.toUpperCase()}
        </div>;
        break;
      case 'success':
        return <div className={`font-semibold font-robot text-base text-green-100`}>
          {title.toUpperCase()}
        </div>;
        break;
      case 'error':
        return <div className={`font-semibold font-robot text-base text-red-100`}>
          {title.toUpperCase()}
        </div>;
        break;
      case 'warning':
        return <div className={`font-semibold font-robot text-base text-yellow-100`}>
          {title.toUpperCase()}
        </div>;
        break;
      default:
        return <div className={`font-semibold font-robot text-base text-dark-100`}>
          {title.toUpperCase()}
        </div>;
        break;
    }
  }

  const getIcon = () => {
    switch (toastKind) {
      case 'info':
        return <FaTimes className={`text-lg text-dark-100`} />;
      case 'success':
        return <FaTimes className={`text-lg text-green-100`} />;
      case 'error':
        return <FaTimes className={`text-lg text-red-100`} />;
      case 'warning':
        return <FaTimes className={`text-lg text-yellow-100`} />;
      default:
        return <FaTimes className={`text-lg text-dark-100`} />;
    }
  }

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
              className="h-full w-full overflow-hidden text-left z-50 p-4
      align-middle transition-all transform flex flex-col justify-center items-center"
            >
              <div
                className={`flex flex-col justify-around p-4 text-gray-500 w-300px rounded-lg shadow-xl dark:text-gray-400 font-robot bg-white`}
                id="toast-success"
                role="alert"
              >
                <FlexRow className={`w-full justify-between ${description ? 'items-start' : 'items-center'}`}>
                  <div>
                    {getTitle()}
                    {
                      description
                        ? <div className="text-sm font-normal font-robot text-dark-100">{description}</div>
                        : <></>
                    }
                  </div>
                  <div className='w-4 h-4' />
                  <button
                    aria-label="Close"
                    className="bg-white text-grey-200 hover:text-grey-100 
              rounded-lg inline-flex h-8 w-8 justify-center items-center border border-grey-400 outline-grey-500"
                    data-collapse-toggle="toast-success"
                    onClick={onClose}
                    type="button"
                  >
                    {getIcon()}
                  </button>
                </FlexRow>

                <div className='w-full'>
                  {children}
                </div>

              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};