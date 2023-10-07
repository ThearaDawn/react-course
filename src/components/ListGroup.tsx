function ListGroup() {
  const countries = [
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

  return (
    <>
      <h1>Country List</h1>
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
