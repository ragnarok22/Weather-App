import { addDays, getDay } from "../utils"

const WeatherItem = ({ item }) => {
  const days = item.temperatures.map((t, i) => {
    if (i === 0) {
      return "today"
    } else {
      return getDay(addDays(new Date(), i))
    }
  })

  return (
    <div className="w-full rounded-xl bg-red-400 p-3 mx-3">
      {/* Header card */}
      <div className="flex">
        <div className="w-1/3">icon</div>

        {/* City information */}
        <div className="w-2/3">
          <div>{item.city}</div>
          <div className="flex">{item.latitude}°N, {item.longitude}° W</div>
        </div>
      </div>

      {/* Weather info */}
      <div className="flex">
        {item.temperatures.map((temperature, i) => (
          <div key={i}>
            <p>{days[i]}</p>
          <p className="mx-1">{temperature}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherItem