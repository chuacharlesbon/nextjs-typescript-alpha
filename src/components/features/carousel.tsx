import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsCoin } from "react-icons/bs";
import { FaSearch, FaUser, FaHandPaper, FaLink } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { MdHome, MdCall, MdTravelExplore } from "react-icons/md";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Div, FlexColumn, FlexRow, Spacer } from "../core/Containers";
import { ButtonClassA } from '../core/Forms/Buttons';
import { Text } from "../core/TextElements";
import { RawInput } from '../core/Forms/RawInput';
import { Images } from "../../constants/assets";
import { useWindowSize } from '../../hooks/useWindowSize';

export const MyCarousel: FC<any> = () => {
    const responsive = {
        mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };
    const size = useWindowSize();
    return (
        <Div className='w-full'>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                removeArrowOnDeviceType={[]}
                containerClass='z-10'
            >
                <Div className='w-full h-500px' style={{
                    // backgroundImage: `url(${Images.githubLogo})`,
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'right',
                }}>
                    <FlexRow className='phone:w-full h-full bg-gradient-to-r from-green-100 to-blue-200 justify-end items-center'>
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Large Title
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left phone:mx-auto tablet:mr-auto tablet:ml-0'>
                                Insert subtitle or description here
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => { 
                                const element = document.getElementById('content-document-1');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    // backgroundImage: `url(${Images.githubLogo})`,
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'right',
                }}>
                    <FlexRow className='phone:w-full h-full bg-gradient-to-r from-green-100 to-blue-200 justify-end items-center'>
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Large Title
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left phone:mx-auto tablet:mr-auto tablet:ml-0'>
                                Insert subtitle or description here
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => { 
                                const element = document.getElementById('content-document-1');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    // backgroundImage: `url(${Images.githubLogo})`,
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'right',
                }}>
                    <FlexRow className='phone:w-full h-full bg-gradient-to-r from-green-100 to-blue-200 justify-end items-center'>
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Large Title
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left phone:mx-auto tablet:mr-auto tablet:ml-0'>
                                Insert subtitle or description here
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => { 
                                const element = document.getElementById('content-document-1');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                    </FlexRow>
                </Div>
            </Carousel>
        </Div>
    );
};