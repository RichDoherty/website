import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import { AnchorHTMLAttributes, ClassAttributes, HTMLAttributes } from 'react'
import Head from 'next/head'

const components = {
  h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h1 className='w-4/5 pt-24 pb-10 m-auto text-5xl text-transparent lg:w-1/2 md:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-bl from-emerald-500 to-blue-600' {...props} />,
  h2: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h2 className='w-4/5 py-3 m-auto mt-8 text-3xl transition-colors duration-500 ease-out border-t-2 dark:duration-500 dark:ease-out dark:transition-colors dark:text-neutral-300 lg:w-1/2 text-neutral-900 border-neutral-900/5 dark:border-neutral-300/5' {...props} />,
  h3: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h3 className='w-4/5 py-3 m-auto mt-8 text-2xl transition-colors duration-500 ease-out border-t-2 dark:duration-500 dark:ease-out dark:transition-colors dark:text-neutral-300 lg:w-1/2 text-neutral-900 border-neutral-900/5 dark:border-neutral-300/5' {...props} />,
  p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => <p className='w-4/5 py-3 m-auto text-base lg:w-1/2' {...props} />,
  a: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => <a className='underline hover:text-neutral-400' {...props} />,
  ul: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLUListElement>) => <ul className='w-4/5 mx-auto space-y-3 text-base list-disc list-inside lg:w-1/2 sm:mb-2 text-neutral-900 marker:text-blue-500' {...props} />,
  pre: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLPreElement> & HTMLAttributes<HTMLPreElement>) => <pre className='w-4/5 py-3 m-auto text-base lg:w-1/2 dark:text-neutral-300 text-neutral-900' {...props} />
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Head>
          <title>richdoherty.dev</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name="description" content="Richard Doherty's portfolio & blog."></meta>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </MDXProvider>
  )
}
