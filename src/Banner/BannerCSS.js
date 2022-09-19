import styled from 'styled-components'

export const Wrapper=styled.div`
    position: relative;
    height: 100vh;
    overflow-y: hidden;
`

export const Video=styled.video`
    width: 100%;
    height:100%;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    pointer-events: none;
`

export const Caption=styled.div`
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    border-radius: 20px 20px 0 0;
    background-color: rgba(0,0,0,0.35);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Container=styled.div`
    width: 75%;
    font-size:3rem;
    font-family: 'Gilroy-700';
    & > h2{
        margin:0;
    }
    
    & > .title{
        font-family: 'Gilroy-900';
        font-size: 5rem;
    }

    & > p{
        font-family: 'Gilroy-300';
        font-size: 1.6rem;
    }

    @media (max-width:375px){
        font-size: 1.5rem;
        & > .title{
            font-size: 4rem;
        }

        & > p{
            font-size: 1.5rem;
        }
    }
`
