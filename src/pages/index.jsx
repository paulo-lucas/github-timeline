import SearchProvider from "states/SearchProvider"
import Header from "components/Header"
import Search from "components/Search"
import Timeline from "components/Timeline"

import styled from "styled-components"
import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter()

  return (
    <SearchProvider user={query.user} >
      <Container>
        <Header />
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
