import React from "react"
import "normalize.css"
import "typeface-karla"
import { Global, css } from "@emotion/core"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
