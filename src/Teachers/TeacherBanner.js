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
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    & > h2{
        font-size: 32px;
        font-family: 'Gilroy-700';
        margin: 0;
    }   
    & > p{
        font-size: 16px;
        font-family: 'Gilroy-300';
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