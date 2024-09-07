import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiMenu } from "react-icons/fi";
import { FaSearch, FaUser, FaHandPaper, FaLink } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { MdHome, MdCall, MdTravelExplore } from "react-icons/md";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import { Div, FlexColumn, FlexRow, Spacer } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { RawInput } from '@/components/core/Forms/RawInput';
import { Images } from "@/constants/assets";
import { RouteNames, MenuList } from '@/constants/constants';
import Link from 'next/link';
import { ToastMenu } from './core/Toast';
import { ToastDrawerRight } from './core/Toast/ToastDrawer';

export const SearchField: FC<any> = () => {
    return (
        <FlexRow className='w-full justify-between items-center'>
            <Div>
                <Text className='text-4xl font-bold'>
                    Title
                </Text>
                <Text>
                    Subtitle
                </Text>
            </Div>
            <Div className='relative w-300px'>
                <ButtonClassA className='absolute index-10 border border-purple-300 bg-purple-300 rounded-md px-4 py-2 right-0' onClick={() => { }}>
                    <FaSearch className="text-2xl" />
                </ButtonClassA>
                <RawInput className="border border-purple-300 rounded-md px-4 py-2" placeholder='Search' type="search" />
            </Div>
        </FlexRow>
    )
}

interface DataProps {
    location: string
    className?: string;
    children?: any;
    onClick?: any;
    props?: any;
    isDarkTheme?: any;
    onDimBackground?: any;
}

export const Appbar: FC<DataProps> = ({ isDarkTheme, location, className, children, onClick, ...props }) => {
    
    const router = useRouter();
    const [drawer, setDrawer] = React.useState(false);
    const [isToastOpen, setToastOpen] = React.useState(false);
    
    return (
        <Div className='relative w-full'>
            <FlexRow className={`${(isDarkTheme ?? true) ? 'bg-dark-100' : 'bg-white'} fixed z-50 h-12 items-center justify-between w-full px-2 border-b border-grey-400`}>
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0, // Reset the y position to avoid jumping
                    }}
                    transition={{
                        delay: location !== RouteNames.home ? 0 : 0.2,
                        duration: 0.5,
                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                    }}
                    initial={{
                        opacity: 0,
                        y: -50, // Start the element off the top of the screen
                    }}
                >
                    <ButtonClassA
                        className={`${(isDarkTheme ?? true) ? 'text-white hover:bg-secondary-200' : 'bg-white text-dark-100 hover:bg-dark-100 hover:text-white'} phone:shadow-none phone:px-0 flex flex-row items-center justify-center h-12 border-b border-grey-400`}
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                            router.push('/home')
                        }}>
                        <Spacer className='w-2 h-2 medium:w-8 medium:h-8' />
                        <Spacer className='w-9 h-9 rounded-full bg-blue-100' />
                        <Spacer className='w-4 h-4' />
                        <Div>
                            <Text className='font-bold text-xs laptopSm:text-base text-left'>
                                Title
                            </Text>
                            <Text className='font-light text-xs text-left'>
                                Subtitle
                            </Text>
                        </Div>
                        <Spacer className='w-2 h-2 medium:w-8 medium:h-8' />
                    </ButtonClassA>
                </motion.div>

                <ButtonClassA
                    className={`${(isDarkTheme ?? true) ? 'text-white hover:bg-secondary-200' : 'bg-white text-dark-100 hover:bg-dark-100 hover:text-white'} phone:shadow-none phone:px-4 medium:px-8 flex flex-row items-center justify-center h-12 border-b border-grey-400`}
                    onClick={() => setDrawer(true)}
                    /* onClick={() => setToastOpen(true)} */
                >
                    <FiMenu />
                </ButtonClassA>
                
                {/* <ToastMenu
                    title='MAIN MENU'
                    onClose={() => setToastOpen(false)}
                    isOpen={isToastOpen}
                /> */}
                <ToastDrawerRight isOpen={drawer} onClose={() => setDrawer(false)} />

                <FlexRow className='items-center phone:hidden tabletWide:hidden'>
                    {MenuList.map((value: any) => (
                        <div className="flex flex-row items-center phone:hidden tabletWide:flex p-1" key={value.name}>
                            {value.links.map((link: any) => (
                            <motion.div
                                animate={{
                                    opacity: 1,
                                    y: 0, // Reset the y position to avoid jumping
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                    ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                }}
                                initial={{
                                    opacity: 0,
                                    y: -50, // Start the element off the top of the screen
                                }}
                                key={value.name}
                            >
                                <Link
                                    className={`${(isDarkTheme ?? true) ? 'text-white hover:bg-secondary-200' : 'bg-white text-dark-100 hover:bg-dark-100 hover:text-white'} duration-700 shadow-lg py-1 px-4 font-bold phone:shadow-none phone:px-0 flex flex-row items-center justify-center h-12 border-b border-grey-400 w-24 text-sm laptopSm:w-32 laptopSm:text-base`}
                                    href={link.url}
                                    key={link.name}
                                >
                                    <MdHome className="text-xl mr-2 hidden" />
                                    {link.name}
                                </Link>
                            </motion.div>
                            ))}
                        </div>
                    ))}
                </FlexRow>
            </FlexRow>
        </Div>
    );
}