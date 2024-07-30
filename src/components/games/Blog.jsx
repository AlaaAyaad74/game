import { useRef, useState } from "react";
import styles from "./blog.module.css";
import { gameData } from "./data";
import BlogCard from "./BlogCard";
// import { Link } from "react-router-dom";
function Blog() {
  const [distance, setDistance] = useState(0);
  const translateRef = useRef(null);
  /**function that Movies Slides */
  const moveSlides = () => {
    let mainWidth = gameData.length * 380 - window.innerWidth;
    if (mainWidth > distance) {
      /**challenge2 */
      if (mainWidth > 0 && mainWidth - distance < 330) {
        translateRef.current.style.transform = `translateX(0px)`;
        return setDistance(0);
      }

      setDistance((prevDistance) => {
        translateRef.current.style.transform = `translateX(${
          prevDistance + 380
        }px)`;

        return prevDistance + 380;
      });
    } else {
      setDistance(0);
      translateRef.current.style.transform = `translateX(0px)`;
    }
  };
  return (
    <>
      <div className={styles.main__Cont} id="BLOG">
        <h1 style={{ margin: "20px 0  40px 0" }}>الألـعـاب</h1>

        <div className={styles.slider_container} ref={translateRef}>
          {gameData.map((item, index) => (
            <BlogCard
              image={item.image}
              title={item.title}
              description={item.description}
              index={index}
              key={index}
            />
          ))}
        </div>
        <button className={styles.arrow__right} onClick={moveSlides}>
          <img
            style={{ width: "17px", height: "27px" }}
            src="./assets/arrow.svg"
            alt="arrow"
          />
        </button>
      </div>
      {/* <div className={styles.view_All}>
        <Link to={"/"}>View all</Link>
      </div> */}
    </>
  );
}

export default Blog;
