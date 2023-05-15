import { useState, useEffect } from "react";

const ProgressBar = () => {
    const [width, setWidth] = useState(0);
    const scrollListener = () => {
        const doc = document.documentElement;
        let top = doc.scrollTop || document.body.scrollTop;
        let height = doc.scrollHeight || document.body.scrollHeight;
        let percent = (top / (height - doc.clientHeight)) * 100;

        setWidth(percent);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    });

    return (
        <div
            style={{ width: width + "%" }}
            className="fixed h-1 top-16 bg-gradient-to-r from-primary to-secondary"
        ></div>
    );
};

export default ProgressBar;
