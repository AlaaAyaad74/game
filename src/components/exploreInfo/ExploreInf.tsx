import React from "react";
import AboutStyle from "../about/AboutStyle";

function ExploreInf() {
  return (
    <AboutStyle>
      <div
        className="left_cont expo"
        data-aos="fade-up"
        style={{ backgroundColor: "#fff" }}
      >
        <img src="/assets/person.png" alt="tv" />
      </div>
      <div className="right_cont" data-aos="fade-down">
        <p className="title">
          <span>اختبر معلوماتك !</span>
        </p>
        <p className="descruption">
          هي لعبة ثقافية ممتعة مناسبة لجميع الاعمار فيها تختبر معلومات يمعتكم،
          اللعبة تشمل جميع انواع الاسئلة حسب الفئة المختارة.
        </p>

        <a href="/" className="btn_link">
          انـشـئ لـعـبـة
        </a>

        <div>
          <p></p>
        </div>
      </div>
    </AboutStyle>
  );
}

export default ExploreInf;
