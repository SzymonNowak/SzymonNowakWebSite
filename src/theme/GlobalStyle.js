import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');

    *, *::before, *::after {
        padding:0;
        margin:0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        font-family: "Montserrat", sans-serif;
    }
    button {
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyle