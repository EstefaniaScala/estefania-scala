import styled from "@emotion/styled"

const Title = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.6em;
  @media (min-width: 400px) {
    font-size: 14px;
  }
  @media (min-width: 576px) {
    font-size: 16px;
  }
  margin-bottom: ${props => (props.margin ? "60px" : "0")};
  display: ${props => (props.hideOnMobile ? "none" : "block")};
  @media (min-width: 992px) {
    display: ${props => (props.hideOnDesktop ? "none" : "block")};
  }
`

export default Title
