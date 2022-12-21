import WeatherItem from "./WeatherItem"

const WeatherList = ({ results, setResults, isCelsius }) => {
  const removeItem = (position) => {
    setResults(
      results.filter((value, index) => index != position)
    )
  }
  return (
    <div className="flex h-full justify-center items-center">
      {
        results.map((item, i) => (
          <WeatherItem
            key={i}
            item={item}
            isCelsius={isCelsius}
            handleDelete={() => removeItem(i)}
          />
        ))
      }
    </div>
  )
}

export default WeatherList