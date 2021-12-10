import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { updateTeamById, getTeamById } from'../../services/teams.jsx'

export default function EditTeam() {
    const [ name, setName ] = useState()
    const [ city, setCity ] = useState()
    const [ state, setState ] = useState()
    const history = useHistory()
    const { id } = useParams();
    const [ team, setTeam ] = useState();
    const [ loading, setLoading ] = useState(true);
    
    const loadTeam = async () => {
        setLoading(true);
        const resp = await getTeamById(id);
        setTeam(resp);
        setLoading(false);
      };
    useEffect(() => {
         loadTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    

    async function handleSubmit(e) {
        e.preventDefault()
        const resp = await updateTeamById(id, { name, city, state })
        history.push(`/teams/${resp[0].id}`)
    }

    if (loading) return <h1>Loading teams...</h1>
    return (
        <>
         <fieldset>
        <legend>Add Team</legend>     
        <form onSubmit={handleSubmit}>
            <label htmlFor='name' >Name:</label>
            <input id='name' placeholder={team.name} name='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor='city' >city:</label>
            <input id='city' placeholder={team.city} name='city' type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <label htmlFor='state' >state:</label>
            <input id='state' placeholder={team.state} name='state' type="text" value={state} onChange={(e) => setState(e.target.value)} />
           
            <button type='submit'>Edit Team </button>
        </form>
        </fieldset>   
        </>
    )
}
