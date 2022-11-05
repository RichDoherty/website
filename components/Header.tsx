import Link from 'next/link'
import {useTheme} from 'next-themes'
import {useState, useEffect} from "react";
import {SunIcon, MoonIcon} from '@heroicons/react/20/solid'

const Header = () => {
    const {systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[])

    const renderThemeChanger = () => {
        if (!mounted) { return null; }
        
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="w-6 h-6 text-neutral-300" role="button" onClick={() => setTheme('light')} />
            )
        } else {
            return (
                <MoonIcon className="w-6 h-6 text-neutral-900" role="button" onClick={() => setTheme('dark')} />
            )
        }
    }
    
    return (
        <header className='fixed w-full h-16 bg-neutral-200 drop-shadow-sm'>
            <div className='flex items-center justify-between px-10 pt-5'>
                <Link href='/'>
                    <h1 className='inline-block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-emerald-500 to-blue-600'>richdoherty.dev</h1>
                </Link>
                <div className='flex items-center justify-between'>
                    <nav className='invisible w-0 px-3 sm:w-full sm:visible text-neutral-900 bg-clip-text bg-gradient-to-l from-emerald-500 to-blue-600'>
                        <Link className='px-3 transition-all duration-300 ease-out dark:duration-300 dark:ease-out hover:text-transparent' href="/">Home</Link>
                        <Link className='px-3 transition-all duration-300 ease-out dark:duration-300 dark:ease-out hover:text-transparent' href='/#posts'>Posts</Link>
                        <Link className='px-3 transition-all duration-300 ease-out dark:duration-300 dark:ease-out hover:text-transparent' href='/#contact'>Contact</Link>
                    </nav>
                    {renderThemeChanger()}
                </div>
            </div>
        </header>
    );
};

export default Header;