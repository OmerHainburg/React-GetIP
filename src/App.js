// import './App.css';
// import axios from 'axios';
// import {useState,useEffect} from 'react';
// import React  from 'react';

// function App() {
//    //creating IP state
//    const [ip, setIP] = useState('');
//    const [city, setCity] = useState('');
//    const [country, setCountry] = useState('');
   
//     //creating function to load ip address from the API
//   const getData = async () => {
//     const res = await axios.get('https://geolocation-db.com/json/');
//     console.log(res);
//     setIP(res.data.IPv4);
//     setCity(res.data.city);
//     setCountry(res.data.country_name);
//   }
  
//   useEffect( () => {
//     //passing getData method to the lifecycle method
//     getData();

//   }, [])

//   return (
//     <div className="App">
//       <h2>Your IP Address is</h2>
//       <h4>{ip}</h4>
//       <h2>Your City</h2>
//       <h4>{city}</h4>
//       <h2>Your City</h2>
//       <h4>{country}</h4>
//     </div>
//   );
// }

// export default App;

import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import MyMap from './MyMap';
import CountryInfo from './CountryInfo';



function App() {
  const [userIP, setUserIP] = useState();
  const [userLocation, setUserLocation] = useState({
    city: "Loading",
    country: "Loading",
    geonameId: 0,
    lat: 50.2069,
    lng: 9.23418,
    postalCode: "Loading",
    region: "Loading",
    timezone: "Loading"
  });

  useEffect(() => {
    const fetchIP = async () => {
      await axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_KEY}`
        )
        .then((response) => {
          console.log(response);
          setUserIP(response.data.ip);
          setUserLocation(response.data.location);
        })
        .catch((error) => console.log(error));
    };
    fetchIP();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <p>
        Your IP is: {userIP}
        </p>
        <p>
        {userLocation ? (
          <>
          <ol>
            <li>Your location is: {userLocation.city}</li>
            <li>Your region is: {userLocation.region}</li>
            <li>Your country is: {userLocation.country}</li>
            <li>Your latitude is: {userLocation.lat}</li>
            <li>Your longitude is: {userLocation.lng}</li>
          </ol>
          </>
        ) : (
          "Loading..."
        )}
        </p>

        <MyMap props={userLocation}/>
        <CountryInfo  userCountry={userLocation.country}/>
      </header>
    </div>
  );
}

export default App;