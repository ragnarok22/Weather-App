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

    // check if city or cities exist
    if (Object.keys(cities).length !== 0) {
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
    }
    setLoading(false)
  }

  return (
    <form className="flex w-full md:w-1/2 justify-around mt-5" onSubmit={handleSubmit}>
      <div className="w-2/3 mr-3 md:mr-5">
      <SearchCity city={city} setCity={setCity} loading={loading} />
      </div>
      <div className="w-1/3">
      <SearchSubmit loading={loading} />
      </div>
    </form>
  )
}

export default SearchForm