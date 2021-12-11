import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createTeam } from '../../services/teams.jsx';

export default function AddTeam() {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await createTeam({ name, city, state });
    history.push(`/teams/${resp[0].id}`);
  };
  return (
    <>
      <fieldset>
        <legend>Add Team</legend>     
        <form onSubmit={handleSubmit}>
          <label htmlFor='name' >Name:</label>
          <input id='name' name='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor='city' >city:</label>
          <input id='city' name='city' type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <label htmlFor='state' >state:</label>
          <input id='state' name='state' type="text" value={state} onChange={(e) => setState(e.target.value)} />
           
          <button type='submit'>Add Team </button>
        </form>
      </fieldset>   
    </>
  );
}
