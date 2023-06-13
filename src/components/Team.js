import "./Post.css";
import { Link } from 'react-router-dom'
import { convertDate } from "../services/api-service";
export default function Team({ team }) {

    return (
        <div>
            <div className="post-card">
                <h2 className="post-card-title">Team Name: {team.name} </h2>
                <p className="post-card-active">Active: <strong style={{ color: team.active ? "#23DC3D" : "#880808" }}>{team.active ? "Yes" : "No"}</strong></p>
                <p className="post-card-date">Created At: {convertDate(team.createdAt)} </p>
                <p className="post-card-date">Updated At:{convertDate(team.updatedAt)} </p>
                <p className="post-card-content">Created By:{team.createdBy} </p>
                <p className="post-card-content">Updated By:{team.updatedBy || "---"} </p>
                <Link to={`/${team._id}`} > Team Details </Link>
            </div>
        </div>
    )
}