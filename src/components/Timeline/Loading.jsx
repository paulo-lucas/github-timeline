import styled, { keyframes } from "styled-components"

function Loading() {
  return <Container>
    <Spinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </Spinner>
  </Container>
}

export default Loading

const Container = styled.div`
  padding: 3rem;
  padding-left: calc(3rem + 25px);
  flex-grow: 1;
  display: flex;
  align-items: center;
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`

const Spinner = styled.svg`
  animation: ${rotate} 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  
  & .path {
    stroke: #fff;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;
