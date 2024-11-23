const Header = () => {
  return (
    <header className='header header--opacity'>
      <div className='logo logo__move'></div>
      <nav className='navbar'>
        <ul className='navbar__list'>
          <li className='navbar__link'>Главная</li>
          <li className='navbar__link'>Галерея</li>
          <li className='navbar__link'>Корзина</li>
          <li className='navbar__link'>Регистрация</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
