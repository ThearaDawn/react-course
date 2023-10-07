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

  countries = [];

  return (
    <>
      <h1>Country List</h1>
      {countries.length === 0 && <p>No Country Found</p>}
      <ul className="list-group">
        {countries.map((country, index) => (
          <li className="list-group-item" key={index}>
            {country}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
