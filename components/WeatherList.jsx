import WeatherItem from "./WeatherItem"

const WeatherList = ({ results }) => {
  return (
    <div className="flex h-full justify-center items-center">
      {
        results.map((item, i) => (
          <WeatherItem key={i} item={item} />
        ))
      }
    </div>
  )
}

export default WeatherList