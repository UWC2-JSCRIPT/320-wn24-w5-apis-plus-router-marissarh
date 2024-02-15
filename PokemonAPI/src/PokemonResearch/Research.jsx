import {React, useState, useEffect } from 'react'
import PropTypes from 'prop-types'



 function Research(){
    const [results, setResults]= useState();
    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => response.json())
        .then((data)=> {
        console.log(data);
        setResults(data);
    })
        
    }
    return(
        <>
        <div>Pokemon List</div>
        <button onClick={getPokemon}>Research Pokemon</button>
        <br/>
        <pre>{JSON.stringify(results, null, 2)}</pre>
        </>
    )
    }
 
export default Research 

/*function Research() {
    
    const [pokemon, setPokemon] = useState([])
    const [homePageUrl, setHomePageUrl] =useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] =useState()
    const [previousPageUrl, setPreviousPageUrl] =useState()
  
  
    */
 
