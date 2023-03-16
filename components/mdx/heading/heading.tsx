import type Props from "../interface-props";

export const HeadingOne = ({ children }: Props) => (
  <h1 className="text-4xl font-semibold font-arvo text-lightblue700 leading-relaxed mt-10 mb-5">
    {children}
  </h1>
)

export const HeadingTwo = ({ children }: Props) => (
  <h2 className="text-3xl leading-relaxed mt-10 mb-5">
    {children}
  </h2>
)

export const HeadingThree = ({ children }: Props) => (
  <h3 className="text-2xl font-semibold leading-relaxed mt-10 mb-5 text-center">
    <span className="mx-2"> • </span>{children}<span className="mx-2"> • </span>
  </h3>
)

export const HeadingFour = ({ children }: Props) => (
  <a className="group mt-10 mb-5 flex gap-1 items-center cursor-pointer">
    <span className="text-gray-700 group-hover:text-gray-400 text-lg no-underline">#</span>
    <h4 className="text-xl font-semibold underline">
      {children}
    </h4>
  </a>
)

export const HeadingFive = ({ children }: Props) => (
  <h5 className="text-base leading-relaxed">
    {children}
  </h5>
)

export const HeadingSix = ({ children }: Props) => (
  <h6 className="text-sm leading-relaxed">
    {children}
  </h6>
)