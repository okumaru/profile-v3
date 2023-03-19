import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import * as MdxComponent from '@/components/mdx/mdx-components'
import { LinkHeader } from '@/components/mdx/mdx-components'
import ImageBlur from '@/components/mdx/image/image-blur'
import ImageBlurGray from '@/components/mdx/image/image-blur-gray'

const components = {
  // img: ,
  p: MdxComponent.Paragraph,
  h1: MdxComponent.HeadingOne,
  h2: MdxComponent.HeadingTwo,
  h3: MdxComponent.HeadingThree,
  h4: MdxComponent.HeadingFour,
  h5: MdxComponent.HeadingFive,
  h6: MdxComponent.HeadingSix,
  // blockquote: '',
  ul: MdxComponent.UnorderedList,
  ol: MdxComponent.OrderedList,
  // li: '',
  // code: '',
  // inlineCode: '',
  // pre: '',
  // em: Emphasis,
  // strong: Strong,
  // del: '',
  // hr: ThematicBreak,
  a: MdxComponent.LinkDefault,
  LinkHeader,
  ImageBlur,
  ImageBlurGray,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
