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
  const onSelectedCountry = (country: string) => {
    console.log(country);
  };

  return (
    <div>
      <ListGroup
        countries={countries}
        heading={countryHeading}
        onSelectedCountry={onSelectedCountry}
      />
    </div>
  );
}

export default App;
