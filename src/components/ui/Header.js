import React from 'react'
import logoNav from '../img/img/logoNav.png'

export const Header = () => {
  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-light bg-menu  mb-3 nav-header">
                <div className="container-fluid">
                    <a className="navbar-brand text-nav" href="/home">
                        <img src={logoNav} alt="" width="50" height="30" className="d-inline-block align-text-top mx-3" />Renault</a>                    
                </div>
            </nav>
        </>
  )
}
