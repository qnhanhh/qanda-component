import {motion} from 'framer-motion'
import './Button.css'

export const Button=()=>{
    return(
        <div className='button-container'>
            <motion.a className='button-link' href='/' animate={{scale:[1,1.2,1]}} transition={{repeat:Infinity, duration:2}}>Dang ky ngay</motion.a>
        </div>
    )
}