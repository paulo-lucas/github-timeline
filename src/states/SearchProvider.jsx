import { useState, createContext, useContext } from 'react'

const SearchContext = createContext()

export function useSearchContext() {
  return useContext(SearchContext)
}

function SearchProvider(props) {
  const [search, setSearch] = useState('')
  const data = { search, setSearch }

  return <SearchContext.Provider value={data} {...props} />
}

export default SearchProvider