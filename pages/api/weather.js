// get the weather of a city
import axios from "axios"
import { addDays, parseDate } from "../../utils"

export default async function handler(req, res) {
  const { latitude, longitude } = req.query
  let { temperature_unit } = req.query
  temperature_unit = temperature_unit || "celsius"

  if (latitude && longitude && (temperature_unit === "celsius" || temperature_unit === "fahrenheit")) {
    try{
      const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude,
          longitude,
          temperature_unit,
          daily: "temperature_2m_max,temperature_2m_min",
          current_weather: true,
          timezone: "America/Los_Angeles",
          start_date: parseDate(new Date()),
          end_date: parseDate(addDays(new Date(), 4)) // get the max and the min of the next four days
        }
      })

      const results = {
        latitude,
        longitude,
        weathercode: response.data.current_weather.weathercode,
        temperatures: response.data.daily.temperature_2m_max.map((item, index) => {
          // get the average temperature of the day + the next days
          return parseInt((item + response.data.daily.temperature_2m_min[index]) / 2)
        })
      }

      res.status(200).json(results)
    } catch (e) {
      res.status(500).json(e)
    }
  } else {
    res.status(400).json({
      message: "You should provide latitude and longitude"
    })
  }
}
