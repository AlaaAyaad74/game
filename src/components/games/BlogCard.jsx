import { useEffect } from "react";
import styles from "./blogCard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AOS from "aos";
import "aos/dist/aos.css";
function BlogCard({ image, title, index }) {
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
    <div
      className={styles.blog_card_cont}
      data-aos="zoom-out"
      data-aos-delay={350 * `${index}`}
    >
      <div
        className={styles.cont_img}
        style={{
          backgroundImage: image,
        }}
      >
        <div className={styles.cont_text}>
          <p style={{ fontSize: "12rem", fontFamily: "cursive" }}>
            {index + 1}
          </p>
          <p>
            {index + 1 === 1
              ? "لـعـبـة"
              : index + 1 === 2
              ? "لعبتين"
              : "ألـعـاب"}
          </p>
        </div>
      </div>
      <h2>{title}</h2>
      <p className={`flex ${styles.last_row}`}>
        <p>3.5 دك</p> <a href="/">شـراء</a>
      </p>
    </div>
  );
}

export default BlogCard;
