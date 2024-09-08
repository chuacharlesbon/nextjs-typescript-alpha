import 'tailwindcss/tailwind.css';
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import UserContext, { AppWrapper } from '@/context';
import { Appbar, FooterType2 } from '@/components';
import { MyCarousel } from '@/components/features/carousel';

// Create a client
const queryClient1 = new QueryClient();

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}

export async function getStaticProps({ params } : any) {
    // Fetch data for the page
    let data = await fetch(`https://cmt-server-public-api.vercel.app/api/ping?test=${params.productId}`).then(response => response.json());

    const productId = params.productId;
    const dataObject = data?.server?.toString() ?? "Empty";
    const pageTitle = `The Product - ${dataObject}`;


    return {
        props: {
            productId,
            dataObject,
            pageTitle
        },
    };
}

export default function ProductId({ productId, dataObject, pageTitle } : any) {
    
    // const router = useRouter();
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         console.log(dataObject);
    //     }, 1000)
    // }, [dataObject]);

    return (
        <QueryClientProvider client={queryClient1}>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/vercel.svg" />
                <meta name="title" content={`The Product - ${dataObject}`} />
                <meta name="description" content={`The description ${dataObject}`} />
                <meta name="keywords" content="keywords" />
                <meta property="og:title" content={`The Product - ${dataObject}`} />
                <meta property="og:description" content={`PHP ${dataObject} - ${dataObject}`} />
                <meta property="og:image" content="https://portfolio-chua-c.vercel.app/assets/magic-qr.jpg" />
            </Head>
            <AppWrapper>
                <main className="flex min-h-screen flex-col items-center justify-between">
                    <Appbar location='/test' onClick={() => {}} />
                    <MyCarousel />
                    <ProductBody productId={productId} dataObject={dataObject} />
                    <FooterType2 isDarkTheme={false}/>
                </main>
            </AppWrapper>
        </QueryClientProvider>
    )
}

function ProductBody({ productId, dataObject } : any) {

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
    console.log(query2?.data?.server);

    const {user, setUser} = React.useContext(UserContext);

    React.useEffect(() => {
        console.log("trigger");
        setUser({test: "User data"});
    }, [])

    return (
        <div className='py-12'>
            <p className="text-center py-4 w-full">
                Product Page, Product Id is {productId}
            </p>
            <p className="text-center py-4 w-full">
                Product Page, Product Data is {dataObject}
            </p>
            <p className="text-center py-4 w-full">
                Product Page, User Context Data: {user.test ?? ""}
            </p>
            <p>React query data: {query?.data?.server ?? "Test"}</p>
            {
                query2.data
                    ? <p>React query data: {query2?.data?.server ?? "Test"}</p>
                    : <></>
            }
        </div>
    );
}
