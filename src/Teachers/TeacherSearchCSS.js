import styled from "styled-components"

export const Title = styled.h2`
    font-size: 3rem;
    font-family: 'Gilroy-700';
    text-align: center;
    margin: 60px 0 0;

    @media (max-width:569px) {
        font-size: 2.5rem;
    }
    @media (max-width:375px) {
        font-size: 2.2rem;
    }
`
export const Grades = styled.div`
    display: flex;
    gap: 6rem;
    justify-content: center;
    align-items: center;
    color: #989898;
    font-family: 'Gilroy-700';

    & > h2{
        font-size: 2.2rem;
    }

    @media (max-width:569px) {
        & > h2{
            font-size: 2rem;
        }
    }
    @media (max-width:375px) {
        & > h2{
            font-size: 1.8rem;
        }
    }
`
export const Subjects = styled.div`
    overflow-x: scroll;
    margin: 0 1rem;

    &::-webkit-scrollbar-track
        {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
            border-radius: 10px;
            background-color: #F5F5F5;
        }

    &::-webkit-scrollbar
        {
            width: 12px;
            height: 6px;
            background-color: #F5F5F5;
        }

    &::-webkit-scrollbar-thumb
        {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
            background-color: rgba(0,0,0,0.3);
        }

    & > ul{
        padding-left: 0;
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        gap: 2rem;

        & > li{
            font-size: 1.6rem;
            height: 5rem;
            padding:0 12px;
            color: #747474;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #e7e7e7;
            border-radius: 50px;
        }
    }
`
export const Result = styled.div`
    margin: 1rem 0 2rem;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);

    & > div{
        width: 100%;
        height: 100%;

        & > img{
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width:569px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width:375px) {
        grid-template-columns: 1fr;
    }
`