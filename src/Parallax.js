import { useEffect } from 'react'
import './Parallax.css'

export const Parallax = () => {
    useEffect(()=>{
        const content=document.querySelector('.content')
        const background=document.querySelector('.background') 
        const train=document.querySelector('.train') 
        const foreground=document.querySelector('.foreground') 

        content.addEventListener('wheel',(e)=>{
            e.preventDefault()
            content.scrollTo({
                top: 0,
                left:content.scrollLeft+e.deltaY,
                behavior: 'smooth'
            })
        })
        
    },[])

    return (
        <>
            <div className="content">
                <div className="layer background background-animation">
                    <img
                        alt=''
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc1.png"
                    />
                </div>
                <div className="layer train train-animation">
                    <img
                        alt=''
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc2.png"
                    />
                </div>
                <div className="layer foreground foreground-animation">
                    <img
                        alt=''
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc3.png"
                    />
                </div>
            </div>

        </>
    )
}