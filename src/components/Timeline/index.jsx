import { useState, useEffect, useCallback } from 'react'
import { useSearchContext } from 'states/SearchProvider'

import TimelineComponent from './TimelineComponent'
import Loading from './Loading'
// import SearchError from './SearchError'

const Timeline = () => {
  const { search } = useSearchContext()

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const handleSearchChange = async () => {
    if(search === '')
      return setData(null)

    setIsLoading(true)
    await fetch(`/api/user/${search}`)
    .then(res => res.json())
    .then(res => console.log('finally', res))
    .catch(err => setData({ error: 'Something went wrong'}))
    .finally(() => search === data.user?.username || data.error && setIsLoading(false))
  }

  useEffect(() => handleSearchChange, [search])

  return <Loading />
}

export default Timeline