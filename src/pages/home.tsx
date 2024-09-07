'use-client'
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Script from 'next/script';
import { Appbar, FooterType2 } from "../components";
import { MyCarousel } from '@/components/features/carousel';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient1 = new QueryClient();

export default function Home() {

    return (
        <QueryClientProvider client={queryClient1}>
            <Head>
                <title>Title | Test</title>
                <link rel="icon" href="/vercel.svg" />
                <meta name="title" content="Title | Test" />
                <meta name="description" content="This is the description" />
                <meta name="keywords" content="keywords" />
                <meta property="og:title" content="Title | Test" />
                <meta property="og:description" content="This is the description" />
                <meta property="og:image" content="https://www.datocms-assets.com/75941/1675690825-technology-vercel-cms-view-2.png?auto=format&fit=max&w=1200" />
            </Head>
            <Script
                id="gtag-about-1"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=G-`}
            />
            <Script id="gtag-about-2" strategy="lazyOnload">
                {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-', {
                            page_path: window.location.pathname,
                            });
                `}
            </Script>
            <main className="flex min-h-screen flex-col items-center justify-between">
                <Appbar location='/test' onClick={() => {}} />
                <MyCarousel />
                <p className="text-center py-64 w-full">
                    Home Page
                </p>
                <FooterType2 isDarkTheme={false}/>
            </main>
        </QueryClientProvider>
    )
}
