import { useEffect, useState } from "react";
import HeaderStyle from "./HeaderStyle";
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderStyle className={`flex ${scrolled ? "scrolled" : ""}`}>
      <div
        className={`overlay ${showLinks ? "active" : ""}`}
        onClick={() => setShowLinks(false)}
      ></div>
      <div className="right_side flex">
        {/* <img src="/assets/logo.png" className="logo" alt="logo" /> */}
        <h1 style={{ color: "white" }}>لــوجــو</h1>
      </div>

      <div className={`cont_links flex ${showLinks ? "active" : ""}`}>
        <button
          style={{ marginInlineStart: "auto" }}
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <HiXMark />
        </button>
        <a href="/">قـصـتـنـا</a>
        <a href="/play">الـعـب</a>
        <a href="/contact">تـواصـل مـعـنـا</a>
      </div>
      <div className="left_side flex">
        <a href="/" className="btn_link">
          عدد الالعاب المتبقية
        </a>
        <a href="/">سـجـل</a>
      </div>
      <button
        onClick={() => {
          setShowLinks(!showLinks);
        }}
      >
        <FaBars />
      </button>
    </HeaderStyle>
  );
}

export default Header;
