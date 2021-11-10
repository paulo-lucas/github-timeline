import styled from "styled-components"

function Header() {
  return <>
    <Title>
      Github Timeline
    </Title>
    <Description>
      Generate a timeline of a users GitHub Repos	
    </Description>
  </>
}

export default Header

const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-align: center;
  text-shadow: 6px 6px 0px rgba(0,0,0,0.7);
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  color: #fff;
  text-align: center;
  margin-bottom: 10vh;
`