import "../styles/globals.css";
import { Metadata } from "next";
import Providers from "../components/Providers";

export const metadata: Metadata = {
    title: "richdoherty.dev",
    description: "Richard Doherty's portfolio & blog.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="bg-lightBg dark:bg-darkBg">
            <body className="min-h-screen">
                <div className="overlay"></div>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
