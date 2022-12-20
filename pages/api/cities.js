// return a list of cities with their latitude and longitude
import axios from "axios"

export default async function handler(req, res) {
  const city = req.query.city
  const count = req.query.count || 3

  if (city) {
    const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=${count}`)
    console.log(response.data.results)
    const results = response.data.results.map(item => {
      return {
        "name": item.name,
        "latitude": item.latitude,
        "longitude": item.longitude
      }
    })
    res.status(200).json(results)
  } else {
    res.status(400).json({
      message: "You should provide a city"
    })
  }
}