import React from "react"
import "normalize.css"
import "typeface-karla"
import { Global, css } from "@emotion/core"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          body,
          html {
            font-family: "Karla", sans-serif;
            box-sizing: border-box;
          }
          .container {
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
            margin: auto;
            @media (min-width: 576px) {
              max-width: 540px;
            }
            @media (min-width: 768px) {
              max-width: 720px;
            }
            @media (min-width: 992px) {
              max-width: 960px;
            }
            @media (min-width: 1200px) {
              max-width: 1140px;
            }
          }
        `}
      />
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
