import About from "./components/about/About";
import ExploreInf from "./components/exploreInfo/ExploreInf";
import Blog from "./components/games/Blog";
import BlogCard from "./components/games/BlogCard";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ExploreInf />
     <Blog/>
    </div>
  );
}

export default App;
