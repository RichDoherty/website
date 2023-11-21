"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import ColorChangePanel from "./ColorChangePanel";

export type Color = {
    name: string;
    class: string;
    code: string;
};

const Header = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [colorMenuOpen, setColorMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (typeof window !== "undefined") {
    }

    const lightColors: Color[] = [
        { name: "red", class: "bg-red-500", code: "239 68 68" },
        { name: "rose", class: "bg-rose-500", code: "244 63 94" },
        { name: "orange", class: "bg-orange-500", code: "249 115 22" },
        { name: "yellow", class: "bg-yellow-500", code: "234 179 8" },
        { name: "emerald", class: "bg-emerald-500", code: "16 185 129" },
        { name: "green", class: "bg-green-500", code: "34 197 94" },
        { name: "blue", class: "bg-blue-500", code: "59 130 246" },
        { name: "violet", class: "bg-violet-500", code: "139 92 246" },
        { name: "pink", class: "bg-pink-300", code: "249 168 212" },
    ];

    const mediumColors: Color[] = [
        { name: "red", class: "bg-red-600", code: "220 38 38" },
        { name: "rose", class: "bg-rose-600", code: "225 29 72" },
        { name: "orange", class: "bg-orange-600", code: "234 88 12" },
        { name: "yellow", class: "bg-yellow-600", code: "202 138 4" },
        { name: "emerald", class: "bg-emerald-600", code: "5 150 105" },
        { name: "green", class: "bg-green-600", code: "22 163 74" },
        { name: "blue", class: "bg-blue-600", code: "37 99 235" },
        { name: "violet", class: "bg-violet-600", code: "124 58 237" },
        { name: "pink", class: "bg-pink-400", code: "244 114 182" },
    ];

    const darkColors: Color[] = [
        { name: "red", class: "bg-red-700", code: "185 28 28" },
        { name: "rose", class: "bg-rose-700", code: "190 18 60" },
        { name: "orange", class: "bg-orange-700", code: "194 65 12" },
        { name: "yellow", class: "bg-yellow-700", code: "161 98 7" },
        { name: "emerald", class: "bg-emerald-700", code: "4 120 87" },
        { name: "green", class: "bg-green-700", code: "21 128 61" },
        { name: "blue", class: "bg-blue-700", code: "29 78 216" },
        { name: "violet", class: "bg-violet-700", code: "109 40 217" },
        { name: "pink", class: "bg-pink-500", code: "236 72 153" },
    ];

    const lightBgColors: Color[] = [
        { name: "white", class: "bg-[#fff]", code: "255 255 255" },
        { name: "lightGray", class: "bg-neutral-200", code: "229 229 229" },
        { name: "orange", class: "bg-orange-100", code: "255 237 213" },
    ];

    const darkBgColors: Color[] = [
        { name: "black", class: "bg-[#000]", code: "0 0 0" },
        { name: "darkGray", class: "bg-neutral-900", code: "23 23 23" },
        { name: "rose", class: "bg-rose-950", code: "76 5 25" },
        { name: "blue", class: "bg-blue-950", code: "23 37 84" },
        { name: "indigo", class: "bg-indigo-950", code: "30 27 75" },
    ];

    const changePrimaryColor = (color: Color) => {
        document.documentElement.style.setProperty(
            "--color-primary",
            color.code
        );
        localStorage.setItem("primary", color.name);
    };

    const changeSecondaryColor = (color: Color) => {
        document.documentElement.style.setProperty(
            "--color-secondary",
            color.code
        );
        localStorage.setItem("secondary", color.name);
    };

    const changeBackgroundColor = (color: Color) => {
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
            const currentColor = localStorage.getItem("darkBg");
            document
                .getElementById(`dark-bg-${currentColor}`)
                ?.classList.remove("border", "border-neutral-500");
            document
                .getElementById(`dark-bg-${color.name}`)
                ?.classList.add("border", "border-neutral-500");
            document.documentElement.style.setProperty(
                "--color-darkBg",
                color.code
            );
            localStorage.setItem("darkBg", color.name);
        } else {
            document.documentElement.style.setProperty(
                "--color-lightBg",
                color.code
            );
            localStorage.setItem("lightBg", color.name);
        }
    };

    const renderThemeChanger = () => {
        if (!mounted) {
            return null;
        }

        const currentTheme = theme === "system" ? systemTheme : theme;

        const primary = localStorage.getItem("primary");
        const secondary = localStorage.getItem("secondary");
        const darkBg = localStorage.getItem("darkBg");
        const lightBg = localStorage.getItem("lightBg");

        if (currentTheme === "dark") {
            changePrimaryColor(
                lightColors.find((color) => color.name === primary) || {
                    name: "emerald",
                    class: "bg-emerald-500",
                    code: "16 185 129",
                }
            );
            changeSecondaryColor(
                mediumColors.find((color) => color.name === secondary) || {
                    name: "blue",
                    class: "bg-blue-600",
                    code: "37 99 235",
                }
            );
            changeBackgroundColor(
                darkBgColors.find((color) => color.name === darkBg) || {
                    name: "darkGray",
                    class: "bg-neutral-900",
                    code: "23 23 23",
                }
            );
            return (
                <SunIcon
                    className="w-6 h-6 text-neutral-300"
                    role="button"
                    onClick={() => setTheme("light")}
                />
            );
        } else {
            changePrimaryColor(
                mediumColors.find((color) => color.name === primary) || {
                    name: "emerald",
                    class: "bg-emerald-600",
                    code: "5 150 105",
                }
            );
            changeSecondaryColor(
                darkColors.find((color) => color.name === secondary) || {
                    name: "blue",
                    class: "bg-blue-700",
                    code: "29 78 216",
                }
            );
            changeBackgroundColor(
                lightBgColors.find((color) => color.name === lightBg) || {
                    name: "lightGray",
                    class: "bg-neutral-200",
                    code: "229 229 229",
                }
            );
            return (
                <MoonIcon
                    className="w-6 h-6 text-neutral-900"
                    role="button"
                    onClick={() => setTheme("dark")}
                />
            );
        }
    };

    return (
        <header className="fixed w-full h-16 bg-lightBg drop-shadow-sm">
            <div className="flex items-center justify-between px-10 pt-5">
                <Link href="/">
                    <h1 className="inline-block text-xl font-medium text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
                        richdoherty.dev
                    </h1>
                </Link>
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <nav className="invisible w-0 px-3 sm:w-full sm:visible text-neutral-900 bg-clip-text bg-gradient-to-l from-primary to-secondary">
                            <Link
                                className="px-3 transition-all duration-300 ease-out dark:duration-300 dark:ease-out hover:text-transparent"
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="px-3 transition-all duration-300 ease-out dark:duration-300 dark:ease-out hover:text-transparent"
                                href="/posts"
                            >
                                Posts
                            </Link>
                            <Link
                                className="px-3 transition-all duration-300 ease-out dark:duration-300 dark:ease-out hover:text-transparent"
                                href="/about"
                            >
                                About Me
                            </Link>
                        </nav>
                    </div>
                    <ColorChangePanel
                        lightColors={lightColors}
                        mediumColors={mediumColors}
                        darkColors={darkColors}
                        lightBgColors={lightBgColors}
                        darkBgColors={darkBgColors}
                        changePrimaryColor={changePrimaryColor}
                        changeSecondaryColor={changeSecondaryColor}
                        changeBackgroundColor={changeBackgroundColor}
                    />
                    {renderThemeChanger()}
                </div>
            </div>
        </header>
    );
};

export default Header;
