import React, { ReactNode } from "react";
import Link from 'next/link'

interface PropLink {
  href?: string;
  children?: ReactNode
}

interface Prop {
  href: string;
  slug?: string;
  publishedOn?: string;
  children: string;
}

export const LinkDefault = ({href, children }: PropLink) => (
  <Link href={href ?? '#'}>{children}</Link>
);

export const LinkHeader = ({ href, slug, publishedOn, children }: Prop) => (
  <>
    <Link
      href={href}
      className="group mt-10 flex gap-1 items-center cursor-pointer"
    >
      <span className="text-gray-700 group-hover:text-gray-400 text-lg no-underline">#</span>
      <span className="text-xl font-semibold underline">{children}</span>
    </Link>
    
    {slug && <p className="text-base p-summary text-neutral-400">{slug}</p>}
    
    {publishedOn && <div className="flex gap-2 items-center mt-2">
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {publishedOn}
    </div>}
    
  </>
);

export const LinkGrayItalic = ({ href, children }: Prop) => (
  <a href={href} className="inline-block bg-gray-300 px-2 rounded-md italic">
    {children}
  </a>
);
