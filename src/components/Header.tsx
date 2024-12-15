import Navbar from './Header/Navbar'

const Header = () => {
  return (
    <header className='header'>
      <div className='title'>
        <h1>Artify</h1>
        <div className='title__container'>
          
            <a className='title__link' href=''>About Us</a>
            <a className='title__link' href=''>Gallery</a>
          
         
        </div>
      </div>
      <Navbar></Navbar>
    </header>
  )
}

export default Header
