import React from 'react'
import './Home.css'

export default function Home({pokemon}) {
  return (
    <>
    <div className='title'>Browse through Pokemon List</div>
    <div className='pokemon-data'>
        {pokemon.map(p=>(
            <div key={p}>{p}</div>
        ))}

    </div>
    </>
  )
}
