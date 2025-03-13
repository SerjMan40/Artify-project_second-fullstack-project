import { useState, useEffect, useRef } from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import NavbarMain from "./NavbarMain";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false); 
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsVisible(true); 
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <Logo />
      {isMobile ? <Burger /> : <NavbarMain />}
    </nav>
  );
};

export default Navbar;
