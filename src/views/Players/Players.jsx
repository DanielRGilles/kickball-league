import React from 'react'
import { useState, useEffect } from 'react'
import { getPlayers, deletePlayerById } from '../../services/players.jsx'
import { Link } from 'react-router-dom'


export default function Players() {
    const [ players, setPlayers ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const loadPlayers = async () => {
        getPlayers()
        .then((data) => setPlayers(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }

    useEffect(() => {
       loadPlayers();
    }, [] )

    const handleDelete = async ({ id, name }) => {
        await  deletePlayerById(id);
        alert(`You have deleted ${name} from the player list`)
        await loadPlayers();
    }
    
    if (loading) return <h1>Loading players...</h1>
    return (
        <>
        <button><Link to='/players/new'>Add a Player</Link></button>
        <ul>
            {players.map((player) => (
                <li key={player.id}><Link to={`/players/${player.id}`}>{player.name}</Link><button ><Link to={`/players/${player.id}/edit`}> Edit Player</Link> </button><button id={player.id} onClick={() => handleDelete({ id: player.id, name: player.name })}>Delete Player</button></li>
            ))}
            
        </ul>
        </>
    )
}
