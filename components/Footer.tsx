import Link from 'next/link'

const Footer = () => {
    return (
        <div id='contact' className='inline-block p-10 m-auto mt-5 text-neutral-900'>
            <div className='flex flex-row justify-start'>
                <a className='pr-3 underline hover:text-neutral-400' href='https://github.com/RichDoherty' target='_blank' rel='noreferrer noopener'>GitHub</a>
                <a className='px-3 underline hover:text-neutral-400' href='https://www.linkedin.com/in/richard-doherty-908604241/' target='_blank' rel='noreferrer noopener'>LinkedIn</a>
            </div>
            <p className='mt-1'>richdoherty7@gmail.com</p>
            <div>
                <p className='mt-5'>
                    This site was built with&nbsp;
                    <a className='underline hover:text-neutral-400' href='https://nextjs.org/' target='_blank' rel='noreferrer noopener'>Next.js</a>,&nbsp;
                    <a className='underline hover:text-neutral-400' href='https://mdxjs.com/' target='_blank' rel='noreferrer noopener'>MDX</a>,&nbsp;
                    <a className='underline hover:text-neutral-400' href='https://tailwindcss.com/' target='_blank' rel='noreferrer noopener'>Tailwind</a>,&nbsp;
                    and&nbsp;
                    <a className='underline hover:text-neutral-400' href='https://vercel.com/' target='_blank' rel='noreferrer noopener'>Vercel</a>.
                </p>
            </div>
        </div>
    )
}

export default Footer;
