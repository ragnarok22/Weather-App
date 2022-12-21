import { addDays, celsiusToFahrenheit, getDay, getWheaterIcon } from "../utils"
import { TrashIcon } from "./icons"

const WeatherItem = ({ item, isCelsius, handleDelete }) => {
  const days = item.temperatures.map((t, i) => {
    if (i === 0) {
      return "today"
    } else {
      return getDay(addDays(new Date(), i))
    }
  })

  const [bgColor, iconColor] = (() => {
    const t = item.temperatures.reduce((accumulation, value) => {
      return accumulation + value
    }) / item.temperatures.length
    if (t <= 10) {
      return ["bg-blue-600", "text-blue-400"]
    } else if (t <= 20) {
      return ["bg-blue-400", "text-blue-200"]
    } else if (t < 30) {
      return ["bg-yellow-400", "text-yellow-200"]
    } else {
      return ["bg-yellow-600", "text-yellow-400"]
    }
  })()

  return (
    <div className={`w-full rounded-3xl ${bgColor} text-white p-3 mx-3 shadow-md h-48 flex flex-col items-center relative`}>
      {/* Header card */}
      <div className="flex">
        <div className="w-1/3">{getWheaterIcon(item.weathercode, iconColor)}</div>

        {/* City information */}
        <div className="w-2/3 mb-5">
          <div className="text-lg">{item.city}</div>
          <div className="flex text-xs">{item.latitude}°N, {item.longitude}° W</div>
        </div>
      </div>

      {/* Weather info */}
      <div className="flex mb-10 text-sm">
        {item.temperatures.map((temperature, i) => (
          <div key={i} className="flex flex-col items-center mx-1">
            <p className="uppercase">{days[i]}</p>
            {
              isCelsius
              ? <p className="">{temperature}°</p>
              : <p className="">{celsiusToFahrenheit(temperature)}°</p>
            }
          </div>
        ))}
      </div>

      {/* Delete button */}
      <button onClick={handleDelete} className="my-1 absolute bottom-0">
        <TrashIcon />
      </button>
    </div>
  )
}

export default WeatherItem