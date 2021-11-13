import { useState, useEffect, useCallback } from 'react'
import { useSearchContext } from 'states/SearchProvider'

import TimelineComponent from './TimelineComponent'
import Loading from './Loading'
import SearchError from './SearchError'

const Timeline = () => {
  const { search } = useSearchContext()

  const [data, setData] = useState({ username: "" })

  const handleSearchChange = async () => {
    if (search === "")
      return setData({ username: "" })

    await fetch(`/api/user/${search}`)
      .then(res => res.json()) 
      .then(res => { setData(res); console.log(res) })
      .catch(err => setData({ error: 'Something went wrong', username: search }))
  }

  const compare = (a, b) => String(a).toUpperCase() === String(b).toUpperCase()
  const isError = () => compare(search, data.username) && data.error
  const isLoading = () => !compare(search, data.username)
  const isSuccess = () => compare(search, data.username) && !compare(search, "") && !data.error

  useEffect(() => handleSearchChange(), [search])

  return <>
    {isError() && <SearchError error={data.error} />}
    {isLoading() && <Loading />}
    {isSuccess() && <TimelineComponent data={data.repos} />}
  </>
}

export default Timeline