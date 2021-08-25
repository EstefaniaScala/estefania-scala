import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Collapsable from "./Collapsable"
import Row from "./Row.styled"

const TextBlock = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 2rem;
  h2 {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
  }
`
const LeftImage = styled.div`
  width: 62%;
  display: block;
  margin-left: auto;
  margin-right: 0;
  padding-right: 15px;
  @media (min-width: 768px) {
    margin: auto;
    padding-right: 0;
  }
`

const Column = styled.div`
  width: 100%;
  flex: 0 0 100%;
  text-align: center;
  padding: ${props => (props.padding ? "0 50px" : "0")};
  position: relative;
  &:first-of-type {
    order: 2;
  }
  &:nth-of-type(2) {
    order: 0;
  }
  &:last-of-type {
    order: 1;
  }
  @media (min-width: 992px) {
    width: 33.3333333%;
    flex: 0 0 33.3333333%;
  }
`

const MobileImage = styled.div`
  position: absolute;
  width: 50%;
  border-radius: 50%;
  left: 15px;
  overflow: hidden;
  z-index: 2;
  top: 0;
  transform: translateY(50%);
  &:after {
    content: "";
    display: block;
    padding-top: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

const Education = () => {
  const { educationImg1, experienceImg } = useStaticQuery(graphql`
    {
      educationImg1: allImageSharp(
        filter: {
          fluid: { originalName: { eq: "estefania-scala-educacion.jpg" } }
        }
      ) {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      experienceImg: allImageSharp(
        filter: {
          fluid: { originalName: { eq: "estefania-scala-experiencia.jpg" } }
        }
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
    <div id="education">
      <Collapsable title="Educación">
        <Row>
          <Column>
            <MobileImage>
              <Img
                fluid={experienceImg.nodes[0].fluid}
                alt="Estefanía Scala"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: "0",
                  left: "0",
                  objectFit: "cover",
                }}
              />
            </MobileImage>
            <LeftImage>
              <Img
                fluid={educationImg1.nodes[0].fluid}
                alt="Estefanía Scala"
                data-sal="slide-up"
              />
            </LeftImage>
          </Column>
          <Column padding>
            <TextBlock data-sal="slide-up" data-sal-delay="300">
              <h2>Licenciada en Marketing y Comunicación</h2>
              <p>
                Tecnológico de Monterrey
                <br />
                Campus Ciudad de México
                <br />
                2017
              </p>
            </TextBlock>
            <TextBlock data-sal="slide-up" data-sal-delay="300">
              <h2>Máster de Comunicación y Relaciones Públicas y Publicidad</h2>
              <p>
                ESIC
                <br />
                Barcelona
                <br />
                2018
              </p>
            </TextBlock>
            <TextBlock data-sal="slide-up" data-sal-delay="300">
              <h2>Máster en Imagen Personal y Estilista</h2>
              <p>
                ARTIDI
                <br />
                Barcelona
                <br />
                2019
              </p>
            </TextBlock>
          </Column>
          <Column padding>
            <TextBlock data-sal="slide-up" data-sal-delay="300">
              <h2>Máster en Imagen Corporativa</h2>
              <p>
                ARTIDI
                <br />
                Barcelona
                <br />
                2019
              </p>
            </TextBlock>
            <TextBlock data-sal="slide-up" data-sal-delay="300">
              <h2>Certificado en Negociación</h2>
              <p>
                Harvard Bussiness School
                <br />
                2020
              </p>
            </TextBlock>
          </Column>
        </Row>
      </Collapsable>
    </div>
  )
}

export default Education
