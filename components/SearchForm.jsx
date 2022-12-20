import SearchCity from "./SearchCity"
import SearchSubmit from "./SearchSubmit"

const SearchForm = () => {
  return (
    <form action="post">
      <SearchCity />
      <SearchSubmit />
    </form>
  )
}

export default SearchForm