import 'boxicons'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    height: 55vh;

    @media (max-width:569px){
        height: 45vh;
    }
`
const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
`
const Caption = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.35);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    position: relative;
    z-index: 10;
    width: 70vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    font-size: 35px;
    font-family: 'Gilroy-700';
    
    & > ul{
        padding-left: 0;
        list-style-type: none;
        font-size: 22px;
    }

    @media (max-width:569px){
        flex-direction: column;
        justify-content: center;
        &>h2{
            margin: 0;
            text-align: center;
        }
        &>ul{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
`
const Link = styled.a`
    text-decoration: none;
    color: #fff;
    width: fit-content;
    display: block;
    padding: 5px;
    line-height: 2;
    font-family: 'Gilroy-700';

    @media (max-width:569px){
        line-height: 1.5;
        /* width: 150%; */
        /* margin-right: 3rem; */
    }
`
const Bottom=styled.footer`
    font-size: 18px;
    font-weight: 400;
    height: 45vh;
    background-color: #343434;
    color: #CDCDCD;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width:569px){
        height: 55vh;
    }
`
const Div1=styled.div`
    margin: 0 auto;
    width: 70vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    font-size: 16px;

    @media (max-width:1200px){
        width: 80vw;
    }
    @media (max-width:832px){
        /* display: block; */
        position: relative;
    }
`
const Logo=styled.div`
    width: 45%;

    & > img{
        width:100%;
        margin-bottom: 10px;
    }
`
const Info=styled.div`
    width: 25%;
    margin: 0 1rem;
    
    & > h3{
        margin: 0;
        color: #fff;
        font-size: 18px;
        font-family: 'Gilroy-700';
    }

    & > ul{
        padding-left: 0;
        list-style-type: none;
        & > li{
            margin: 1.5rem 0;
        }
    }

    @media (max-width:832px){
        width: 50%;
        margin: 0;
    }
`
const Contact=styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > .icon{
        display: flex;
        gap: 0.5rem;
    }

    @media (max-width:832px){
        position: absolute;
        bottom: 2rem;
        left: 0;
        max-width: 45%;
    }
`
const Div2=styled.div`
    width: 70vw;
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #414141;

    @media (max-width:1200px){
        width: 80vw;
    }
    @media (max-width:832px){
        width: 85vw;
    }
`

export const Footer = () => {
    return (
        <>
            <Container>
                <Video autoPlay muted loop>
                    <source src='https://qandastudy.vn/kh/uploads/files/Footer%20Resized.mp4' type='video/mp4'></source>
                </Video>
                <Caption>
                    <Wrapper>
                        <h2>QANDA STUDY</h2>
                        <ul>
                            <li><Link href='/' className='hvr-underline-from-center'>Giáo viên</Link></li>
                            <li><Link href='/' className='hvr-underline-from-center'>Sách</Link></li>
                            <li><Link href='/' className='hvr-underline-from-center'>Sự kiện</Link></li>
                            <li><Link href='/' className='hvr-underline-from-center'>Về chúng tôi</Link></li>
                        </ul>
                    </Wrapper>
                </Caption>
            </Container>
            <Bottom>
                <Div1>
                    <Logo>
                        <img src='https://www.qandastudy.vn/kh/uploads/files/LOGOQANDASTUDY%20(1).png' alt=''></img>
                        <span>Mathpresso Vietnam Co., Lt</span>
                    </Logo>
                    <Info>
                        <h3>Thông tin liên hệ</h3>
                        <ul>
                            <li>0914 602 500</li>
                            <li>lienhe@qandastudy.vn</li>
                            <li>Số 157 Phố Hồ Đắc Di, Phường Quang Trung, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</li>
                        </ul>
                    </Info>
                    <Contact>
                        <span>Kết nối với QANDA Study</span>
                        <span className='icon'>
                            <box-icon color='#fff' name='facebook-square' type='logo' ></box-icon>
                            <box-icon color='#fff' name='youtube' type='logo' ></box-icon>
                            <box-icon color='#fff' name='envelope' type='solid' ></box-icon>
                            <box-icon color='#fff' name='instagram-alt' type='logo' ></box-icon>
                        </span>
                    </Contact>
                </Div1>
                <Div2>
                © qandastudy 2022
                </Div2>
            </Bottom>
        </>
    )
}