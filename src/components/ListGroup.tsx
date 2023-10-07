import { useState } from "react";

interface Props {
  countries: string[];
  heading: string;
  onSelectedCountry: (country: string) => void;
}

function ListGroup({ countries, heading, onSelectedCountry }: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
                onSelectedCountry(country);
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
