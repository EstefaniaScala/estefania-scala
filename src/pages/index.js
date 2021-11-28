import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/Cover"
import About from "../components/About"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Awards from "../components/Awards"
import OgImage from "../images/estefania-scala-cover.jpeg"

const SeoTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Imagen y comunicación"
      meta={[{ name: "og:image", content: OgImage }]}
    />
    <SeoTitle>Estefanía Scala</SeoTitle>
    <Cover />
    <About />
    <Education />
    <Experience />
    <Awards />
  </Layout>
)

export default IndexPage
