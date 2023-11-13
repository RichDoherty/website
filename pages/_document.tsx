import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en-us" className="bg-lightBg dark:bg-darkBg font-main">
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway&family=Rubik&family=Inter&family=Playfair+Display&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="min-h-screen">
                <div className="overlay"></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
