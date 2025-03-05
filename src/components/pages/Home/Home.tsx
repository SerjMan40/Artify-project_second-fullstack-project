
import ParallaxBackground from "../../effects/ParallaxBackground"
import Footer from "../../Footer"
import Articles from "./Articles"
import Carousel from "./Carousel"
import Header from "./Header/Header"
import Slider from "./Slider"

const Home = () => {
  return (
    <div className="container">
      <ParallaxBackground />
      <Header />
      <Articles />
      <Slider />
      <Carousel />
      <Footer />
    </div>
  )
}

export default Home
