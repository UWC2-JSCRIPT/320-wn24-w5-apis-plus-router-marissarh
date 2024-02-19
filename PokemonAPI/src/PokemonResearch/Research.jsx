import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Research.css'
import PokemonDetails from '../PokemonDetails/PokemonDetails';



 function Research(){
        const {id} = useParams();
        const [pokemonData, setPokemonData] = useState(null);
        const [error, setError] = useState(null);

        useEffect(()=>{
          const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                if (!response.ok){
                    throw new Error('Pokemon not found');
                }
                const data = await response.json();
                setPokemonData(data);
                setError(null);
              } catch(error){
                    console.error('Error fetching Pokemon:', error);
                    setError('Pokemon not found');
                }}; 
                fetchPokemon();
              }, [id]);
                

        return (
          <>
          <div>
            {error ? ( 
            <p>{error}</p>) : (
         <div className='stats' >
          {pokemonData  && <PokemonDetails pokemon={pokemonData}/>}     
         </div>
            )}
            </div>
         </>
        );
      
            }
export default Research 

