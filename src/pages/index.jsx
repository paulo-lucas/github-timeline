import SearchProvider from "states/SearchProvider"
import Search from "components/Search"
import Timeline from "components/Timeline"

import styled from "styled-components"

export default function Home() {

  return (
    <SearchProvider>
      <Container>
        <Search />
        <Timeline />
      </Container>
    </SearchProvider>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 10vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`
