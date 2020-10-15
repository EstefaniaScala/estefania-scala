import React, { useState, useRef, useEffect } from "react"
import styled from "@emotion/styled"

import TitleWrapper from "./TitleWrapper.styled"
import Title from "./Title.styled"

const Wrapper = styled.div`
  padding-top: 104px;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const CollapsableButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  position: relative;
  span {
    width: 9px;
    height: 9px;
    display: block;
    position: absolute;
    top: 0.9em;
    right: -25px;
    @media (min-width: 400px) {
      top: 1.1em;
    }
    @media (min-width: 576px) {
      right: -50px;
    }
    @media (min-width: 992px) {
      display: none;
      top: 1.2em;
    }
    &:before,
    &:after {
      display: block;
      position: absolute;
      background: #000;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
    }
    &:before {
      content: "";
      width: 100%;
      height: 1px;
    }
    &.open {
      &:after {
        content: "";
        width: 1px;
        height: 100%;
      }
    }
  }
`

const Panel = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  @media (min-width: 992px) {
    max-height: inherit;
  }
  .content {
    padding-top: 60px;
    //padding-bottom: 116px;
  }
`

const Collapsable = ({
  title,
  children,
  hideTitleOnDesktop = false,
  titleMargin = false,
}) => {
  const [active, setActive] = useState(true)
  const panel = useRef(null)

  useEffect(() => {
    if (!active) {
      panel.current.style.maxHeight = null
    } else {
      panel.current.style.maxHeight = panel.current.scrollHeight + "px"
    }
  }, [active])

  return (
    <Wrapper>
      <TitleWrapper>
        <CollapsableButton onClick={() => setActive(prevState => !prevState)}>
          <Title margin={titleMargin} hideOnDesktop={hideTitleOnDesktop}>
            {title}
          </Title>
          <span className={`${!active ? "open" : ""}`}></span>
        </CollapsableButton>
      </TitleWrapper>
      <Panel ref={panel}>
        <div className="content">{children}</div>
      </Panel>
    </Wrapper>
  )
}

export default Collapsable
