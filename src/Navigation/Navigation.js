import { useEffect, useState } from 'react'
import 'boxicons'
import * as css from './NavigationCSS'

export const Navigation = () => {
    const [active, setActive] = useState()

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
        const leftIndex = [31, 195, 360, 518, 680]
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
        <css.Container>
            <css.List>
                <css.Indicator className='nav-indicator'></css.Indicator>
                <li>
                    <css.Link href="/" className='nav-link'>
                        <css.Title>Giao vien</css.Title>
                        <box-icon color='white' name="chalkboard"></box-icon>
                    </css.Link>
                </li>
                <li>
                    <css.Link href="/" className='nav-link'>
                        <css.Title>Sach</css.Title>
                        <box-icon color='white' name="book-open"></box-icon>
                    </css.Link>
                </li>
                <li>
                    <css.Link href="/" className="nav-link">
                        <css.Logo></css.Logo>
                    </css.Link>
                </li>
                <li>
                    <css.Link href="/" className='nav-link'>
                        <css.Title>Su kien</css.Title>
                        <box-icon color='white' name="calendar-event"></box-icon>
                    </css.Link>
                </li>
                <li>
                    <css.Link href="/" className='nav-link'>
                        <css.Title>Ve chung toi</css.Title>
                        <box-icon color='white' name="building-house"></box-icon>
                    </css.Link>
                </li>
            </css.List>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
        </css.Container>
    )
}