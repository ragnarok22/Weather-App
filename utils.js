export function addDays(date, number) {
  const newDate = new Date(date);
  return new Date(newDate.setDate(date.getDate() + number));
}

export function parseDate(date) {
  // parse the date in yyyy-mm-dd
  return date.toISOString().split('T')[0]
}

export function getDay(date) {
  // returns the day of the week
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return week[date.getDay()].substring(0, 3)
}