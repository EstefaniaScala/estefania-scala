import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "./Title.styled"
import TitleWrapper from "./TitleWrapper.styled"
import Deco from "../images/deco.inline.svg"
import Deco2 from "../images/deco2.inline.svg"
import Row from "./Row.styled"
import Collapsable from "./Collapsable"

const Column = styled.div`
  width: 100%;
  flex: 0 0 100%;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  @media (min-width: 768px) {
    width: 50%;
    flex: 0 0 50%;
  }
`

const ImageWrapper = styled.div`
  width: 75%;
  display: block;
  margin: auto;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const TextBlock = styled.div`
  letter-spacing: 0.2em;
  margin-bottom: 3.5rem;
  h2 {
    font-size: 0.9rem;
    font-weight: 700;
  }
`

const ImageDeco = styled(Deco)`
  position: absolute;
  bottom: 0;
  left: 15px;
  margin: auto;
  top: 50px;
  display: none;
  @media (min-widht: 768px) {
    display: block;
  }
`

const ImageDeco2 = styled(Deco2)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
  height: auto;
  @media (min-width: 768px) {
    display: none;
  }
`

const awardBlocks = [
  {
    title: "Paramédicos Cruz Roja Guanajuato,",
    description: "Certified 3 months in labor.",
  },
  {
    title: "Oral and written communication.",
    description: "McDonald's Project of the Month.",
  },
  {
    title: "Project planning and development.",
    description: "Heaven transforming challenge.",
  },
  {
    title: "Teamwork and social media",
    description: "MAM Productions, S.A. DE C.V.",
  },
  {
    title: "Elite event promotion.",
    description: "Tequila Miguel Aceves.",
  },
  {
    title: "Launch and Pitching.",
    description: "Nouveau Communication.",
  },
]

const Awards = () => {
  const { awardsImg } = useStaticQuery(graphql`
    {
      awardsImg: allImageSharp(
        filter: {
          fluid: { originalName: { eq: "estefania-scala-reconocimientos.jpg" } }
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
    <div id="awards">
      <Collapsable title="Acknowledgments" hideTitleOnDesktop>
        <div className="container">
          <Row>
            <Column data-sal="slide-right" data-sal-delay="300">
              <ImageDeco />
              <ImageDeco2 />
              <ImageWrapper>
                <Img fluid={awardsImg.nodes[0].fluid} alt="Estefanía Scala" />
              </ImageWrapper>
            </Column>
            <Column>
              <TitleWrapper>
                <Title
                  margin
                  hideOnMobile
                  data-sal="slide-left"
                  data-sal-delay="300"
                >
                  Acknowledgments
                </Title>
                {awardBlocks.map((awardBlock, index) => (
                  <TextBlock
                    key={`text-block-${index}`}
                    data-sal="slide-up"
                    data-sal-delay="300"
                  >
                    <h2>{awardBlock.title}</h2>
                    <p>{awardBlock.description}</p>
                  </TextBlock>
                ))}
              </TitleWrapper>
            </Column>
          </Row>
        </div>
      </Collapsable>
    </div>
  )
}

export default Awards
