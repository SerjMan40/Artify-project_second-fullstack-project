import Carousel from '../components/Carousel'
import Content1 from '../components/Content1'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Pictures from '../components/Pictures'

const Home = () => {
  return (
    <div className='main-container'>
      <Header></Header>
      <Pictures></Pictures>
      <Content1></Content1>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  )
}

export default Home
