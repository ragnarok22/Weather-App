const SearchCity = ({ city, setCity, loading }) => {
  return (
    <input
      type="text"
      className="py-1 px-4 rounded-lg w-full"
      placeholder="Enter a city name"
      value={city}
      onChange={e => setCity(e.target.value)}
      disabled={loading}
    />
  )
}

export default SearchCity