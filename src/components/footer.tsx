import React, { FC } from 'react';
import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer } from "@/components/core/Containers";
import { Text, Span } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";
import Link from 'next/link';
import { AllLinks, SocialLinks } from '@/constants/constants';
import { FaFacebook, FaInstagramSquare, FaTiktok, FaYoutube } from 'react-icons/fa';

interface DataProps {
    isDarkTheme?: boolean | null;
}

export const FooterType1: FC<DataProps> = ({ isDarkTheme }) => (
    <Div className={`w-full p-4 tablet:p-8 border-t border-grey-400 ${!(isDarkTheme ?? true) ? 'bg-white text-dark-100' : 'bg-dark-100 text-white'}`}>
        <Div className="w-full mx-auto laptop:w-11/12 desktop:w-10/12">
            <FlexRow className='phone:flex-col tablet:flex-row w-full items-center justify-between'>
                <FlexRow className='items-center'>
                    <Spacer className='w-12 h-12 rounded-full bg-blue-100' />
                    <Spacer className='w-8 h-8' />
                    <Div>
                        <Text className="">
                            Title
                        </Text>
                        <Text className="text-xl  font-bold">
                            Subtitle
                        </Text>
                    </Div>
                </FlexRow>
                <Spacer className="w-4 h-4 tablet:hidden" />
                <FlexRow className='items-center phone:flex-col phone:w-full tablet:w-auto tablet:flex-row'>
                    <FlexRow className='items-center justify-around phone:w-full tablet:w-auto py-1'>
                        <Link className="text-center phone:w-1/2 tablet:w-auto" href="https://vercel.com" target='_blank'>
                            <Spacer className='w-24 h-10 rounded-full bg-blue-100 mx-auto tablet:mx-1' />
                        </Link>
                        <Link className="text-center phone:w-1/2 tablet:w-auto" href="https://vercel.com" target='_blank'>
                            <Spacer className='w-24 h-10 rounded-full bg-blue-100 mx-auto tablet:mx-1' />
                        </Link>
                    </FlexRow>
                    <FlexRow className='items-center justify-around phone:w-full tablet:w-auto py-1'>
                        <Link className="text-center phone:w-1/2 tablet:w-auto" href="https://vercel.com" target='_blank'>
                            <Spacer className='w-24 h-10 rounded-full bg-blue-100 mx-auto tablet:mx-1' />
                        </Link>
                        <Link className="text-center phone:w-1/2 tablet:w-auto" href="https://vercel.com" target='_blank'>
                            <Spacer className='w-24 h-10 rounded-full bg-blue-100 mx-auto tablet:mx-1' />
                        </Link>
                    </FlexRow>
                </FlexRow>
            </FlexRow>
            <Spacer className="w-8 h-8" />
            <FlexRow className='phone:flex-col tablet:flex-row w-full items-start justify-start'>
                <FlexColumn className="phone:w-full tablet:w-2/5 phone:items-center tablet:items-start justify-start">
                    <FlexRow className='w-full'>
                        <FlexColumn className='w-1/2 phone:items-center tablet:items-start justify-start'>
                            <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="/home">
                                Link 1
                            </Link>
                            <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="/about">
                                Link 2
                            </Link>
                            <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="/works">
                                Link 3
                            </Link>
                            <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="/contact">
                                Link 4
                            </Link>
                        </FlexColumn>
                        <FlexColumn className='w-1/2 phone:items-center tablet:items-start justify-start'>
                            <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="/skills">
                                Link 5
                            </Link>
                            <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="/services">
                                Link 6
                            </Link>
                            <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="/connect">
                                Link 7
                            </Link>
                            <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="/explore">
                                Link 8
                            </Link>
                        </FlexColumn>
                    </FlexRow>
                    <Spacer className="w-8 h-8" />
                    <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="mailto:tekqore@gmail.com?cc=tekqore+1@gmail.com&subject=Client%20Inquiry" target="_top">
                        <Span className='mr-2'>
                            Email:
                        </Span>
                        youremail@gmail.com
                    </Link>
                    <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="https://vercel.com" target="_blank">
                        <Span className='mr-2'>
                            Gitlab:
                        </Span>
                        https://gitlab.com
                    </Link>
                    <Link className={`phone:text-center tablet:text-left ${(isDarkTheme ?? true) ? 'text-white' : 'text-dark-100'} my-1 hover:underline`} href="https://vercel.com" target="_blank">
                        <Span className='mr-2'>
                            LinkedIn:
                        </Span>
                        https://www.linkedin.com
                    </Link>
                </FlexColumn>
                <Div className='phone:w-full tablet:w-3/5'>
                    <Text className='phone:hidden tablet:block my-1'>
                        Text Description 1. Find in-depth information about Next.js features and API.
                    </Text>
                    <Spacer className="phone:hidden tablet:block w-2 h-2" />
                    <Text className='phone:hidden tablet:block my-1'>
                        Text Description 2. Learn about Next.js in an interactive course with&nbsp;quizzes!
                    </Text>
                    <Spacer className="phone:hidden tablet:block w-2 h-2" />
                    <Text className='phone:hidden tablet:block my-1 pl-8'>
                        &#8226; Text Description 3. Explore starter templates for Next.js.
                    </Text>
                    <Text className='phone:hidden tablet:block my-1 pl-8'>
                        &#8226; Text Description 4. Instantly deploy your Next.js site to a shareable URL with Vercel.
                    </Text>
                    <Text className='phone:hidden tablet:block my-1 pl-8'>
                        &#8226; Text Description 5. Sample short extended description
                    </Text>
                    <Spacer className="w-2 h-2" />
                    <Text className='phone:text-center tablet:text-left my-1'>
                        Label
                        <Span className='mx-2 font-bold'>|</Span>
                        Label
                        <Span className='mx-2 font-bold'>|</Span>
                        Label
                        <Span className='mx-2 font-bold'>|</Span>
                        Label
                        <Span className='mx-2 font-bold'>|</Span>
                        Label
                    </Text>
                </Div>
            </FlexRow>
            <Text className='font-bold text-center mt-12 mb-4'>
                Project Template 2024
            </Text>
        </Div>
    </Div>
);

export const FooterType2: FC<DataProps> = ({ isDarkTheme }) => {

    const getIcon = (tab: string) => {
        let icon: any = <FaTiktok />;
        switch (tab) {
            case "<FaFacebook />":
                icon = <FaFacebook />;
                break;
            case "<FaInstagramSquare />":
                icon = <FaInstagramSquare />;
                break;
            case "<FaYoutube />":
                icon = <FaYoutube />;
                break;
            default:
                break;
        }
        return icon;
    }

    return (
        <Div className={`w-full p-4 tablet:p-8 border-t border-grey-400 ${!(isDarkTheme ?? true) ? 'bg-white text-dark-100' : 'bg-dark-100 text-white'}`}>
            <Div className="w-full mx-auto laptop:w-11/12 desktop:w-10/12">
                <FlexRow className='w-full items-center justify-center'>
                    <Link className="text-center" href="/home" target='_blank'>
                        <Spacer className='w-24 h-10 rounded-full bg-green-100 mx-auto tablet:mx-1' />
                    </Link>
                </FlexRow>
                <Spacer className="w-8 h-8" />
                <FlexRow className='phone:flex-col tablet:flex-row w-full items-center justify-center'>
                    {AllLinks[0].links.map((value: any) => (
                        <Link
                            className="mx-4 p-2 font-semibold"
                            key={value.name}
                            href={value.url}
                        >
                            {value.name}
                        </Link>
                    ))}
                </FlexRow>
                <Spacer className="w-8 h-8" />
                <FlexRow className='w-full items-center justify-center'>
                    {SocialLinks[0].links.map((value: any) => (
                        <Link
                            className="bg-green-100 text-white text-lg mx-4 p-2 rounded-full"
                            key={value.name}
                            href={value.url}
                        >
                            {getIcon(value.icon)}
                        </Link>
                    ))}
                </FlexRow>
                <Text className='font-bold text-center mt-12 mb-4'>
                    Project Template 2024
                </Text>
            </Div>
        </Div>
    )
};
