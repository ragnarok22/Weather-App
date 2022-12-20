import { useState } from "react"
import axios from "axios"

import SearchCity from "./SearchCity"
import SearchSubmit from "./SearchSubmit"

const SearchForm = ({ results, setResults }) => {
  const [city, setCity] = useState("")
  const [ loading, setLoading ] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { data: cities } = await axios.get(`/api/cities`, { params: { city } })
    // get the weathers in the cities
    let weathers = []
    for(let i = 0; i < cities.length; i++) {
      const info = await axios.get('/api/weather', {
        params: {
          latitude: cities[i].latitude,
          longitude: cities[i].longitude,
        }
      })
      weathers.push({...info.data, city: cities[i].name})
    }
    setResults(weathers)
    setLoading(false)
  }

  return (
    <form className="flex w-1/2 justify-around" onSubmit={handleSubmit}>
      <div className="w-2/3 mr-5">
      <SearchCity city={city} setCity={setCity} />
      </div>
      <div className="w-1/3">
      <SearchSubmit loading={loading} />
      </div>
    </form>
  )
}

export default SearchForm