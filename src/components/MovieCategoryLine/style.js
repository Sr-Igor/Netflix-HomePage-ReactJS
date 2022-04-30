import styled from "styled-components";

export const Container = styled.div`
    h2 {
       margin: 0px 0px 0px 30px; 
    }

    .movieRow--listArea {
        overflow-x: hidden;
    }

    .list--row {
        display:flex;
        transition: all ease 0.5s;
    }

    .list--item {
        display: inline-block;
        width: 150px;
        cursor: pointer;
        
        img {
            width: 100%;
            transform: scale(0.9);
            transition: ease all 0.2s;

            &:hover {
                transform: scale(1);
            }
        }
    }

    .movieArrow-left,
    .movieArrow-right {
        color: #FFF;
        font-size: 50px;
        position: absolute;
        widht: 40px;
        height: 225px;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: rgba( 0, 0, 0, 0.6);
        opacity: 0;
        transition: all ease 0.5s;
    }

    .movieArrow-lef{
        left: 0
    }

    .movieArrow-right {
        right: 0
    }

    &:hover .movieArrow-left,
    &:hover .movieArrow-right {
        opacity: 1;
    }

    @media (max-width: 760px) {
        .movieArrow-left,
        .movieArrow-right {
            opacity: 1;
        }
    }
`