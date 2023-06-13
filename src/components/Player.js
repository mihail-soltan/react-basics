import "./Post.css";
import { convertDate } from "../services/api-service";
import { useNavigate } from 'react-router-dom';

export default function Player({ player }) {
    let navigate = useNavigate();
    const onSeePlayerDetails = (id) => {
        navigate(`${id}`)
    }
    return (
        <div>
            <div className="player-post-card">
                <h2 className="player-post-card-title">Player Name: {player.firstName + " " + player.lastName} </h2>
                <p className="player-post-card-date">Date of Birth: {convertDate(player.dateOfBirth)} </p>
                <p className="player-post-card-active">Active: <strong style={{ color: player.active ? "#23DC3D" : "#880808" }}>{player.active ? "Yes" : "No"}</strong></p>
                <p className="player-post-card-date">Created At:  {convertDate(player.createdAt)}</p>
                <p className="player-post-card-date">Updated At: {convertDate(player.updatedAt)}</p>
                <p className="player-post-card-content">Created By: {player.createdBy} </p>
                <p className="player-post-card-content">Updated By: {player.updatedBy || "---"} </p>
                <button className="btn" onClick={() => onSeePlayerDetails(player._id)}>See player details</button>
            </div>
        </div>
    )
}