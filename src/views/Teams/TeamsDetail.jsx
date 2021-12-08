import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTeamById } from '../../services/teams.jsx'


export default function TeamsDetail() {
    const { id } = useParams()
    const [ team , setTeam ] = useState()
    const [ loading , setLoading ] = useState(true)
    
    useEffect(() => {
        getTeamById(id)
        .then((data) => setTeam(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, [id] )

    if (loading) return <h1>Loading team...</h1>
    return (
            <ul> {console.log(team)}
               <li>{team.name}</li>
               <li>{team.city}</li>
               <li>{team.state}</li>
               {team.players.map((player) => <li key={player.id}>{player.name}</li>)}
           
            </ul>
            
    )
}
