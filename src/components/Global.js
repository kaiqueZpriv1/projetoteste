import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #fafafa;
    }
    h1, h3, button{
         font-family: "Poppins", sans-serif;
    }
    p, span{
         font-family: "Roboto", sans-serif;
    }
`;
