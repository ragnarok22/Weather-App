import { useState } from "react"
import SearchForm from "./SearchForm"
import WeatherList from "./WeatherList"
import EmptyState from "./EmptyState"

const Home = () => {
  const [ results, setResults ] = useState([])

  return (
    <>
    <div className="flex flex-col items-center w-full h-full">
      <SearchForm />
    {results === []
      ? <WeatherList />
      : <EmptyState />
    }
    </div>
    </>
  )
}

export default Home