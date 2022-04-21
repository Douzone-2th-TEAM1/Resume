import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle` 
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        /* overflow-y:scroll; */
      overflow:hidden;
        min-width:1400px;
        /* min-height:800px; */
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 14px;
        background-color: #fff;
        color: #000;
        height:0px;
        
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
`;
