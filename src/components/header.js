import React from "react"
import styled from "@emotion/styled"

const StyledHeader = styled.header(`
  position: fixed;
  width: 100%;
  text-align: right;
  padding: 20px 0;
`)

const Button = styled.button(`
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.6em;
  font-size: 0.9rem;
`)

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Button>Menú</Button>
      </div>
    </StyledHeader>
  )
}

export default Header
