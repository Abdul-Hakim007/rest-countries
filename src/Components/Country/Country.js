import React from 'react';
import './country.css';

const Country = (props) => {
    // console.log(props)
    return (
        <div className='country'>
          <h2> Name: {props.country.name.common}</h2>
          <img src={props.country.flags.png} alt=""/>
          <h4>Capital: {props.country.capital}</h4>
          <p>Population:{props.country.population}</p> 
          <p>Area: {props.country.area}</p>
        </div>
    );
};

export default Country;