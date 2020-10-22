import React from 'react';
import './SearchBox.css'


export const SearchBox = ({ placeholder, handleChange }) => (
    <input className='search'
    type='search' 
    placeholder={placeholder}
    onChange = {handleChange}/>
)



//functional components dont have access to state unlike class cmponents (app.js)
//dont have access to state because dont have access to constructor
// which is a class method on component we extend class from 
// dont have internal state or lifecycle methods
//functional component renders get props and returns html