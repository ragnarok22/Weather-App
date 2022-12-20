import SearchCity from "./SearchCity"
import SearchSubmit from "./SearchSubmit"

const SearchForm = () => {
  return (
    <form className="flex w-1/2 justify-around">
      <div className="w-2/3 mr-5">
      <SearchCity />
      </div>
      <div className="w-1/3">
      <SearchSubmit />
      </div>
    </form>
  )
}

export default SearchForm