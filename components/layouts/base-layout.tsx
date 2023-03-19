import React, { ReactNode } from "react";
import Head from 'next/head'
import Header from "../headers/header";
import Footer from "../footers/footer";

interface Props {
  meta: {
    title: string,
  },
  children?: ReactNode
  // any props that come into the component
}

export default function BaseLayout({ meta, children }: Props) {
  return <div className="max-w-3xl m-4 md:mx-auto lg:my-8">
    <Head>
      <title>{process.env.PAGE_NAME ?? 'Okumaru'} - {meta.title}</title>
      <meta property="og:title" content={meta.title} key="title" />
    </Head>
    <Header />
    <div>
      {children}
    </div>
    <Footer />
  </div>;
}
