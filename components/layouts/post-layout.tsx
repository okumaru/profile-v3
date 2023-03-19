import React, { ReactNode } from "react";
import Header from "../headers/header";
import Footer from "../footers/footer";

interface Props {
  meta: {
    title: string,
    publishedOn: string,
    slug?: string,
  },
  children?: ReactNode
  // any props that come into the component
}

export default function PostLayout({meta, children }: Props) {
  return <div className="max-w-3xl m-4 md:mx-auto lg:my-8">
    <Header />
    <div>
      <div className="mb-8">
        <span className="inline-block bg-zinc-700 py-1 px-2 rounded">{meta.publishedOn}</span>
        <h1 className="text-2xl font-semibold underline underline-offset-2">{meta.title}</h1>
        { meta.slug && <p className="text-base p-summary text-neutral-400">{meta.slug}</p> }
      </div>
      <div>
        {children}
      </div>
    </div>
    <Footer />
  </div>;
}