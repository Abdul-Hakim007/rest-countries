import React, { useEffect, useState } from 'react';
// import { Spinner } from 'react-bootstrap';
import Country from '../Country/Country';
import Search from '../Search/Search';
// import Search from '../Search/Search';
import './Countries.css';

const Countries = () => {
  const [countires,setCountires] =useState([]);
  useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountires(data))
  },[])
  return (

// {
  // countries.length===0 ?  <Spinner animation="border" variant="dark" />
//  :
  <div>
  <h2> Hello world!! </h2>
  <h4>Countries around the world: {countires.length}</h4>
  <Search/>
 
 <div className='countries-container'>
 {
   countires.map(country=> <Country  
     key={country.capital}
     country = {country}
     />)
  }
 </div>
 </div>
// }
   
  );
};

export default Countries;
