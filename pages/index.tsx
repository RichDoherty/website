import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div id='' className='flex flex-col lg:min-h-screen'>
          <div className='flex flex-col mt-20 lg:flex-row'>
            <div className='w-full p-10 xl:my-auto lg:w-1/2'>
              <h1 className='py-5 text-5xl text-transparent md:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-br from-emerald-500 to-blue-600'>
                Hi, I&#39;m Richard,
                <br />
                Full-stack Developer.
              </h1>
            </div>
            <div className='w-full p-10 my-auto font-normal lg:w-1/2'>
              <h2 className='block mb-4 text-3xl text-transparent bg-clip-text bg-gradient-to-bl from-emerald-500 to-blue-600'>
                About Me:
              </h2>
              <p className='text-base text-neutral-900'>
                Nice to meet you! I&#39;m a software engineer who is passionate about learning all things coding related and building things along the way.
                <br />
                <br />
                The first time I was introduced to programming was in a middle school HTML class. I made a fan-site for my favorite football team at the time, the Denver Broncos. The website was not pretty, but I had fun creating it and it made me aware that programming was a thing I could learn.
                <br />
                <br />
                Years after my first foray into HTML, upon entering college, I decided to major in computer science. I took the usual programming courses, data structure & algorithms, object-oriented programming, etc. I even worked on some side projects.
                <br />
                <br />
                At the time, I had started to learn Japanese, so I developed a flashcard app to help me remember the Japanese alphabets. It helped me more than I expected, honestly. I showed the app to some others, and it actually helped them too! That was when I truly discovered my love for programming. I could make things that helped people achieve their goals!
                <br />
                <br />
                Since then, I graduated from Molloy College with honors and I&#39;m looking to start working full-time where I can help a company achieve their goals.
              </p>
            </div>
          </div>
          <div className='w-full p-10'>
            <h2 className='inline-block mb-4 text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-emerald-500 to-blue-600'>
              My Skills:
            </h2>
            <div className='flex w-full md:text-lg sm:block'>
              <ul className='mx-auto ml-0 list-disc list-inside sm:mb-2 sm:flex text-neutral-900 marker:text-blue-500'>
                <li className='sm:w-1/4'>JavaScript</li>
                <li className='sm:w-1/4'>TypeScript</li>
                <li className='sm:w-1/4'>Node.js</li>
                <li className='sm:w-1/4'>Python</li>
              </ul>
              <ul className='list-disc list-inside sm:flex text-neutral-900 marker:text-blue-500'>
                <li className='sm:w-1/4'>React</li>
                <li className='sm:w-1/4'>Angular</li>
                <li className='sm:w-1/4'>HTML & CSS</li>
                <li className='sm:w-1/4'>SQL & MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div id='posts' className='p-10'>
          <h2 className='block mb-2 text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-emerald-500 to-blue-600'>
            Posts:
          </h2>
          <p className='mb-4'>Here you can check out some of the things I&#39;ve been working on or just some things I&#39;ve been interested in.</p>
          <div className='grid grid-cols-1 gap-5 pt-10 border-t-2 md:grid-cols-2 border-neutral-900/5 dark:border-neutral-300/5'>
          <div className='transition-all duration-300 ease-out rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800'>
              <Link href="/posts/poke-api">
                  <p className='text-sm'>Jan 20, 2022</p>
                  <h3 className='my-1 text-2xl text-transparent bg-clip-text bg-gradient-to-bl from-emerald-500 to-blue-600'>Making Calls to an API (With Pokémon)</h3>
                  <p>A project I worked on to learn more about back-end development.</p>
              </Link>
            </div>
            <div className='transition-all duration-300 ease-out rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800'>
              <Link href="/posts/japanese-flashcards">
                  <p className='text-sm'>Nov 7, 2022</p>
                  <h3 className='my-1 text-2xl text-transparent bg-clip-text bg-gradient-to-bl from-emerald-500 to-blue-600'>Japanese Flashcard App</h3>
                  <p>An overview of a web-app I made a few years ago that is meant to help people practice Hiragana & Katakana.</p>
              </Link>
            </div>
            <div className='transition-all duration-300 ease-out rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800'>
              <Link href="/posts/how-i-built-my-portfolio">
                  <p className='text-sm'>Nov 3, 2022</p>
                  <h3 className='my-1 text-2xl text-transparent bg-clip-text bg-gradient-to-bl from-emerald-500 to-blue-600'>How I Built My Portfolio</h3>
                  <p>The tech stack I used and some resources that helped me build this site.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
