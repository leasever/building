import { NavLink } from 'react-router-dom'
import { useState } from 'react'
export default function Menu() {
  const [burger_class, setBurgerClass] = useState('burger_bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger_bar clicked')
      setMenuClass('menu visible')
    } else {
      setBurgerClass('burger_bar unclicked')
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }
  const Nav = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <NavLink to={'/'}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>EMPRESA</NavLink>
            </li>
            <li>
              <NavLink to={'/project'}>NUESTRAS OBRAS</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>CONTACTO</NavLink>
            </li>
            <li>
              <a
                href='#'
                title='Facebook'
              >
                <div id='idFacebookIcon'>f</div>
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }
  const Logo = ({ src }) => {
    return (
      <>
        <div className='logo_img'>
          <img
            src={`/img/${src}`}
            alt='Logo de la empresa'
            loading='eager'
          />
        </div>
      </>
    )
  }

  return (
    <>
      <header>
        <div className='container'>
          <div className='menu_section_pc'>
            <Logo src='logo.png' />
            <Nav />
          </div>
        </div>
        <div className='menu_section_movil'>
          <Logo src='logo_footer.png' />
          <div
            className='burger_menu'
            onClick={updateMenu}
          >
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
        <div className={menu_class}>
          <Nav />
        </div>
      </header>
    </>
  )
}
