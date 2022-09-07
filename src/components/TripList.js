import React, { useState } from 'react'
import './TripList.css'
import {useFetch} from '../hooks/useFetch'

export default function TripList() { 
    
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const {data: trips, isPending, error } = useFetch(url, {type: 'Get'})   
    
    

    return (
    <div className='trip-list'>
        <h2>Trip List</h2>
        {isPending && <div>Loading Trips...</div>}
        {error && <div>{error}</div>}
        <ul>
            {trips && trips.map(trip =>(
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
                
            ))}
        </ul>
        <div>
            <button onClick={() => setUrl('http://localhost:3000/trips?location=Europe')}>
                European Trips
            </button>
            <button onClick={() => setUrl('http://localhost:3000/trips?location=America')}>
                American Trips
            </button>
        </div>
    </div>
  )
}
