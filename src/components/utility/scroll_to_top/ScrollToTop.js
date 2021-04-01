import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Makes sure window is scrolled to top when user loads a new page.
// Source: https://reactrouter.com/web/guides/scroll-restoration
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // location.reload();
  }, [pathname]);

  return null;
}