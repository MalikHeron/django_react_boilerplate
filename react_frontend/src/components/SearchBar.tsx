export const SearchBar = ({ placeholder, searchText, handleSearchChange, handleClearSearch }) => {
  return (
    <div className="relative mt-4 w-full sm:w-96">
      <input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={handleSearchChange}
        className="px-4 py-2 pl-10 w-full rounded-lg border bg-black-lighter border-black-lightest focus:outline-none focus:ring-1 focus:ring-verdigris"
      />
      <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      {searchText && (
        <i
          onClick={handleClearSearch}
          className="bi bi-x-circle cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        ></i>
      )}
    </div>
  );
}