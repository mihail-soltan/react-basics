import "./Post.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { convertDate, getOneTeam, getPlayers } from '../services/api-service';
import Player from "./Player";
import AddPlayer from "./AddPlayer";

export default function TeamDetails() {

    const params = useParams()
    const [team, setTeam] = useState({})
    const [loading, setLoading] = useState(true)
    const [players, setPlayers] = useState({})

    const getTeam = async () => {
        const res = await getOneTeam(params.teamId)
        setTeam(res.data)
    }

    const onGetPlayers = async () => {
        const res = await getPlayers();
        setPlayers(res.data.filter((player) => player.team._id === params.teamId))
        setLoading(false)
    }
    useEffect(() => {
        getTeam()
        onGetPlayers()
    }, [])
    return (<div className="team-details">
        <AddPlayer getPlayers={onGetPlayers}/>
        {Object.keys(team).length ?
            <div className="post-card">
                <h2 className="post-card-title">Team Name: {team.name} </h2>
                <p className="post-card-date">Created At: {convertDate(team.createdAt)}</p>
                <p className="post-card-date">Updated At: {convertDate(team.updatedAt)}</p>
                <p className="post-card-content">Created By: {team.createdBy || "---"}</p>
            </div>
            : <ScaleLoader />}
        <div className="player-container">
            {
                !loading ? players.map((player) => <Player key={player._id} player={player} />) : <ScaleLoader />
            }
        </div>
    </div>)
}