import 'boxicons'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    height: 55vh;
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
    font-size: 2rem;

    & > ul{
        padding-left: 0;
        list-style-type: none;
    }
`
const Link = styled.a`
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 5px;
    line-height: 2;
    font-weight: 700;
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
`
const Div1=styled.div`
    margin: 0 auto;
    width: 70vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
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
    }

    & > ul{
        padding-left: 0;
        list-style-type: none;
        & > li{
            margin: 1.5rem 0;
        }
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
`
const Div2=styled.div`
    width: 70vw;
    text-align: center;
    padding-top: 10px;
    border-top: 1px solid #414141;
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
                            <li><Link href='/'>Giao vien</Link></li>
                            <li><Link href='/'>Sach</Link></li>
                            <li><Link href='/'>Su kien</Link></li>
                            <li><Link href='/'>Ve chung toi</Link></li>
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
                        <h3>Thong tin lien he</h3>
                        <ul>
                            <li>0914 602 500</li>
                            <li>lienhe@qandastudy.vn</li>
                            <li>So 157 Pho Ho Dac Di, Phuong Quang Trung, Quan Dong Da, Thanh pho Ha Noi, Viet Nam</li>
                        </ul>
                    </Info>
                    <Contact>
                        <span>Ket noi voi QANDA Study</span>
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