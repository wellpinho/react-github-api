import { createGlobalStyle } from 'styled-components'
import imgBackground from '../assets/background.svg'
import { shade } from 'polished'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #f0f0f5 url(${imgBackground}) no-repeat 70% top;
    -webkit-font-smooth: antialized;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
  }

  button {
    width: 160px;
    background-color: #54E346;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${shade(0.2, '#54E346')};
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`