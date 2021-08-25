import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Column from "./Column.styled"
import Collapsable from "./Collapsable"
import Row from "./Row.styled"

const TextBlock = styled.div`
  letter-spacing: 0.2em;
  margin-bottom: 3.5rem;
  h2 {
    font-size: 0.9rem;
    font-weight: 700;
  }
  p {
    font-weight: 400;
    font-style: italic;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 0.9rem;
    li {
      margin-bottom: 0.5rem;
      line-height: 1.5;
      &:before {
        content: "-";
        display: inline-block;
        left: -1rem;
        top: 0;
      }
    }
  }
`

const ImageWrapper = styled.div`
  width: 68%;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  display: none;
  margin: auto;
  &:after {
    content: "";
    display: block;
    padding-top: 100%;
  }
  @media (min-width: 768px) {
    display: block;
  }
`

const Experience = () => {
  const breakpoints = useBreakpoint()
  const { experienceImg } = useStaticQuery(graphql`
    {
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
    <div id="experience">
      <ParallaxProvider>
        <Collapsable title="Experiencia">
          <Row>
            <Column padding>
              <TextBlock data-sal="slide-up" data-sal-delay="300">
                <h2>INDEP</h2>
                <p>Presente</p>
                <ul>
                  <li>Coordinación de Mercadotecnia.</li>
                </ul>
              </TextBlock>
              <TextBlock data-sal="slide-up" data-sal-delay="300">
                <h2>LOTERÍA NACIONAL PARA LA ASISTENCIA PÚBLICA</h2>
                <p>Febrero 2020 - Febrero 2021</p>
                <ul>
                  <li>Gerente de Mercadotecnia y Publicidad.</li>
                </ul>
              </TextBlock>
              <TextBlock data-sal="slide-up" data-sal-delay="300">
                <h2>INSTITUTO MEJORES GOBERNANTES</h2>
                <p>Mayo - Octubre 2019</p>
                <ul>
                  <li>París, Francia</li>
                  <li>Madrid, España</li>
                  <li>Coordinadora de evento</li>
                </ul>
              </TextBlock>
            </Column>
            <Column padding>
              <TextBlock data-sal="slide-up" data-sal-delay="300">
                <h2>PLASTIC PRODUCTS VAZGÓN, S.A. DE C.V.</h2>
                <p>Enero - Julio 2016</p>
                <ul>
                  <li>Asistente líder de procesos.</li>
                  <li>Elaboración de informes.</li>
                  <li>Apoyo en el trato con clientes.</li>
                  <li>Soporte en logística.</li>
                  <li>Asistente de ventas.</li>
                </ul>
              </TextBlock>
              <TextBlock data-sal="slide-up" data-sal-delay="300">
                <h2>McCANN</h2>
                <p>Enero - Julio 2016</p>
                <ul>
                  <li>
                    Logística de marca y organización de eventos especiales.
                  </li>
                  <li>
                    Realización de eventos sociales, promoción y patrocinios.
                  </li>
                  <li>Logística de eventos.</li>
                  <li>Gerente de proyecto.</li>
                  <li>Embajador de la marca.</li>
                  <li>Champagne en las redes sociales</li>
                </ul>
              </TextBlock>
            </Column>
            <Column>
              {breakpoints.lg ? (
                <Parallax y={[50, 0]}>
                  <div>
                    <ImageWrapper>
                      <Img
                        fluid={experienceImg.nodes[0].fluid}
                        alt="Estefanía Scala"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </ImageWrapper>
                  </div>
                </Parallax>
              ) : (
                <ImageWrapper>
                  <Img
                    fluid={experienceImg.nodes[0].fluid}
                    alt="Estefanía Scala"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </ImageWrapper>
              )}
            </Column>
          </Row>
        </Collapsable>
      </ParallaxProvider>
    </div>
  )
}

export default Experience
