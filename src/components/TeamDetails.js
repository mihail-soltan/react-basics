import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { convertDate, getOneTeam } from '../services/api-service';
import ScaleLoader from "react-spinners/ScaleLoader";
import "./Post.css";
export default function TeamDetails() {

    const params = useParams()
    const [team, setTeam] = useState({})
    const getTeam = async () => {
        const res = await getOneTeam(params.teamId)
        setTeam(res.data)
    }
    useEffect(() => {
        getTeam()
    }, [])
    return (<div>
        {Object.keys(team).length ?
            <div className="post-card">
                <h2 className="post-card-title">Team Name: {team.name} </h2>
                <p className="post-card-date">Created At: {convertDate(team.createdAt)}</p>
                <p className="post-card-date">Updated At: {convertDate(team.updatedAt)}</p>
                <p className="post-card-content">Created By: {team.createdBy || "---"}</p>
            </div>
            : <ScaleLoader />}
    </div>)
}