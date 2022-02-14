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

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import React  from 'react';
import { MyMap } from './MyMap';
//import { Map, Marker } from "pigeon-maps"



function App() {
  const [userIP, setUserIP] = useState();
  const [userLocation, setUserLocation] = useState();

  useEffect(() => {
    const fetchIP = async () => {
      await axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_KEY}`
        )
        .then((response) => {
          console.log(response.data)
          setUserIP(response.data.ip);
          setUserLocation(response.data.location);
        })
        .catch((error) => console.log(error));
    };
    fetchIP();
    // console.log(userIP)
    console.log(userLocation)
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Your location is: {userIP}
        </p>
        <p>
        {userLocation ? (
          <>
            <h3>Your location is: {userLocation.city}</h3>
            <h3>Your region is: {userLocation.region}</h3>
            <h3>Your country is: {userLocation.country}</h3>
            <h3>Your latitude is: {userLocation.lat}</h3>
            <h3>Your longitude is: {userLocation.lng}</h3>
          </>
        ) : (
          "Loading..."
        )}
        </p>
        <p>Maps Location</p>
          <MyMap />    
          <br>
            
          </br>   
      </header>
    </div>
  );
}

export default App;

