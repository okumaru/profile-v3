import React, { ReactNode } from "react";
import Header from "../headers/header";
import Nav from "../headers/nav";
import Footer from "../footers/footer";

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function LpLayout({ children }: Props) {
  return <div className="max-w-3xl m-4 md:mx-auto lg:my-8">
    <div className="flex flex-col justify-end sm:flex-row gap-y-3 py-5 mb-4 lg:mb-8">
      <Nav />
    </div>
    <div className="mb-10">
      {children}
    </div>
    <Footer />
  </div>;
}
