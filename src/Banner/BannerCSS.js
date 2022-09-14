import styled from 'styled-components'

export const Wrapper=styled.div`
    position: relative;
    height: 600px;
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
    margin-top: 30px;
    width: 75%;
    font-size: 1.3rem;

    & > span{
        font-weight: 900;
    }

    & > p{
        font-weight: 300;
    }
`
