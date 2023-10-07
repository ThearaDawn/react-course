import { MouseEvent } from "react";

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

  const handleClick = (event: MouseEvent) => console.log(event.target);
  return (
    <>
      <h1>Country List</h1>
      {countries.length === 0 && <p>No Country Found</p>}
      <ul className="list-group">
        {countries.map(
          (
            country // <-- map() is a function that returns an array
          ) => (
            <li className="list-group-item" key={country} onClick={handleClick}>
              {country}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
