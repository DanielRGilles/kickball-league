import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTeamById } from '../../services/teams.jsx';
import './Teams.css';

export default function TeamsDetail() {
  const { id } = useParams();
  const [team, setTeam] = useState();
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    getTeamById(id)
      .then((data) => setTeam(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h1>Loading team...</h1>;
  return (
    <ul> 
      <li>{team.name}</li>
      <li>{team.city + ' ' + team.state}</li>
      {team.players.map((player) => <Link key={player.id} to={`/players/${player.id}`}> <li className='player' key={player.id} >{player.position + ' : ' + player.name}</li></Link>)}
           
    </ul>
            
  );
}
