import React from "react"
import styled from "@emotion/styled"
import scrollTo from "gatsby-plugin-smoothscroll"

import Logo from "../images/logo-light.svg"
import Close from "../images/close.inline.svg"

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #000;
  z-index: 1500;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  transform: ${({ opened }) =>
    opened ? "translateX(0)" : "translateX(-100%)"};
  transition: all 0.3s ease-in-out;
  padding: 15px;
  @media (min-width: 768px) {
    padding: 0;
  }
`

const Column = styled.div`
  width: 100%;
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  &:first-of-type {
    order: 1;
  }
  &:last-of-type {
    order: 0;
  }
  @media (min-width: 992px) {
    width: 50%;
    flex: 0 0 50%;
    &:first-of-type {
      order: 0;
    }
    &:last-of-type {
      order: 1;
    }
  }
`

const StyledLogo = styled.img`
  width: 70%;
  max-width: 400px;
  height: auto;
  margin-top: 50px;
  @media (min-width: 768px) {
    padding-bottom: 120px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
  }
`

const Nav = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
  display: inline-block;
  font-size: 0.7em;
  padding-top: 50px;
  @media (min-width: 768px) {
    height: 100%;
    padding-top: 200px;
    font-size: 1em;
  }
`

const NavItem = styled.button`
  background: transparent;
  border: none;
  text-transform: uppercase;
  color: inherit;
  letter-spacing: 1em;
  font-weight: 700;
  display: block;
  margin-bottom: 40px;
  padding: 0;
  cursor: pointer;
`

const TextCenter = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    height: 100%;
  }
`

const Link = styled.a`
  color: inherit;
  display: block;
  letter-spacing: 0.5em;
  text-decoration: none;
  margin-bottom: 0.6em;
`
const ContactBlock = styled.div`
  margin-top: auto;
  padding-top: 50px;
  padding-bottom: 80px;
  a {
    margin-bottom: 1.5em;
  }
`

const NavInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  margin-left: auto;
  margin-top: 40px;
  cursor: pointer;
  svg {
    width: 20px;
    height: auto;
  }
  @media (min-width: 992px) {
    margin-right: 100px;
    margin-top: 150px;
    svg {
      width: 30px;
    }
  }
`

const Menu = ({ opened = false, setOpenMenu }) => {
  return (
    <Wrapper opened={opened}>
      <Column>
        <TextCenter>
          <Nav>
            <NavInnerWrapper>
              <NavItem
                onClick={() => {
                  setOpenMenu(false)
                  scrollTo("#about")
                }}
              >
                About
              </NavItem>
              <NavItem
                onClick={() => {
                  setOpenMenu(false)
                  scrollTo("#education")
                }}
              >
                Educación
              </NavItem>
              <NavItem
                onClick={() => {
                  setOpenMenu(false)
                  scrollTo("#experience")
                }}
              >
                Experiencia
              </NavItem>
              <NavItem
                onClick={() => {
                  setOpenMenu(false)
                  scrollTo("#awards")
                }}
              >
                Reconocimientos
              </NavItem>
              <Link
                href="https://www.instagram.com/weravazquez/"
                target="_blank"
              >
                INSTAGRAM
              </Link>
              <ContactBlock>
                <Link href="mailto:hello@estefaniascala.com">
                  hello@estefaniascala.com
                </Link>
                <Link href="tel:4427808173">+ 52 4427808173</Link>
              </ContactBlock>
            </NavInnerWrapper>
          </Nav>
        </TextCenter>
      </Column>
      <Column>
        <CloseButton onClick={() => setOpenMenu(false)}>
          <Close />
        </CloseButton>
        <StyledLogo src={Logo} />
      </Column>
    </Wrapper>
  )
}

export default Menu
