import { useEffect } from "react";
import HeroStyle from "./HeroStyle";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // Optionally refresh AOS when the component updates
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <HeroStyle>
      <div className="content">
        <div data-aos="zoom-in-down">
          <h2>لــوجــو</h2>
          <p>
            <span>الـجـواب عـلـيـك ، و الـسـؤال عـلـيـنـا</span>
            <br /> ٦ فـئـات ، ٣٦ سـؤال ، و مـعـاهـم ٣ وسـائـل مـسـاعـدة
          </p>
          <div className="btn_cont flex">
            <a className="right" href="/">
              انشاء لعبة
            </a>
            <a className="left" href="/">
              تصفح الالعاب
            </a>
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}

export default Hero;
