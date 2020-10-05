import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Coming Soon" />
    <div
      css={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        img {
          width: 100%;
          max-width: 400px;
        }
      `}
    >
      <img src={Logo} alt="Estefanía Scala" />
    </div>
  </Layout>
)

export default IndexPage
