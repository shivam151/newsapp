import React from 'react'
import loader from './loader.gif'

const Spinner = ()=> {
    return (
        <div>
            <div className="container text-center">
            <img src={loader} alt="loader"></img>
            </div>
        </div>
    )
}
export default Spinner;