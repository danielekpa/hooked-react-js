import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  // const navigate = useNavigate();

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    if (!searchValue || searchValue.length <= 2)
      return alert("Please enter a movie to search for");

    console.log(searchValue.length);
    navigate("/searched/" + searchValue);
    resetInputField();
  };
  return (
    <div>
      <form className="search" onSubmit={callSearchFunction}>
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    </div>
  );
}

export default Search;
