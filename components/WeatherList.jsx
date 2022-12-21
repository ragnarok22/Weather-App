import WeatherItem from "./WeatherItem"

const WeatherList = ({ results, isCelsius }) => {
  return (
    <div className="flex h-full justify-center items-center">
      {
        results.map((item, i) => (
          <WeatherItem key={i} item={item} isCelsius={isCelsius} />
        ))
      }
    </div>
  )
}

export default WeatherList