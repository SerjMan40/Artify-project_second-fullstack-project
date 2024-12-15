const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='logo'>
          <a className='logo__main' href=''>
            SITE
          </a>
          <a href=''>LOGO</a>
        </div>
        <div className='navbar__container'>
          <ul className='navbar__list-main'>
            <li className='navbar__item-main'>
              <a href=''>Home</a>
            </li>
            <li className='navbar__item-main'>
              <a href=''>Gellery</a>
            </li>
            <li className='navbar__item-main'>
              <a href=''>About Us</a>
            </li>
            <li className='navbar__item-main'>
              <a href=''>Contacts</a>
            </li>
          </ul>
          <ul className='navbar__list-user'>
            <li className='navbar__item-user'>
              <a href=''>
                <div className=' navbar__link-user'></div>
              </a>
            </li>
            <li className='navbar__item-user'>
              <a href=''>
                <div className=' navbar__link-cart'></div>
              </a>
            </li>
            <li className='navbar__item-user'>
              <a href=''>
                <div className=' navbar__link-todos'></div>
              </a>
            </li>
            <li className='navbar__item-user'>
              <a href=''>
                <div className=' navbar__link-comment'></div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
