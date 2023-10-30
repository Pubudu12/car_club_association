import Head from "next/head";
import React from "react";


const MetaTags = ({ metaTitle, metaDescription, image, metaKeyword} : {metaTitle : string; metaDescription : string; image : string;metaKeyword:string}) => {
      return (
        <Head>

            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={image} />
            <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />

            <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/assets/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>
        </Head>

      )
}

export default MetaTags