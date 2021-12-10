import React from 'react'
import { useState, useEffect } from 'react'
import { getTeams, deleteTeamById } from '../../services/teams.jsx'
import { Link } from 'react-router-dom'

export default function Teams() {
    const [ teams, setTeams ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const loadTeams = async () => {
        setLoading(true);
        const resp = await getTeams();
        setTeams(resp);
        setLoading(false);
      };

    useEffect(() => {
        loadTeams();
    }, [] )

    const handleDelete = async ({ id, name }) => {
            await  deleteTeamById(id);
            alert(`You have deleted ${name} from the team list`)
            await loadTeams();
        }
           
            
    
    
    if (loading) return <h1>Loading teams...</h1>
    return (
        <>
        <button><Link to='/teams/new' >Add a Team</Link></button>
        <ul>
            {teams.map((team) => (
                <li key={team.id}><Link to={`/teams/${team.id}`}>{team.name}</Link><button ><Link to={`/teams/${team.id}/edit`}> Edit Team</Link> </button><button id={team.id} onClick={() => handleDelete({ id: team.id, name: team.name })}>Delete Team</button></li>
            ))}
            
        </ul>
        </>
    )
}
