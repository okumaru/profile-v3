import React, { ReactNode } from "react";
import Header from "../headers/header";
import Footer from "../footers/footer";

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function BaseLayout({ children }: Props) {
  return <div className="max-w-3xl m-4 md:mx-auto lg:my-8">
    <Header />
    <div>
      {children}
    </div>
    <Footer />
  </div>;
}
