import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
        margin: 0;
        padding-bottom: 0.2rem;
        width: 100vw;
        height: 8rem;
        border-radius: 20px 20px 0 0;
        background-color: #1D1D1D;
        position: fixed;
        z-index: 10;

        @media (max-width:832px) {
            padding: 0.8rem 0;
        }
    `

export const List = styled.ul`
        width: 800px;
        height: 100%;
        padding: 0 16px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        position: relative;
        background-color: #1D1D1D;
        filter: url('#goo');

        @media (max-width:832px) {
            width: 100vw;
            padding: 0;
        }
    `
export const Indicator = styled.span`
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: #1D1D1D;
        position: absolute;
        z-index: 1;
        bottom: -35px;
        transition: left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        @media (max-width:832px) {
           display: none !important;
        }
    `
export const Anchor = styled(Link)`
        text-decoration: none;
        color: #1D1D1D;
        width: 120px;
        height: 100%;
        display: inline-grid;
        place-items: center;
        font-size: 3rem;
        z-index: 1;
        position: relative;

        &.nav-active{
            color: #fff;
            transform: translateY(25%);
            font-size: 4.5rem;
            transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @media (max-width:832px) {
            width: 15vw;
            &.nav-active{
                transform: translateY(0);
            }
            &> box-icon{
                display: none;
            }
        }
        @media (max-width:569px){
            width: 60px;
            &>box-icon{
                display: block;
            }
            &.logo{
                width: 130px;
            }
        }
        @media (max-width:375px){
            display: none;
            &.logo{
                display: block;
                width: 50vw;
            }
        }
    `
export const Logo = styled.div`
        width: 170%;
        height: 100%;
        background: url("https://www.qandastudy.vn/kh/uploads/files/LOGOQANDASTUDY%20(1).png")
        no-repeat center / contain;
        
        .nav-active & {
            transform: translateY(-25%) !important;
        }

        @media (max-width:832px) {
            .nav-active &{
                transform: translateY(0) !important;
            }
        }
        @media (max-width:569px){
            width: 100%;
        }
    `
export const Title = styled.span`
        display: none;
        font-size: 2rem;
        text-align: center;

        .nav-active & {
            display: block;
        }

        @media (max-width:832px) {
           font-size: 1.5rem;
           display: block;
           color: #fff;
        }
        @media (max-width:569px){
            font-size: 1.2rem;
            display: none;
        }
    `