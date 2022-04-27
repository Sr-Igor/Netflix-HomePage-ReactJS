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
        width: 99999px;
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
`