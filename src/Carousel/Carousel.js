import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import './Carousel.css'
import { teachers, subjects, books } from '../data/carousel'

const Container = styled.div`
    background-color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > h2{
        font-size: 30px;
        margin-bottom: 0;
    }
`
const Desc = styled.div`
    font-size: 18px;
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: flex-start;
    color: #FF712C;
`

export const Carousel = ({ props }) => {
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <>
        <Container>
            <>
                {props === 'teachers' && <h2>{teachers.title}</h2>}
                {props === 'subjects' && <h2>{subjects.title}</h2>}
                {props === 'books' && <h2>{books.title}</h2>}
                <Desc>Xem chi tiet
                    <box-icon color='#FF712C' name='chevrons-right'></box-icon>
                </Desc>
                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                    {props === 'teachers' &&
                        <>
                            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                                {teachers.data.map((item, index) => {
                                    return (
                                        <motion.div key={index} className='item'>
                                            <img src={item.url} alt='' />
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </>
                    }
                    {props === 'subjects' &&
                        <>
                            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                                {subjects.data.map((item, index) => {
                                    return (
                                        <motion.div key={index} className='item'>
                                            <img src={item.url} alt='' />
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </>
                    }
                    {props === 'books' &&
                        <>
                            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                                {books.data.map((item, index) => {
                                    return (
                                        <motion.div key={index} className='item'>
                                            <img src={item.url} alt='' />
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </>
                    }
                </motion.div>
            </>
        </Container>
        </>
    )
}