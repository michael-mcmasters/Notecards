import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Every time user goes to a new page,
// this component makes sure the window is scrolled to the top of the page.
// Source: https://reactrouter.com/web/guides/scroll-restoration
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}