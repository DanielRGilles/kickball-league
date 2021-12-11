import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { updatePlayerById } from'../../services/players.jsx'
import { getTeams } from '../../services/teams.jsx'

export default function EditPlayer() {
    const [ name, setName ] = useState()
    const [ position, setPosition ] = useState()
    const [ teamId, setTeamId ] = useState()
    const history = useHistory();
    const [ teams, setTeams ] = useState([]);
    const { id } = useParams();

    const loadTeams = async () => {
        const resp = await getTeams();
        setTeams(resp);
      };

    useEffect( () => {
            loadTeams();
        }, [] )

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await updatePlayerById( id,  { name, position, teamId});
         history.push(`/players/${resp[0].id}`)
    }
    return (
        <>
         <fieldset>
        <legend>Edit Player </legend>     
        <form onSubmit={handleSubmit}>
            <label htmlFor='name' >Name:</label>
            <input id='name' name='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor='position' >position:</label>
            <input id='position' name='position' type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
            <label htmlFor='teamId' >teamId:</label>
            <select id='teamId' name='teamId' onChange={(e) => setTeamId(e.target.value)} >
                    {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
            </select>
            
           
            <button type='submit'>Edit Player </button>
        </form>
        </fieldset>   
        </>
    )
}
