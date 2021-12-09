import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AddTeam() {
    const [ name, setName ] = useState()
    const [ city, setCity ] = useState()
    const [ state, setState ] = useState()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await createTeam( { name, city, state});
         history.push(`/teams/${resp[0].id}`)
    }
    return (
        <>
         <fieldset>
        <legend>Add Team</legend>     
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input id='name' name='name' type="text" />
            <label>City</label>
            <input type="text" />
            <label>State</label>
            <input type="text" />
            <button type='submit'>Add Team </button>
        </form>
        </fieldset>   
        </>
    )
}
