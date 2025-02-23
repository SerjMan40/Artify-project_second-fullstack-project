import Logo from "./Logo"
import NavbarMain from "./NavbarMain"
import NavbarUser from "./NavbarUser"

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <Logo/>
        <div className='navbar__container'>
          <NavbarMain/>
          <NavbarUser/>          
        </div>
      </nav>
    </div>
  )
}

export default Navbar
