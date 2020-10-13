import React, { useState } from "react"
import styled from "@emotion/styled"

import Menu from "./Menu"

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  text-align: right;
  padding: 20px 0;
  top: 0;
  left: 0;
  z-index: 1200;
`

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.6em;
  font-size: 0.9rem;
`

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <StyledHeader>
        <div className="container">
          <Button onClick={() => setOpenMenu(true)}>Menú</Button>
        </div>
      </StyledHeader>
      <Menu opened={openMenu} setOpenMenu={setOpenMenu} />
    </>
  )
}

export default Header
