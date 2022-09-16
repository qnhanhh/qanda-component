import 'boxicons'
import styled from 'styled-components'
import { Book3d } from './3d/Book3d'

const Container = styled.div`
    height: 100vh;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffefeb;

    & > h2{
        font-size: 30px;
        margin: 0.7rem 0 0;
    }

    & > div{
        font-size: 18px;
        padding: 16px 0 0;
    }
`
const Desc = styled.div`
    color: #FF712C;
    font-size: 18px;
    margin-top: 5px;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: flex-start;
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
            <h2>Su kien hang thang</h2>
            <div>Ra mat sach VOCA Junior</div>
            <Desc>Xem chi tiet
                <box-icon color='#FF712C' name='chevrons-right'></box-icon>
            </Desc>
            <Model>
                <Book3d />
            </Model>
        </Container>
        </>
    )
}