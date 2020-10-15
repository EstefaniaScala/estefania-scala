import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import Logo from "../images/logo.svg"
import Line from "../images/line.svg"

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding-left: 30px;
  padding-right: 30px;
  margin: auto;
  display: block;
  @media (min-width: 768px) {
    margin-top: -250px;
  }
`

const StyledLogo = styled.img`
  display: block;
  margin: auto;
  width: 100%;
  max-width: 200px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    max-width: 350px;
  }
`

const Headline = styled.p`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    font-size: 14px;
    letter-spacing: 0.6em;
  }
`

const StyledLine = styled.img`
  width: 100%;
  height: auto;
`

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
  return (
    <>
      <ImageWrapper>
        <Img
          fluid={allImageSharp.nodes[0].fluid}
          data-sal="slide-up"
          data-sal-delay="300"
        />
        <StyledLogo
          src={Logo}
          alt="Estefanía Scala"
          data-sal="slide-up"
          data-sal-delay="300"
        />
        <Headline data-sal="slide-up" data-sal-delay="300">
          Asesoría:
          <br />
          Imagen y Comunicación
        </Headline>
      </ImageWrapper>
      <StyledLine src={Line} alt="decoration" />
    </>
  )
}

export default Cover
