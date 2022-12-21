import { useState } from "react"
import SearchForm from "./SearchForm"
import WeatherList from "./WeatherList"
import EmptyState from "./EmptyState"
import ChangeUnitToggle from "./ChangeUnit"

const Home = () => {
  const [ results, setResults ] = useState()
  const [ isCelsius, setIsCelsius ] = useState(true)

  return (
    <>
    <div className="flex justify-end">
      <ChangeUnitToggle isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
    </div>
    
    <div className="flex flex-col items-center w-full h-full">
      <SearchForm results={results} setResults={setResults} />
    {results
      ? <WeatherList results={results} setResults={setResults} isCelsius={isCelsius} />
      : <EmptyState />
    }
    </div>
    </>
  )
}

export default Home