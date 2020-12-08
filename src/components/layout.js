import React from "react"
import phoneLogo from '../img/logo.png'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div
        style={{
          height: 125,
          background: '#8C5ACC',
          borderBottomRightRadius: 35,
          borderBottomLeftRadius: 35,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <img
          src={phoneLogo}
          alt="phone-logo"
          style={{
          height: 65,
          borderRadius: 1000,
          width: 'auto',
          background:'#ffffff',
          marginLeft: 12
          }}
        />
        <p
          style={{
          fontSize: 32,
          letterSpacing: 1.25,
          fontFamily: 'Montserrat',
          fontWeight: 600,
          margin: 20,
          color: '#ffffff'
          }}
        >
          onecard.bio
        </p>
      </div>
    </nav>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath} style={{ paddingTop: 0 }}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
