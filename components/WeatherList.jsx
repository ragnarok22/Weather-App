import WeatherItem from "./WeatherItem"

const WeatherList = ({ results }) => {
  return (
    <div className="flex">
      {
        results.map((item, i) => (
          <WeatherItem key={i} item={item} />
        ))
      }
    </div>
  )
}

export default WeatherList