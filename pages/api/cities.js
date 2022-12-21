// return a list of cities with their latitude and longitude
import axios from "axios"

export default async function handler(req, res) {
  const city = req.query.city
  const count = req.query.count || 3

  if (city) {
    try {
      const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search`, {
        params: {
          name: city, count
        }
      })
      if (response.data.results) {
        const results = response.data.results.map(item => {
          return {
            "name": item.name,
            "latitude": item.latitude,
            "longitude": item.longitude
          }
        })
        res.status(200).json(results)
      }
      res.status(200).json({})
    } catch (e) {
      res.status(500).json(e)
    }
  } else {
    res.status(400).json({
      message: "You should provide a city"
    })
  }
}