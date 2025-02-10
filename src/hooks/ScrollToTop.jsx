import { useEffect } from "react";
import { useLocation } from "wouter";

const ScrollToTop = () => {
    const [pathname] = useLocation();

    useEffect(() => {
        if (!pathname.startsWith("/works/")) {
            if ("scrollTo" in window) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                window.scroll(0, 0);
            }
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
