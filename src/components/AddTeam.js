import './AddTeam.css'
import { addNewTeam } from '../services/api-service'
import { useState } from 'react';

export const AddTeam = ({getTeams}) => {
    const [newTeam, setNewTeam] = useState({
        name: "",
        createdBy: "",
        active: true,
    })

    const onAddTeam = async (e) => {
        e.preventDefault()
        console.log(newTeam)
        setNewTeam({
            name: "",
            createdBy: "",
            active: true
        })
        await addNewTeam(newTeam)
        await getTeams()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewTeam((prev) => ({ ...prev, [name]: value }))
    }
   
    return (
        <form className='add-team-form' onSubmit={onAddTeam} >
            <h4>Team name</h4>
            <input type="text" name="name" placeholder='Team Name' onChange={handleChange} value={newTeam.name} />
            <h4>Created by</h4>
            <input type="text" name="createdBy" placeholder='created by' onChange={handleChange} value={newTeam.createdBy} />
            <div>
                <h4>Active</h4>
                <input type="radio" id="active" name="active" value={true} onChange={handleChange} />
                <label htmlFor="active">Yes</label>
                <input type="radio" id="inactive" name="active" value={false} onChange={handleChange} />
                <label htmlFor="inactive">No</label>
            </div>
            <button type='submit' className='add-btn'>Add Team</button>
        </form>
    )
}