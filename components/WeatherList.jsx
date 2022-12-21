import WeatherItem from "./WeatherItem"

const WeatherList = ({ results, setResults, isCelsius }) => {
  const removeItem = (position) => {
    setResults(
      results.filter((value, index) => index != position)
    )
  }
  return (
    <div className="flex flex-col md:flex-row h-full md:justify-center items-center mt-5 md:mt-0">
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