(/**Service consuming the list of countries */)

import {useEffect, useState} from "react";
import axios from "axios";

const RestService = () => {
  const url = ''; ('http://localhost:9098/locations-management/v1/countries') /**url to end point here, couldn't access the jar file */
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => {
      setCountries(res.data.countries); 
    })
  }, [])

  return <div className="App">
    <h1>List of Countries with Ids</h1>
    <div>
      <ul>
        {countries.map(country => <li key={country.id}>{country}</li>)} {/**produce a list of country ids */}
      </ul>
    </div>
  </div>
};

export default RestService;