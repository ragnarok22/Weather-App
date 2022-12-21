const SearchSubmit = ({ loading }) => {
  return (
    <button type="submit" className="bg-blue-500 py-1 w-full text-gray-50 rounded-full" disabled={loading}>
      {
        loading
        ? "loading"
        : "submit"
      }
    </button>
  )
}

export default SearchSubmit