import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { prominentTeachers } from '../data/carousel'

const Title = styled.h2`
    text-align: center;
    font-size: 30px;
    font-family: 'Gilroy-700';
    margin-top: 60px;
    
    & > span{
        color: #ff4d00;
    }
`
const Container = styled(Slider)`
    width: 90vw;
    margin: auto;
    position: relative;

    & > .slick-dots{
        position: absolute;
        bottom: 2rem;

        & > li > button::before{
            font-size: 20px;
        }
    }
`
const Item = styled.div`
    width: 100%;

    & > img{
        width: 100%;
        border-radius: 20px;
    }
`

const settings = {
    dots: true,
    autoplay:true,
    autoplaySpeed:3000,
    arrows: false,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

export const TeacherCarousel = () => {
    return (
        <>
            <Title>Giáo viên <span>nổi bật</span></Title>
            <Container {...settings}>
                {prominentTeachers.map((item, index) => {
                    return (
                        <Item key={index}>
                            <img alt="" src={item.url}></img>
                        </Item>
                    )
                })}
            </Container>
        </>
    );
}