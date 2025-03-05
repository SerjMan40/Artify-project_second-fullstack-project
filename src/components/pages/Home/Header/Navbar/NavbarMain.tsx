import User from './User'

const NavbarMain = () => {
  return (
    <ul className='navbar__list-main'>
      <li className='navbar__item-main'>
        <a className='navbar__link'>About Us</a>
      </li>
      <li className='navbar__item-main'>
        <a href='' className='navbar__link'>
          Gallery
        </a>
      </li>
      <li className='navbar__item-main'>
        <a href='' className='navbar__link'>
          Contacts
        </a>
      </li>
      <li>
        <User />
      </li>
    </ul>
  )
}

export default NavbarMain
