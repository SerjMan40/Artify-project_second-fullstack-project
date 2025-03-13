import ParallaxBackground from '../../effects/ParallaxBackground'
import Footer from '../../Footer'
import Articles from './Articles'
import ImageCarousel from './ImageCarousel'
import Header from './Header/Header'
import Slider from './Slider'
import CommentCarousel from './Header/CommentCarousel'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import Registration from '../../forms/Registration'
import LoginForm from '../../forms/LoginForm'


const Home = () => {
  const showRegistrationForm = useSelector((state: RootState) => state.user.showRegistrationForm)
  const showLoginForm = useSelector((state: RootState) => state.user.showLoginForm)
  return (
    <div className='container'>
      <ParallaxBackground />
      <Header />     
      {showRegistrationForm && <Registration />}
      {showLoginForm && <LoginForm />}
      <Articles />
      <Slider />
      <ImageCarousel />
      <CommentCarousel />
      <Footer />
    </div>
  )
}

export default Home
