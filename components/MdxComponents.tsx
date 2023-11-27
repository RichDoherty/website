import { AnchorHTMLAttributes, ClassAttributes, HTMLAttributes } from "react";
import Image from "next/image";

export const components = {
    h1: (
        props: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLHeadingElement> &
            HTMLAttributes<HTMLHeadingElement>
    ) => (
        <h1
            className="w-4/5 pt-24 pb-10 m-auto text-5xl text-transparent lg:w-1/2 md:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-bl from-primary to-secondary"
            {...props}
        />
    ),
    h2: (
        props: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLHeadingElement> &
            HTMLAttributes<HTMLHeadingElement>
    ) => (
        <h2
            className="pt-16 pb-3 m-auto text-3xl transition-colors duration-500 ease-out border-t-2 dark:duration-500 dark:ease-out dark:transition-colors dark:text-neutral-300 text-neutral-900 border-neutral-900/5 dark:border-neutral-300/5"
            {...props}
        />
    ),
    h3: (
        props: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLHeadingElement> &
            HTMLAttributes<HTMLHeadingElement>
    ) => (
        <h3
            className="pt-16 pb-3 m-auto text-2xl transition-colors duration-500 ease-out border-t-2 dark:duration-500 dark:ease-out dark:transition-colors dark:text-neutral-300 text-neutral-900 border-neutral-900/5 dark:border-neutral-300/5"
            {...props}
        />
    ),
    p: (
        props: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLParagraphElement> &
            HTMLAttributes<HTMLParagraphElement>
    ) => <p className="py-3 m-auto text-base" {...props} />,
    a: (
        props: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLAnchorElement> &
            AnchorHTMLAttributes<HTMLAnchorElement>
    ) => <a className="underline hover:text-neutral-400" {...props} />,
    ul: (
        props: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLUListElement> &
            HTMLAttributes<HTMLUListElement>
    ) => (
        <ul
            className="mx-auto space-y-3 text-base list-disc list-inside sm:mb-2 text-neutral-900 marker:text-secondary"
            {...props}
        />
    ),
    Img: (props: { src: string; alt: string }) => (
        <Image className="h-auto mx-auto rounded-lg" {...props} />
    ),
};
