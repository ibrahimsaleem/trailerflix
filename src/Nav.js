import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavbarBlack(true);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`${navbarBlack && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo" alt='logo'
          src="https://firebasestorage.googleapis.com/v0/b/trailerflix-b65b0.appspot.com/o/db499c21033be929752570f506698bd1.png?alt=media&token=c0882fd2-1685-4184-a85f-57ba5f76886a"
        />
        
      </div>
    </nav>
  );
}

export default Nav;
