import { useEffect } from "react";
import styles from "./blogCard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AOS from "aos";
import "aos/dist/aos.css";
function BlogCard({ image, title, description,index }) {
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
    <div className={styles.blog_card_cont} data-aos='zoom-out' data-aos-delay={350*`${index}`}>
      <LazyLoadImage src={image} alt="product" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default BlogCard;
