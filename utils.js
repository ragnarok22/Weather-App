import { DayFogIcon, DayOvercastIcon, DaySunnyIcon, NAIcon, RainIcon, ShowersIcon, SnowWindIcon, ThunderstormIcon } from "./components/icons";

export function addDays(date, number) {
  // given a date, added the numbers in days and returns a new date
  const newDate = new Date(date);
  return new Date(newDate.setDate(date.getDate() + number));
}

export function parseDate(date) {
  // parse the date in yyyy-mm-dd
  return date.toISOString().split('T')[0]
}

export function getDay(date) {
  // returns the day of the week. Just the first three letters
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return week[date.getDay()].substring(0, 3)
}

export function getWheaterIcon (weathercode, color) {
  // return an icon depending on the weathercode
  switch (weathercode) {
    case 0:
      // clear sky
      return <DaySunnyIcon className={color} />
    case 1:
    case 2:
    case 3:
      // Mainly clear, partly cloudy, and overcast
      return <DayOvercastIcon className={color} />
    case 45:
    case 48:
      // Fog and depositing rime fog
      return <DayFogIcon className={color} />
    case 51:
    case 53:
    case 55:
      // Drizzle: Light, moderate, and dense intensity
      return <RainIcon className={color} />
    case 56:
    case 57:
      // Freezing Drizzle: Light and dense intensity
      return <SnowWindIcon className={color} />
    case 61:
    case 63:
    case 65:
      // Rain: Slight, moderate and heavy intensity
      return <RainIcon className={color} />
    case 66:
    case 67:
      // Freezing Rain: Light and heavy intensity
      return <RainIcon className={color} />
    case 71:
    case 73:
    case 75:
      // Snow fall: Slight, moderate, and heavy intensity
      return <SnowWindIcon className={color} />
    case 77:
      // Snow grains
      return <SnowWindIcon className={color} />
    case 80:
    case 81:
    case 82:
      // Rain showers: Slight, moderate, and violent
      return <RainIcon className={color} />
    case 85:
    case 86:
      // Snow showers slight and heavy
      return <ShowersIcon className={color} />
    case 95:
      // Thunderstorm: Slight or moderate
      return <ThunderstormIcon className={color} />
    case 96:
    case 99:
      // Thunderstorm with slight and heavy hail
      return <ThunderstormIcon className={color} />
    default:
      return <NAIcon className={color} />
  }
}

export function celsiusToFahrenheit(temperature) {
  return parseFloat(((temperature * 9/5) + 32).toFixed(2));
}