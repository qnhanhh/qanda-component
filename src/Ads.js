import 'boxicons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Book3d } from './3d/Book3d'

const Container = styled.div`
    height: 100vh;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffefeb;

    & > h2{
        font-size: 3rem;
        font-family: 'Gilroy-700';
        margin: 0.7rem 0 0;
    }

    & > div{
        font-size: 1.8rem;
        padding: 1.6rem 0 0;
    }
`
const Desc = styled.div`
    font-size: 1.8rem;
    margin-top: 0.5rem;

    &>a{
        text-decoration: none;
        color: #FF712C;
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: flex-start;
    }
`
const Model = styled.div`
    flex:1;
    width: 100%;
    display: flex;
    align-items: center;
    padding:1rem;
`

export const Ads = () => {
    return (
        <>
            <Container>
                <h2>Sự kiện hàng tháng</h2>
                <div>Ra mắt sách VOCA Junior</div>
                <Desc>
                    <Link to='/events'>Xem chi tiết
                        <box-icon color='#FF712C' name='chevrons-right'></box-icon>
                    </Link>
                </Desc>
                <Model>
                    <Book3d />
                </Model>
            </Container>
        </>
    )
}