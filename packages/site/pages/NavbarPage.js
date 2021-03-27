import React from 'react'
import Example from '../components/Example'
import { Navbar } from '../snippets/snippets'

const NavbarPage = () => {
    const navItems = [ "Home", "About", "Contact" ]
    
    return (
        <Example>
            <Navbar items={navItems} />
        </Example>
    )
}

export default NavbarPage
