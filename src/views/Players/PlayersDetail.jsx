import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getPlayerById } from '../../services/players'

export default function PlayersDetail() {
    const { id } = useParams()
    const [ player, setPlayer ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getPlayerById(id)
        .then((data) => setPlayer(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, [id] )
    if (loading) return <h1>Loading player...</h1>
    return (
        <div>
            <div>{player.name}</div>
            <div>{player.position}</div>
            
        </div>
    )
}
