import 'boxicons'
import styled from 'styled-components'
import { Book3d } from './Book3d'

const Container = styled.div`
    margin-top: 20px;
    padding: 5px 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: #ffefeb;

    & > h2{
        font-size: 30px;
        margin-bottom: 0;
    }

    & > div{
        padding: 16px 0 0;
    }
`
const Desc = styled.div`
    color: #FF712C;
    margin-top: 10px;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: flex-start;
`
const Model = styled.div`
    display: flex;
    align-items: center;
    padding:1rem;
`

export const Ads = () => {
    return (
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
    )
}