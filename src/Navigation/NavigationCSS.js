import styled from 'styled-components'

export const NavContainer = styled.div`
        margin: 0;
        padding-bottom: 2px;
        width: 100vw;
        height: 80px;
        border-radius: 20px 20px 0 0;
        background-color: #000;
        position: fixed;
        z-index: 10;

        @media (max-width:832px) {
            padding: 8px 0;
        }
    `
export const Button = styled.button`
        display: none;

        /* @media (max-width:832px) {
            display: block;
            width: 60px;
            height: 60px;
            background-color: red;
        } */
    `

export const NavList = styled.ul`
        width: 800px;
        height: 100%;
        padding: 0 16px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        position: relative;
        background-color: #000;
        filter: url('#goo');

        @media (max-width:832px) {
            width: 90vw;
        }
    `
export const NavIndicator = styled.span`
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: #000;
        position: absolute;
        z-index: 1;
        bottom: -35px;
        transition: left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        @media (max-width:832px) {
           display: none !important;
        }
    `
export const NavLink = styled.a`
        text-decoration: none;
        color: #000;
        width: 120px;
        height: 100%;
        display: inline-grid;
        place-items: center;
        font-size: 30px;
        z-index: 1;
        position: relative;

        &.nav-active{
            color: #fff;
            transform: translateY(25%);
            font-size: 45px;
            transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @media (max-width:832px) {
            width: 15vw;
            &.nav-active{
                transform: translateY(0);
            }
        }
    `
export const NavLogo = styled.div`
        width: 100%;
        height: 100%;
        background: url("https://www.qandastudy.vn/kh/uploads/files/LOGOQANDASTUDY%20(1).png")
        no-repeat center / contain;
        
        .nav-active & {
            transform: translateY(-25%) !important;
        }

        @media (max-width:832px) {
            &.nav-active{
                transform: translateY(25%);
            }
        }
    `
export const NavTitle = styled.span`
        display: none;
        font-size: 20px;

        .nav-active & {
            display: block;
        }

        @media (max-width:832px) {
           font-size: 15px;
           display: block;
           color: #fff;
        }
    `