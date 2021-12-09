import React from 'react'
import { useState, useEffect } from 'react'
import { getPlayers } from '../../services/players.jsx'
import { Link } from 'react-router-dom'


export default function Players() {
    const [ players, setPlayers ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getPlayers()
        .then((data) => setPlayers(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, [] )
    
    if (loading) return <h1>Loading players...</h1>
    return (
        <ul>
            {players.map((player) => (
                <li key={player.id}><Link to={`/players/${player.id}`}>{player.name}</Link></li>
            ))}
            {console.log(players)}
        </ul>
    )
}
