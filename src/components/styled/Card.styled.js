import styled from "styled-components";

export const StyledCard = styled.div`
     display:flex;
     align-items:center;
     background-color:#fff;
     border-radius:15px;
     margin:40px 0;
     padding:20px;
     text-align:left;
     box-shadow:0 0 10px rgba(0,0,0,0.15) ;
     flex-direction:${({layout})=>layout || 'row'};
     

     img {
          width:90%;
     }
     h2{
          text-align:center;
          font-weight:bold;
     }
     p{
          font-size:15px;
          width:80%;
          text-align:center;
     }

     & >div{  
          flex:1;
     }
     @media (max-width: ${( {theme}) =>theme.mobile}){
          flex-direction: column;
     } 
`
