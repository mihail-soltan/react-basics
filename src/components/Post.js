import "./Post.css";
import { Link } from 'react-router-dom'
export default function Post({ team }) {
    const months = ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"]
    //new Date(date) day = original.getDate() getFullYear() ${day}/${month}/year   // team.createdAt
    function convertDate(date) {
        if (date) {
            const original = new Date(date)
            const day = original.getDate()
            const month = months[original.getMonth()]
            const year = original.getFullYear()
            return `${day}/${month}/${year} `
        }
        return " - "
    }
    return (
        <div>
            <div className="post-card">
                <h2 className="post-card-title">Team Name: {team.name} </h2>
                <p className="post-card-date">Created At: {convertDate(team.createdAt)} </p>
                <p className="post-card-date">Updated At:{convertDate(team.updatedAt)} </p>
                <p className="post-card-content">Created By:{team.createdBy} </p>
                <Link to={team._id} > Team Details </Link>
            </div>
        </div>
    )
}