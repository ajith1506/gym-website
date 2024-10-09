import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import "./Navbar.css"; // Import external CSS

const menuItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About Us" },
  { id: "plans", name: "Pricing Plans" },
  { id: "trainers", name: "Trainers" },
  { id: "contact", name: "Contact Us" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768 && menu) {
      setMenu(false); // Close mobile menu on larger screens
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [menu]);

  return (
    <div>
      <div className={`navbar ${isSticky ? "navbar-sticky" : ""}`}>
        <div className="navbar-logo">
          <Link to="/">
            <h1>Levels Gym</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="navbar-menu">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-link"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" onClick={handleChange}>
          <AiOutlineMenuUnfold size={28} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menu ? "show-menu" : ""}`}>
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            duration={500}
            className="mobile-link"
            onClick={() => setMenu(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
