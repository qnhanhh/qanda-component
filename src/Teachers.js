import { useEffect, useState } from 'react'
import './Teacher.css'

export const Teachers = () => {
    const [active, setActive] = useState(1)

    useEffect(() => {
        document.querySelector('.prev').onclick = (() => {
            setActive(prevActive => {
                if(prevActive===0){
                    return prevActive+2
                }else{
                    return prevActive-1
                }
            })
        })
        document.querySelector('.next').onclick = (() => {
            setActive(prevActive => {
                if(prevActive===2){
                    return prevActive-2
                }else{
                    return prevActive+1
                }
            })
        })
        document.querySelectorAll('.teachers-item').forEach((item, index) => {
            if (index === active) {
                item.classList.add('teachers-active')
            }
        })
    }, [])

    useEffect(() => {
        const teachers = document.querySelectorAll('.teachers-item')
        teachers.forEach((item, index) => {
            item.classList.remove('teachers-active')
            if (index === active) {
                item.classList.add('teachers-active')
            }
        })
    }, [active])

    return (
        <div className='teachers-container'>
            <span className='prev'>Prev</span>
            <ul className='teachers-list'>
                <li className='teachers-item'>pic1</li>
                <li className='teachers-item'>pic2</li>
                <li className='teachers-item'>pic3</li>
            </ul>
            <span className='next'>Next</span>
        </div>
    )
}