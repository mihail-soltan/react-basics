import './AddPlayer.css'
import { addNewPlayer } from '../services/api-service'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const AddPlayer = ({ getPlayers }) => {
    const params = useParams()
    const [newPlayer, setNewPlayer] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: new Date(),
        createdBy: "",
        active: true,
        team: params.teamId
    })

    const onAddPlayer = async (e) => {
        e.preventDefault()
        console.log(newPlayer)
        setNewPlayer({
            firstName: "",
            lastName: "",
            dateOfBirth: new Date(),
            createdBy: "",
            active: true,
            team: params.teamId
        })
        await addNewPlayer(newPlayer)
        await getPlayers()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewPlayer((prev) => ({ ...prev, [name]: value }))
    }

    const handleChangeDate = (e) => {
        const { name, value } = e.target
        setNewPlayer((prev) => ({ ...prev, [name]: new Date(value) }))
    }

    return (
        <form className='add-team-form' onSubmit={onAddPlayer} >
            <h4> first name</h4>
            <input
                type="text"
                name="firstName"
                placeholder='Player Name'
                onChange={handleChange}
                value={newPlayer.firstName} />

            <h4> last name</h4>
            <input type="text"
                name="lastName"
                placeholder='Player Last Name'
                onChange={handleChange}
                value={newPlayer.lastName} />
            <h4>Created by</h4>
            <input type="text"
                name="createdBy"
                placeholder='created by'
                onChange={handleChange}
                value={newPlayer.createdBy} />
            <h4>Date of Birth</h4>
            <input
                type="date"
                name="dateOfBirth"
                onChange={handleChangeDate} />
            <div>
                <h4>Active</h4>
                <input
                    type="radio"
                    id="active"
                    name="active"
                    value={true}
                    onChange={handleChange} />
                <label htmlFor="active">Yes</label>
                <input type="radio"
                    id="inactive"
                    name="active"
                    value={false}
                    onChange={handleChange} />
                <label htmlFor="inactive">No</label>
            </div>
            <button type='submit' className='add-btn'>Add Player</button>
        </form>
    )
}

export default AddPlayer