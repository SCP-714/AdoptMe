const SearchParams = () => {
  const location = "Nashville, TN";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input id="location" value={location} placeholder="location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;