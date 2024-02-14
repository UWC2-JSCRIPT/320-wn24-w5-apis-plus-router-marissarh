import {React, Component} from 'react'
import Research from '../PokemonResearch/Research'


class Pages extends Component{
    render(){
        return(
            <>
            <div>
                <h2>Pages</h2>
            </div>
            <button>Home</button>
            <button>Research Pokemon</button>
            </>
        )
    }
}
{/*export default function ({gotoNextPage, gotoPreviousPage}) {
  return (
    <>
    <div>
        {gotoPreviousPage && <button onClick={gotoPreviousPage}>Previous</button>}
       {gotoNextPage} <button onClick={gotoNextPage}>Next</button>
    </div>
    </>
  )}*/}
export default Pages