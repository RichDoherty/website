import "/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../components/Providers";

export const metadata: Metadata = {
    title: "richdoherty.dev",
    description: "Richard Doherty's portfolio & blog.",
};

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.className}>
            <body className="min-h-screen bg-lightBg dark:bg-darkBg">
                <div className="overlay"></div>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
