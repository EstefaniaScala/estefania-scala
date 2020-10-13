import styled from "@emotion/styled"

const Title = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.6em;
  margin-bottom: ${props => (props.margin ? "60px" : "0")};
`

export default Title
