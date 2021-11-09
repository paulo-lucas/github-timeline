import SearchProvider from "states/SearchProvider"
import Search from "components/Search"
import Timeline from "components/Timeline"

export default function Home() {

  return (
    <div>
      <SearchProvider>
        <Search />
        <Timeline />
      </SearchProvider>
    </div>
  )
}
