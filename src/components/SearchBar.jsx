import React, { Fragment, useContext } from "react";
import { GlobalContext } from "./context/GlobalSettings";
import logo from "../assets/img/logo5.svg";

const SearchBar = (props) => {
  const { term, setTerm, setMode } = useContext(GlobalContext);

  const doSearch = (event) => {
    event.preventDefault();
    props.passSearch();
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 ps-5 d-flex align-items-center">
            <img
              src={logo}
              alt="logo"
              id="logo"
              onClick={() => {
                setMode("default");
                setTerm("");
              }}
              className="rounded-3"
            />
          </div>
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
