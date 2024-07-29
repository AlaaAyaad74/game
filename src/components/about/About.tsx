import { useEffect } from "react";
import AboutStyle from "./AboutStyle";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
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
    <AboutStyle>
      <div className="right_cont" data-aos="fade-left">
        <p className="title">
          نـبـذه عـن <span>الـمـوقـع</span>
        </p>
        <p className="descruption">
          لعبة جماعية ممتعة، تحتوي على ٦ فئات مختلفة و ٣٦ سؤال يختبر معلوماتكم و
          عشان نضيف الحماس لليمعة ضفنا ٣ وسائل مساعدة لكل فريق، اختاروهم بعناية
        </p>
        <div>
          <p></p>
        </div>
      </div>
      <div className="left_cont" data-aos="fade-right">
        <img src="/assets/tv.png" alt="tv" />
      </div>
    </AboutStyle>
  );
}

export default About;
