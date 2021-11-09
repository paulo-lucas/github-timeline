import { useState, createContext, useContext } from 'react'

const SearchContext = createContext

export default function SearchProvider(props) {
  const [search, setSearch] = useState('')
  const data = { search, setSearch }

  const { Provider } = SearchContext

  return <Provider {...props} value={data}>

  </Provider>
}

export function useSearchContext() {
  return useContext(SearchContext)
}