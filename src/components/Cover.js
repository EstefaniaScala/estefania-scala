import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import Logo from "../images/logo.svg"

const ImageWrapper = styled.div(`
    width: 100%;
    max-width: 600px;
    padding-left: 15px;
    padding-right: 15px;
    margin: auto;
    display: block;
    margin-top: -200px;
`)

const StyledLogo = styled.img(`
  display: block;
  margin: auto;
  width: 100%;
  max-width: 350px;
  margin-top: 3rem;
`)

const Cover = () => {
  const { allImageSharp } = useStaticQuery(graphql`
    {
      allImageSharp(
        filter: { fluid: { originalName: { eq: "estefania-escala.jpg" } } }
      ) {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(allImageSharp.nodes[0])
  return (
    <ImageWrapper>
      <Img fluid={allImageSharp.nodes[0].fluid} />
      <StyledLogo src={Logo} alt="Estefanía Scala" />
    </ImageWrapper>
  )
}

export default Cover
