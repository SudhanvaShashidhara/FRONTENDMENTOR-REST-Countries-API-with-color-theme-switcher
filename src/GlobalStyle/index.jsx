import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${props => props.theme.colors.background};
        overflow-x: hidden;
    }

    svg {
        width: 100%;
        height: 100%;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color:  ${props => props.theme.colors.text};;
        opacity: 1; /* Firefox */
        font-weight: ${props => props.theme.fontWeight.light}
      }
      
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color:  ${props => props.theme.colors.text};
        font-weight: ${props => props.theme.fontWeight.light};
      }
      
      ::-ms-input-placeholder { /* Microsoft Edge */
        color:  ${props => props.theme.colors.text};
        font-weight: ${props => props.theme.fontWeight.light};
      }
`;

export default GlobalStyle;
