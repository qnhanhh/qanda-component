import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import 'boxicons'
import * as css from './NavigationCSS'

export const Navigation = () => {
    const [active, setActive] = useState()
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const links = document.querySelectorAll('.nav-link')
        const indicator = document.querySelector('.nav-indicator')
        indicator.style.display = 'none'
        links.forEach((link, index) => {
            link.onclick = (e) => {
                e.preventDefault()
                setActive(index)
            }
        })
    }, [])

    useEffect(() => {
        const leftIndex = [31, 201, 365, 538, 710]
        const links = document.querySelectorAll('.nav-link')
        const indicator = document.querySelector('.nav-indicator')
        links.forEach((link, index) => {
            link.classList.remove('nav-active')
            if (index === active) {
                link.classList.add('nav-active')
                indicator.style.display = 'block'
                indicator.style.left = `${leftIndex[index]}px`
            }
        })
    }, [active])

    return (
        <css.NavContainer>
            <css.Button></css.Button>
            <css.NavList>
                <css.NavIndicator className='nav-indicator'></css.NavIndicator>
                <li>
                    <css.NavLink href="/" className='nav-link'>
                        <css.NavTitle>Giao vien</css.NavTitle>
                        <box-icon color='white' name="rocket"></box-icon>
                    </css.NavLink>
                </li>
                <li>
                    <css.NavLink href="/" className='nav-link'>
                        <css.NavTitle>Sach</css.NavTitle>
                        <box-icon color='white' name="rocket"></box-icon>
                    </css.NavLink>
                </li>
                <li>
                    <css.NavLink href="/" className="nav-link">
                        <css.NavLogo></css.NavLogo>
                    </css.NavLink>
                </li>
                <li>
                    <css.NavLink href="/" className='nav-link'>
                        <css.NavTitle>Su kien</css.NavTitle>
                        <box-icon color='white' name="rocket"></box-icon>
                    </css.NavLink>
                </li>
                <li>
                    <css.NavLink href="/" className='nav-link'>
                        <css.NavTitle>Ve chung toi</css.NavTitle>
                        <box-icon color='white' name="rocket"></box-icon>
                    </css.NavLink>
                </li>
            </css.NavList>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
        </css.NavContainer>
    )
}