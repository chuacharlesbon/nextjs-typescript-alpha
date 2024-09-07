import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router'

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
    const dataObject = data?.server ?? "Empty";

    return {
        props: {
            productId,
            dataObject
        },
    };
}

export default function ProductId({ productId, dataObject } : any) {
    
    // const router = useRouter();
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         console.log(dataObject);
    //     }, 1000)
    // }, [dataObject]);

    return (
        <>
            <Head>
                <title>The Product - {dataObject}</title>
                <link rel="icon" href="/vercel.svg" />
                <meta name="title" content={`The Product - ${dataObject}`} />
                <meta name="description" content={`The description ${dataObject}`} />
                <meta name="keywords" content="keywords" />
                <meta property="og:title" content={`The Product - ${dataObject}`} />
                <meta property="og:description" content={`PHP ${dataObject} - ${dataObject}`} />
                <meta property="og:image" content="https://portfolio-chua-c.vercel.app/assets/magic-qr.jpg" />
            </Head>
            <main className="">
                <p>You will be automatically redirected to the site or click here</p>
                <p>The productId is {productId}</p>
                <p>The API data result is {dataObject}</p>
            </main>
        </>
    )
}
