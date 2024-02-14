import {React, useState, useEffect, Component } from 'react'
import PropTypes from 'prop-types'



 export default function Research({Pokemon}){
    
    const [results, setResults] = useState(null);
    
    const [isLoading, setIsLoading]= useState(true);
    
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then( res=> res.json())
        .then(data => {setResults(data);
        setIsLoading(false);
    })}, [])

    console.log(results);
    if (isLoading) {
        return(<h1>Loading...</h1>)
    }
    return(
        <>
    <h1>Pokemon:{results.Pokemon}</h1>
    </>
    )
    }

 Research.propTypes={
    Pokemon: PropTypes.string
 }
/*function Research() {
    
    const [pokemon, setPokemon] = useState([])
    const [homePageUrl, setHomePageUrl] =useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] =useState()
    const [previousPageUrl, setPreviousPageUrl] =useState()
  
  
    */

 
