import {useState} from 'react'
import User from './User'

const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleBurger = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`burger ${isOpen ? 'burger--open' : ''}`} onClick={toggleBurger}>
      <span></span>
      <span></span>
      <span></span>
      {isOpen && (
        <div className='burger__container-menu'>
          <button>About Us</button>
          <button>Gallary</button>
          <button>Contacts</button>
          <User />       
        </div>
      )}
    </div>
  )
}

export default Burger
