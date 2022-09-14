import {motion} from 'framer-motion'
import styled from 'styled-components'

const Container=styled.div`
    & > a{
        text-decoration: none;
        margin-top: 15px;
        padding: 15px 20px;
        background-color: rgb(255,113,44);
        color: #fff;
        font-weight: 500;
        border-radius: 32px;
        display: inline-block;
        line-height: 100%;
    }
`

export const Button=()=>{
    return(
        <Container>
            <motion.a className='link' href='/' animate={{scale:[1,1.2,1]}} transition={{repeat:Infinity, duration:2}}>Dang ky ngay</motion.a>
        </Container>
    )
}