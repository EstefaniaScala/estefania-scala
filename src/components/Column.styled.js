import styled from "@emotion/styled"

const Column = styled.div`
  width: 100%;
  flex: 0 0 100%;
  text-align: center;
  padding: ${props => (props.padding ? "0 50px" : "0")};
  @media (min-width: 992px) {
    width: 33.3333333%;
    flex: 0 0 33.3333333%;
  }
`

export default Column
