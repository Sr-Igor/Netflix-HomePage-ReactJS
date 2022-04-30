import styled from "styled-components";


export const Container = styled.header`
    section {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        background: transparent;
        transition: all ease 0.5s;
    }

    .black {
        background-color: #141414;
    }

    .header-logo{
        height: 25px;

        img {
            height: 100%;
        }
    }

    .header-user{ 
        height: 35px;

        img {
            height: 100%;
            border-radius: 3px;
        }
    }
`