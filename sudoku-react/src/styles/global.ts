import { createGlobalStyle, css } from 'styled-components';
import { device } from './media';

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }

      html {
        font-size: 62.5%;

        @media ${device.tablet} {
          font-size: 50%;
        }

        @media ${device.mobileM} {
          font-size: 45%;
        }

        @media ${device.mobileM} {
          font-size: 40%;
        }

        @media ${device.mobileS} {
          font-size: 35%;
        }
      }

      html,
      body {
        height: 100vh;
        width: 100%;
      }

      #root {
        height: inherit;
        width: inherit;
        display: flex;
        justify-content: center;
      }

      body {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        line-height: 1.7;
        background: ${theme.colors.background};
        color: ${theme.colors.colorPrimary};
      }
    `}
`;
