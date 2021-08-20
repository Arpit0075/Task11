//task-1 use async await to display data for europes countries who speak spanish language
async function fetchData() {
  try {
    const data = await fetch("https://restcountries.eu/rest/v2/lang/es");
    const countries = await data.json();
    let filteredCountries = countries.filter((country) => {
      return country.region === "Europe";
    });
    console.log(filteredCountries);
  } catch (err) {
    console.log("error:", err);
  }
}
fetchData();

//task-2
// get data for european countries
const europe = async () => {
  try {
    const data = await fetch("https://restcountries.eu/rest/v2/region/europe");
    const countries = await data.json();
    //console.log(countries);
    return countries;
  } catch (err) {
    console.log(err);
  }
};
europe();

//get data for asian countries
const asia = async () => {
  const data = await fetch("https://restcountries.eu/rest/v2/region/Asia");
  const countries = await data.json();
  //console.log(countries);
  return countries;
};
asia();

//combine two arrays from both regions
const allPromises = async () => {
  const countries = await Promise.all([europe(), asia()]);
  console.log(countries[0].concat(countries[1]));
};
allPromises();
