import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 104px;
  padding-bottom: 116px;
  align-items: ${props => (props.center ? "center" : "flex-start")};
`

export default Wrapper
