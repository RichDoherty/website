import Header from "../components/Header";

export default function About() {
    return (
        <div>
            <Header />
            <main className="px-10 pt-20">
                <div className="p-10 m-auto xl:w-3/5">
                    <h2 className="block mb-4 text-3xl text-transparent bg-clip-text bg-gradient-to-bl from-primary to-secondary">
                        About Me:
                    </h2>
                    <p className="text-base text-neutral-900">
                        Nice to meet you! I&#39;m a software engineer who is
                        passionate about learning all things coding related and
                        building things along the way.
                        <br />
                        <br />
                        The first time I was introduced to programming was in a
                        middle school HTML class. I made a fan-site for my
                        favorite football team at the time, the Denver Broncos.
                        The website was not pretty, but I had fun creating it
                        and it made me aware that programming was a thing I
                        could learn.
                        <br />
                        <br />
                        Years after my first foray into HTML, upon entering
                        college, I decided to major in computer science. I took
                        the usual programming courses, data structure &
                        algorithms, object-oriented programming, etc. I even
                        worked on some side projects.
                        <br />
                        <br />
                        At the time, I had started to learn Japanese, so I
                        developed a flashcard app to help me remember the
                        Japanese alphabets. It helped me more than I expected,
                        honestly. I showed the app to some others, and it
                        actually helped them too! That was when I truly
                        discovered my love for programming. I could make things
                        that helped people achieve their goals!
                        <br />
                        <br />
                        Since then, I graduated from Molloy College with honors
                        and I&#39;m looking to start working full-time where I
                        can help a company achieve their goals.
                    </p>
                    <h2 className="inline-block mt-10 mb-4 text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
                        My Skills:
                    </h2>
                    <div className="flex w-full md:text-lg sm:block">
                        <ul className="mx-auto ml-0 list-disc list-inside sm:mb-2 sm:flex text-neutral-900 marker:text-secondary">
                            <li className="sm:w-1/4">JavaScript</li>
                            <li className="sm:w-1/4">TypeScript</li>
                            <li className="sm:w-1/4">React</li>
                            <li className="sm:w-1/4">Node.js</li>
                        </ul>
                        <ul className="list-disc list-inside sm:flex text-neutral-900 marker:text-secondary">
                            <li className="sm:w-1/4">HTML & CSS</li>
                            <li className="sm:w-1/4">SQL</li>
                            <li className="sm:w-1/4">Git</li>
                            <li className="sm:w-1/4">Linux</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}
