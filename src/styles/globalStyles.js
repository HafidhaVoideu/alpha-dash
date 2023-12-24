"use client";
import { createGlobalStyle } from "styled-components";
import COLORS from "../styles/COLORS";

const GlobalStyle = createGlobalStyle`


body{
  background-color: ${COLORS.secondary};
  letter-spacing: 0.06;

}

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
}

ul{
  list-style: none;
}

a{
  color: ${COLORS.underline};
  text-decoration: none;
}

a:hover{
  color: white;
}


`;

export default GlobalStyle;
