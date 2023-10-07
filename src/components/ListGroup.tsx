import { useState } from "react";

function ListGroup() {
  let countries = [
    "Cambodia",
    "Thailand",
    "Vietnam",
    "Laos",
    "Myanmar",
    "Malaysia",
    "Singapore",
    "Indonesia",
    "Philippines",
    "Brunei",
    "East Timor",
  ];

  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Country List</h1>
      {countries.length === 0 && <p>No Country Found</p>}
      <ul className="list-group">
        {countries.map(
          (
            country, // <-- map() is a function that returns an array
            index
          ) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={country}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {country}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
