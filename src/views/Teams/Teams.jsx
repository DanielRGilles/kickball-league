import React from 'react'
import { useState, useEffect } from 'react'
import { getTeams } from '../../services/teams.jsx'
import { Link } from 'react-router-dom'

export default function Teams() {
    const [ teams, setTeams ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getTeams()
        .then((data) => setTeams(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, [] )
    
    if (loading) return <h1>Loading teams...</h1>
    return (
        <ul>
            {teams.map((team) => (
                <li key={team.id}><Link to={`/teams/${team.id}`}>{team.name}</Link></li>
            ))}
            {console.log(teams)}
        </ul>
    )
}
