import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { withRouter } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements'

const Navbar = ({ toggle, history }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <img src={require('../../images/logotipo1.jpg')} alt='logo' />
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {' '}
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact='true'
                  offset={30}
                >
                  Sobre
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='service'
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact='true'
                  offset={30}
                >
                  Serviço
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='portfolio'
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Assistencia
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='contact'
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact='true'
                  offset={10}
                >
                  Benefícios
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => {
                    history.push('/signin')
                  }}
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact='true'
                  offset={10}
                >
                  Login
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default withRouter(Navbar)
