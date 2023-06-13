import "./PlayerDetails.css";
import "./Post.css"
import ScaleLoader from "react-spinners/ScaleLoader";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { convertDate, convertDoB, getOnePlayer, editPlayer, togglePlayerActivity } from '../services/api-service';


export default function PlayerDetails() {

    const params = useParams()
    const [player, setPlayer] = useState({})
    const [editedPlayer, setEditedPlayer] = useState({})
    const [editMode, setEditMode] = useState(false)
    const [loading, setLoading] = useState(true)

    const getPlayer = async () => {
        const res = await getOnePlayer(params.playerId)
        console.log(res.data.dateOfBirth)
        setPlayer(res.data)
        setEditedPlayer(res.data)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setEditedPlayer((prev) => ({ ...prev, [name]: value }))
    }
    const onConfirmEditPlayer = async (playerId, playerBody) => {
        const { firstName, lastName, dateOfBirth, updatedBy } = playerBody
        const body = { firstName, lastName, dateOfBirth: new Date(dateOfBirth), updatedBy }
        setEditMode(false);
        const res = await editPlayer(playerId, body)
        getPlayer()
        return res
    }
    const onTogglePlayerActivity = async (playerId, player) => {
        const body = { active: !player.active, updatedBy: "Sloth", dateOfBirth: new Date(player.dateOfBirth) }
        onConfirmEditPlayer(playerId, body)
        const res = await togglePlayerActivity(playerId, body)
        return res
    }
    useEffect(() => {
        getPlayer()
        console.log(params)
    }, [])
    return (<div className="player-details">
        {Object.keys(player).length ? (
            <div className="post-card">
                <h2 className="post-card-title">Player Name: {player.firstName + " " + player.lastName} </h2>
                <p className="post-card-date">Created At: {convertDate(player.createdAt)}</p>
                <p className="post-card-date">Updated At: {convertDate(player.updatedAt)}</p>
                <p className="post-card-date">Date of Birth: {convertDoB(player.dateOfBirth)}</p>
                <p className="post-card-content">Created By: {player.createdBy || "---"}</p>
                <p className="post-card-content">Updated By: {player.updatedBy || "---"}</p>
                <p className="post-card-content">Active: <strong style={{ color: player.active ? "green" : "red" }}>{player.active ? "Yes" : "No"}</strong></p>
                <button onClick={() => setEditMode(true)} className="btn">Edit Player</button>
                <button className="btn" onClick={() => onTogglePlayerActivity(params.playerId, player)}>Toggle Player Activity</button>
            </div>) : <ScaleLoader />
        }
        <div style={{ display: editMode ? "block" : "none" }} className="edit-container">
            <h2 className="post-card-title">Player First Name </h2>
            <input type="text" placeholder="player first name" name="firstName" value={editedPlayer.firstName} onChange={handleChange} />
            <h2 className="post-card-title">Player Last Name </h2>
            <input type="text" placeholder="player last name" name="lastName" value={editedPlayer.lastName} onChange={handleChange} />
            <h2 className="post-card-content">Date of Birth </h2>
            <input type="date" name="dateOfBirth" value={convertDoB(editedPlayer.dateOfBirth)} onChange={handleChange} />
            <h2 className="post-card-content">Updated By</h2>
            <input style={{ marginBottom: "5px" }} type="text" name="updatedBy" placeholder="Updated by" value={editedPlayer.updatedBy} onChange={handleChange} />
            <div>
                <button onClick={() => onConfirmEditPlayer(params.playerId, editedPlayer)} className="btn">Confirm</button>
            </div>
        </div>
    </div>)
}