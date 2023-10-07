import ListGroup from "./components/ListGroup";

function App() {
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

  const countryHeading = "Country List";

  return (
    <div>
      <ListGroup countries={countries} heading={countryHeading} />
    </div>
  );
}

export default App;
