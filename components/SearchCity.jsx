const SearchCity = ({ city, setCity }) => {
  return (
    <input
      type="text"
      className="py-1 px-4 rounded-lg w-full"
      placeholder="Enter a city name"
      value={city}
      onChange={e => setCity(e.target.value)}
    />
  )
}

export default SearchCity