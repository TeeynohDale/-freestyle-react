import styled from "styled-components";

export const Flex = styled.div`
    display:flex;
    align-items:center:

    & > div ,
    & > ul {
        flex:1
    }

    @media(max-width:${({theme}) => theme.mobile}){
        flex-direction:column;
        text-align:center;

        p {
            font-size :15px;
            margin-bottom:15px;

        }
    }

`