import { useEffect, useState } from 'react'
import 'boxicons'
import * as css from './NavigationCSS'

export const Navigation = () => {
    const [open, setOpen] = useState('/')
    console.log(open);

    useEffect(() => {
        const param=window.location.pathname
        const links = document.querySelectorAll('.nav-link')
        const indicator = document.querySelector('.nav-indicator')
        indicator.style.display = 'none'
        links.forEach((link) => {
            if(link.getAttribute('href')===param){
                setOpen(link.getAttribute('href'))
            }
        })
    })

    useEffect(() => {
        const leftIndex = [31, 195, 360, 518, 680]
        const links = document.querySelectorAll('.nav-link')
        const indicator = document.querySelector('.nav-indicator')
        links.forEach((link, index) => {
            link.classList.remove('nav-active')
            if (link.getAttribute('href') === open) {
                link.classList.add('nav-active')
                indicator.style.display = 'block'
                indicator.style.left = `${leftIndex[index]}px`
            }
        })
    }, [open])

    return (
        <css.Container>
            <css.List>
                <css.Indicator className='nav-indicator'></css.Indicator>
                <li>
                    <css.Anchor to="/teachers" className='nav-link'>
                        <css.Title>Giáo viên</css.Title>
                        <box-icon color='white' name="chalkboard"></box-icon>
                    </css.Anchor>
                </li>
                <li>
                    <css.Anchor to="/books" className='nav-link'>
                        <css.Title>Sách</css.Title>
                        <box-icon color='white' name="book-open"></box-icon>
                    </css.Anchor>
                </li>
                <li>
                    <css.Anchor to="/" className="nav-link logo">
                        <css.Logo></css.Logo>
                    </css.Anchor>
                </li>
                <li>
                    <css.Anchor to="/events" className='nav-link'>
                        <css.Title>Sự kiện</css.Title>
                        <box-icon color='white' name="calendar-event"></box-icon>
                    </css.Anchor>
                </li>
                <li>
                    <css.Anchor to="/about" className='nav-link'>
                        <css.Title>Về chúng tôi</css.Title>
                        <box-icon color='white' name="building-house"></box-icon>
                    </css.Anchor>
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