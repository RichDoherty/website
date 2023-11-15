import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <div id="" className="flex flex-col">
                    <div className="flex flex-col mt-20 lg:flex-row">
                        <div className="w-full p-10 pb-0 sm:pb-10 xl:my-auto lg:w-1/2">
                            <h1 className="py-5 text-4xl text-transparent sm:text-5xl md:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-br from-primary to-secondary">
                                Hi, I&#39;m Richard,
                                <br />
                                Full-Stack Developer.
                            </h1>
                        </div>
                        <div className="w-full my-auto font-normal sm:p-10 lg:w-1/2">
                            <div id="featured" className="p-10">
                                <h2 className="block mb-2 text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-primary to-secondary">
                                    Featured Posts:
                                </h2>
                                <p className="mb-4">
                                    Here you can check out some of the things
                                    I&#39;ve been working on or just some things
                                    I&#39;ve been interested in.
                                </p>
                                <div className="grid grid-cols-1 gap-5 pt-5 border-t-2 md:grid-cols-2 border-neutral-900/5 dark:border-neutral-300/5">
                                    <div className="p-4 transition-all duration-300 ease-out border rounded-lg border-neutral-900/5 dark:border-neutral-300/5 hover:shadow-md hover:shadow-neutral-600/20">
                                        <Link href="/posts/sorting-algorithms">
                                            <p className="text-sm">
                                                Mar 3, 2023
                                            </p>
                                            <h3 className="pt-2 my-1 text-2xl text-transparent bg-clip-text bg-gradient-to-bl from-primary to-secondary">
                                                Sorting Algorithm Visualizer
                                            </h3>
                                            <p>
                                                A site I created to show how
                                                sorting algorithms work.
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="p-4 transition-all duration-300 ease-out border rounded-lg border-neutral-900/5 dark:border-neutral-300/5 hover:shadow-md hover:shadow-neutral-600/20">
                                        <Link href="/posts/poke-api">
                                            <p className="text-sm">
                                                Jan 20, 2023
                                            </p>
                                            <h3 className="pt-2 my-1 text-2xl text-transparent bg-clip-text bg-gradient-to-bl from-primary to-secondary">
                                                Making Calls to an API (With
                                                Pokémon)
                                            </h3>
                                            <p>
                                                A project I worked on to learn
                                                more about back-end development.
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="p-4 transition-all duration-300 ease-out border rounded-lg border-neutral-900/5 dark:border-neutral-300/5 hover:shadow-md hover:shadow-neutral-600/20">
                                        <Link href="/posts/japanese-flashcards">
                                            <p className="text-sm">
                                                Nov 7, 2022
                                            </p>
                                            <h3 className="pt-2 my-1 text-2xl text-transparent bg-clip-text bg-gradient-to-bl from-primary to-secondary">
                                                Japanese Flashcard App
                                            </h3>
                                            <p>
                                                An overview of a web-app I made
                                                a few years ago that is meant to
                                                help people practice Hiragana &
                                                Katakana.
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="p-4 transition-all duration-300 ease-out border rounded-lg border-neutral-900/5 dark:border-neutral-300/5 hover:shadow-md hover:shadow-neutral-600/20">
                                        <Link href="/posts/how-i-built-my-portfolio">
                                            <p className="text-sm">
                                                Nov 3, 2022
                                            </p>
                                            <h3 className="pt-2 my-1 text-2xl text-transparent bg-clip-text bg-gradient-to-bl from-primary to-secondary">
                                                How I Built My Portfolio
                                            </h3>
                                            <p>
                                                The tech stack I used and some
                                                resources that helped me build
                                                this site.
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
