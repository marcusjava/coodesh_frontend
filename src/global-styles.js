import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    margin:0;
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F7F9FA;
    font-size: 16px;
    color:#293845;
}
main{
  padding: 0 50px;
 

}

a{
  text-decoration: none;
  color: #fff
}



 


`;
