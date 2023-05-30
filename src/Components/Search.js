/* 
 1) do nothing when the page is loaded.
 
 2) when you click on the search bar call the api and render the first object which will be
 returned by the api.
 
 3) When the user types send the api the data from the search bar and also add a debonuce of 1s
 
 4) wait for the api to return

 5) When the api returns the data return it to below of the search bar

 What all things I know
 useState
 useEffect
 setTimeout
------------------------------------------------------
  - set a state for the search bar to track the letter in the search bar
  - only set the request when you click the search bar and firstly return the data from the api
  - then store the data from the api to a searchList state and render it below the search bar
  - only activate the searchList when you click the searchbar and deacitvate when you select one 
  data or click outside of the search list bar
  

 */

import React, { useEffect, useState } from "react";

import { GEO_LOC_API, GEO_LOC_API_URL } from "./sampleapi";
import "../sass/components/search.scss";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchList, setSearchlist] = useState([
    {
      name: "Loading..",
    },
  ]);
  const [showSearch, setShowSearch] = useState(false);
  const loadOptions = async () => {
    try {
      const response = await fetch(
        search ? `${GEO_LOC_API_URL}?namePrefix=${search}` : GEO_LOC_API_URL,
        GEO_LOC_API
      );
      const result = await response.json();
      //console.log(result.data)
      if (result.data.length === 0) {
        result.data = [{ name: "Not Found" }];
      }
      setSearchlist(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (showSearch) {
      const getData = setTimeout(() => {
        loadOptions();
      }, 500);
      return () => {
        clearTimeout(getData);
        setSearchlist([
          {
            name: "Loading...",
          },
        ]);
      };
    }
    // else if(document.activeElement !== isInputFocused.current) {
    //   setShowSearch(false)
    // }
  }, [search, showSearch]);
  const navigate = useNavigate();
  const changePath = (e)=> {
    
    e.preventDefault();
    navigate('/cities')
  }

  function searchListItemClicked() {
    // this.nextPath('/cities')
    console.log("monkey");
  }
  const isActive = showSearch;

  const handleClick = (e) => {
    if (
      e.target !== document.getElementById("searchbar") &&
      e.target !== document.getElementsByClassName("search-list-item")
    ) {
      setShowSearch(false);
    }
  };
  useEffect(() => {
    if (showSearch) {
      window.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [searchList]);

  return (
    <div className="search-items">
      <input
        type="text"
        id="searchbar"
        value={search}
        placeholder="Search for cities"
        onChange={(e) => setSearch(e.target.value)}
        onFocus={(e) => {
          setShowSearch(true);
          changePath(e)
        }}
        className="searchBar"
      />
      <ul className={`search-list ${isActive ? "active" : ""}`}>
        {showSearch
          ? searchList.map((places, index) => (
              <li
                key={index}
                className={`search-list-item ${!places.country?"not-data":""}`} 
                onClick={() => searchListItemClicked()}
              >
                <p>
                  {places.country
                    ? places.name + ", " + places.country
                    : places.name}
                </p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
