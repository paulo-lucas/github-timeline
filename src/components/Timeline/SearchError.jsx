import styled from "styled-components"
import { AiFillWarning } from "react-icons/ai"

function SearchError({ error: message }) {
  return <Container>
    <Icon color="#F1B215" size={32} />
    <Error>{message}</Error>
  </Container>
}

export default SearchError

const Container = styled.div`
  padding: 3rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
`

const Icon = styled(AiFillWarning)`
  margin-right: 1rem;
`

const Error = styled.h2`
  color: #fff;

`