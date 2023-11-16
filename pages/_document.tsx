import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en-us" className="bg-lightBg dark:bg-darkBg font-main">
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <body className="min-h-screen">
                <div className="overlay"></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
