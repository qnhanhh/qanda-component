import './Parallax.css'
import image2 from './stars.png'
import image3 from './moon.png'
import image4 from './mountains_behind.png'
import image5 from './mountains_front.png'
import { useEffect } from 'react'

export const Parallax = () => {
    useEffect(()=>{
        let stars=document.getElementById('stars')
        let moon=document.getElementById('moon')
        let mountains_behind=document.getElementById('mountains_behind')
        let mountains_front=document.getElementById('mountains_front')
        let text=document.getElementById('text')
        let btn=document.querySelector('.btn')

        window.addEventListener('scroll',()=>{
            let value=window.scrollY
            stars.style.left=`${value*0.3}px`
            moon.style.top=`${value * 1.3}px`
            mountains_behind.style.top=`${value * 0.5}px`
            mountains_front.style.top='0px'
            text.style.marginRight=`${value * 6}px`
            btn.style.marginTop=`${value}px`
        })
    },[])

    return (
        <>
            <header>
                <a href='/' className='logo'>Logo</a>
                <ul>
                    <li><a href='/' className='active'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Work</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </header>
            <section>
                <img src={image2} id='stars' alt='' />
                <img src={image3} id='moon' alt='' />
                <img src={image4} id='mountains_behind' alt='' />
                <h2 id='text'>Middddddnight</h2>
                <a href='#sec' className='btn'>Register</a>
                <img src={image5} id='mountains_front' alt='' />
            </section>
            <div className='sec' id='sec'>
                <h2>Parallax Scrolling</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </>
    )
}