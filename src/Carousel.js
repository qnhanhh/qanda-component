import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import './Carousel.css'
import { teachers } from './data/carousel'

const Container=styled.div`
    margin: 3rem 0;
    text-align: center;

    & > h2{
        margin: 0 15%;
        font-size: 30px;
        margin-bottom: 0;
    }
`
const Desc=styled.div`
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: flex-start;
    color: #FF712C;
`

export const Carousel = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <Container>
            <h2>{teachers.title}</h2>
            <Desc>Xem chi tiet
                <box-icon color='#FF712C' name='chevrons-right'></box-icon>
            </Desc>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                    {teachers.data.map((item, index) => {
                        return (
                            <motion.div key={index} className='item'>
                                <img src={item.url} alt='' />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </Container>
    )
}