import styled from "styled-components"

const Container=styled.div`
    width: 100%;
    padding-top: 80px;
    position: relative;

    & > img{
        width: 100%;
        height: auto;
    }
`
const Text=styled.div`
    position: absolute;
    max-width: 80%;
    margin: auto;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;

    & > h2{
        font-size: 3.2rem;
        font-family: 'Gilroy-700';
        margin: 0;
    }   
    & > p{
        font-size: 1.6rem;
        font-family: 'Gilroy-300';
    }

    @media (max-width:569px) {
        &>h2{
            font-size: 2.5rem;
        }
        &>p{
            font-size: 1.3rem;
        }
    }
    @media (max-width:375px) {
        &>h2{
            font-size: 2.2rem;
        }
        &>p{
            font-size: 1.1rem;
        }
    }
`
export const TeacherBanner=()=>{
    return(
        <Container>
            <img src='https://www.qandastudy.vn/kh/uploads/files/bn-class.png' alt=''></img>
            <Text>
                <h2>Kết nối với giáo viên của bạn</h2>
                <p>Nền tảng học trực tuyến cùng đội ngũ giáo viên ngôi sao</p>
            </Text>
        </Container>
    )
}