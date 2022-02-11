import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import React  from 'react';

function App() {
   //creating IP state
   const [ip, setIP] = useState('');
   const [city, setCity] = useState('');
   const [country, setCountry] = useState('');
   
    //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    console.log(res);
    setIP(res.data.IPv4);
    setCity(res.data.city);
    setCountry(res.data.country_name);
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData();

  }, [])

  return (
    <div className="App">
      <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
      <h2>Your City</h2>
      <h4>{city}</h4>
      <h2>Your City</h2>
      <h4>{country}</h4>
    </div>
  );
}

export default App;
