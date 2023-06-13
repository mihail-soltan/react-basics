import "./Post.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { convertDate, getOneTeam, getPlayers, editTeam, toggleTeamActivity } from '../services/api-service';
import Player from "./Player";
import AddPlayer from "./AddPlayer";

export default function TeamDetails() {

    const params = useParams()
    const [team, setTeam] = useState({})
    const [editedTeam, setEditedTeam] = useState({})
    const [editMode, setEditMode] = useState(false)
    const [loading, setLoading] = useState(true)
    const [players, setPlayers] = useState({})

    const getTeam = async () => {
        const res = await getOneTeam(params.teamId)
        setTeam(res.data)
        setEditedTeam(res.data)
    }

    const onGetPlayers = async () => {
        const res = await getPlayers();
        setPlayers(res.data.filter((player) => player.team._id === params.teamId))
        setLoading(false)
    }

    const onConfirmEditTeam = async (teamId, teamBody) => {
        const { name, updatedBy } = teamBody
        const body = { name, updatedBy }
        setEditMode(false);
        const res = await editTeam(teamId, body)
        getTeam()
        return res
    }

    const onToggleTeamActivity = async (teamId, active) => {
        const body = { active: !active, updatedBy: "Sloth" }
        onConfirmEditTeam(teamId, body)
        const res = await toggleTeamActivity(teamId, body)
        return res
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setEditedTeam((prev) => ({ ...prev, [name]: value }))
    }
    useEffect(() => {
        getTeam()
        onGetPlayers()
    }, [])
    return (<div className="team-details">
        <AddPlayer getPlayers={onGetPlayers} />
        {Object.keys(team).length ?
            <div style={{ display: "flex" }}>
                <div className="post-card">
                    <h2 className="post-card-title">Team Name: {team.name} </h2>
                    <p className="post-card-date">Created At: {convertDate(team.createdAt)}</p>
                    <p className="post-card-date">Updated At: {convertDate(team.updatedAt)}</p>
                    <p className="post-card-content">Created By: {team.createdBy || "---"}</p>
                    <p className="post-card-content">Updated By: {team.updatedBy || "---"}</p>
                    <p className="post-card-content">Active: <strong style={{ color: team.active ? "green" : "red" }}>{team.active ? "Yes" : "No"}</strong></p>
                    <button onClick={() => setEditMode(true)} className="btn">Edit Team</button>
                    <button className="btn" onClick={() => onToggleTeamActivity(params.teamId, team.active)}>Toggle Team Activity</button>
                </div>
                <div style={{ display: editMode ? "block" : "none" }} className="edit-container">
                    <h2 className="post-card-title">Team Name </h2>
                    <input type="text" placeholder="Team name" name="name" value={editedTeam.name} onChange={handleChange} />
                    <h2 className="post-card-content">Updated By</h2>
                    <input style={{ marginBottom: "5px" }} type="text" name="updatedBy" placeholder="Created by" value={editedTeam.updatedBy} onChange={handleChange} />
                    <div>
                        <button onClick={() => onConfirmEditTeam(params.teamId, editedTeam)} className="btn">Confirm</button>
                    </div>
                </div>
            </div>
            : <ScaleLoader />}
        <div className="player-container">
            {
                !loading ? players.map((player) => <Player key={player._id} player={player} />) : <ScaleLoader />
            }
        </div>
    </div>)
}