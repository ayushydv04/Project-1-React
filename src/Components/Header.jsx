import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "./assets/logo.png"


const Header = () => {
    return (
        <>
        <NavLink to="/">
            <img src="./public/logo.png" alt="" />
        </NavLink>
        </>
    )
}

export default Header
