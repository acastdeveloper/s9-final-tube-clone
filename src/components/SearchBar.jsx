import React, { Fragment, useContext } from "react";
import { GlobalContext } from "./context/GlobalSettings";

const SearchBar = (props) => {
  const { term, setTerm } = useContext(GlobalContext);

  const doSearch = (event) => {
    event.preventDefault();
    props.passSearch();
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <form className="w-100 form-group" onSubmit={doSearch}>
              <input
                type="search"
                className="form-control rounded-1"
                placeholder="Search..."
                aria-label="Search"
                value={term}
                onChange={(event) => {
                  event.preventDefault();
                  setTerm(event.target.value);
                }}
              />
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
