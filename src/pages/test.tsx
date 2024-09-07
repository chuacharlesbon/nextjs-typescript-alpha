'use-client'
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Script from 'next/script';
import { Appbar, FooterType1 } from "../components";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient1 = new QueryClient();

export default function Test() {
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
            <TestComponent />
        </QueryClientProvider>
    )
}

function TestComponent() {
    // Access the client
    const queryClient = useQueryClient();

    // Queries
    const query = useQuery({
        queryKey: ['test1'], queryFn: () => {
            return fetch("https://cmt-server-public-api.vercel.app/api/ping").then(response => response.json())
        }
    });
    // Queries
    const query2 = useQuery({
        queryKey: ['test2'], queryFn: () => {
            return fetch("https://cmt-server-public-api.vercel.app/api/ping").then(response => response.json())
        }
    });

    console.log(query2);

    // Mutations
    // const mutation = useMutation({
    //     mutationFn: (params) => console.log("This is the test console", params),
    //     onSuccess: () => {
    //     // Invalidate and refetch
    //     queryClient.invalidateQueries({ queryKey: ['todos'] })
    //     },
    // });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Appbar location='/test' onClick={() => { }} />
            <p>You will be automatically redirected to the site or click <a href="https://google.com">here</a></p>
            <p>{query?.data?.server ?? "Test"}</p>
            {
                query2.data
                    ? <p>{query2?.data?.server ?? "Test"}</p>
                    : <></>
            }
            <FooterType1 />
        </main>
    )
}