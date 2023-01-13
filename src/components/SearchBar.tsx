import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const { searchPlacesByQuery } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      console.log("debounce value", event.target.value);
      searchPlacesByQuery(event.target.value);
    }, 500);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        width: "330px",
        zIndex: 999,
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search places"
        aria-label="search places"
        onChange={onQueryChange}
      ></input>
      <SearchResults />
    </div>
  );
};
