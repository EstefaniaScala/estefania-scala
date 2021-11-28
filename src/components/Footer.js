import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Row from "./Row.styled"
import Title from "./Title.styled"
import Icon from "../images/icon.inline.svg"

const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  margin-top: 250px;
  @media (min-width: 768px) {
    padding-top: 80px;
    margin-top: 0;
  }
  @media (min-width: 992px) {
    padding-top: 130px;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  display: block;
  margin: auto;
  transform: translateY(-50%);
  @media (min-width: 768px) {
    transform: translateY(0);
  }
`

const SubHeading = styled.h3`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  margin-bottom: 1.5em;
`

const ExternalLink = styled.a`
  display: block;
  font-weight: 400;
  color: inherit;
  text-decoration: none;
  letter-spacing: 0.2em;
  margin-bottom: 1.5em;
  font-size: 0.8rem;
`

const StyledIcon = styled(Icon)`
  width: 50%;
  max-width: 70px;
  height: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const Column = styled.div`
  width: 100%;
  flex: 0 0 100%;
  text-align: center;
  padding: ${props => (props.padding ? "0 50px" : "0")};
  &:first-of-type {
    order: 1;
  }
  &:nth-of-type(2) {
    order: 0;
  }
  &:last-of-type {
    order: 2;
  }
  @media (min-width: 768px) {
    width: 50%;
    flex: 0 0 50%;
    &:first-of-type {
      order: 1;
    }
    &:nth-of-type(2) {
      order: 2;
    }
    &:last-of-type {
      flex: 0 0 100%;
      order: 0;
      margin-bottom: 2.5rem;
    }
  }
  @media (min-width: 992px) {
    width: 33.3333333%;
    flex: 0 0 33.3333333%;
    &:first-of-type {
      order: 0;
    }
    &:nth-of-type(2) {
      order: 1;
    }
    &:last-of-type {
      order: 2;
      margin-bottom: 0;
      width: 33.3333333%;
      flex: 0 0 33.3333333%;
    }
  }
`

const Footer = () => {
  const { footerImg } = useStaticQuery(graphql`
    {
      footerImg: allImageSharp(
        filter: {
          fluid: { originalName: { eq: "estefania-scala-footer.jpg" } }
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
    <StyledFooter>
      <div className="container">
        <Row>
          <Column>
            <Title margin>Contacto</Title>
            <SubHeading>Estefanía Vázquez Scala</SubHeading>
            <ExternalLink href="mailto:hello@estefaniascala.com">
              hello@estefaniascala.com
            </ExternalLink>
            <ExternalLink href="tel:4427808173">+52 4427808173</ExternalLink>
            <ExternalLink
              href="https://www.instagram.com/weravazquez/"
              target="_blank"
            >
              Instagram
            </ExternalLink>
          </Column>
          <Column>
            <ImageWrapper>
              <Img fluid={footerImg.nodes[0].fluid} alt="Estefanía Scala" />
            </ImageWrapper>
          </Column>
          <Column>
            <StyledIcon />
          </Column>
        </Row>
      </div>
    </StyledFooter>
  )
}

export default Footer
