import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from "axios";
import { HashLoader } from "react-spinners"

function Home() {
    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(false)
    const [dataTransferObject, setDataTransferObject] = useState({
        name: "",
        last_name: ""
    })
    const [editedObject, setEditedObject] = useState({
        name: "",
        last_name: "",
    })
    const [editMode, setEditMode] = useState(false)
    const url = "https://crudcrud.com/api/031a44646d5f4357ae51a8bb73c82234/humans"

    const onGetPeople = async () => {
        try {
            setPeople([])
            setLoading(true)
            const response = await axios.get(url)
            setPeople(response.data)
            setLoading(false)
        }
        catch (err) {
            throw new Error(err.message)
        }
    }

    const onDeletePerson = async (id) => {
        try {
            await axios.delete(`${url}/${id}`)
            onGetPeople()
        }
        catch (err) {
            throw new Error(err.message)
        }
    }

    const onCreatePerson = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(url, dataTransferObject)
            onGetPeople()
            setDataTransferObject({
                name: "",
                last_name: ""
            })
            return response
        }
        catch (err) {
            throw new Error(err.message)
        }
    }
    const updatePerson = async (id) => {
        try {
            const {name, last_name} = editedObject
            const body = {name, last_name}
            await axios.put(`${url}/${id}`, body)
            onGetPeople()
            setEditMode(false)
        }
        catch (err) {
            throw new Error(err.message)
        }
    }
    const onEditPerson = (body) => {
        setEditMode(true)
        setEditedObject(body)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setDataTransferObject((prev) => ({ ...prev, [name]: value }))
    }
    const handleUpdate = (e) => {
        const { name, value } = e.target
        setEditedObject((prev) => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        onGetPeople()
    }, [])
    return (
        <div>
            <div className='tabs'>
                <Link to="/hello-world"> <button>Hello World</button></Link>
                <Link to="/state"><button>State</button></Link>
                <Link to="/to-do-list"> <button>To Do List</button></Link>
                <Link to="/example"> <button> Example</button></Link>
            </div>

            <form onSubmit={onCreatePerson}>
                {/* <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <input type="text" name="last_name" onChange={(e) => setLastName(e.target.value)} /> */}
                <input type="text" name="name" value={dataTransferObject.name} onChange={handleChange} />
                <input type="text" name="last_name" value={dataTransferObject.last_name} onChange={handleChange} />
                <button type="submit">Send person (to the moon)</button>
            </form>

            <ol>
                {
                    !loading ? people.map((person) =>

                        <li>
                            {person.name + " " + person.last_name}
                            <button onClick={() => onDeletePerson(person._id)}>Delete Person</button>
                            <button onClick={() => onEditPerson(person)}> Edit Person</button>
                        </li>)
                        :
                        <HashLoader />}

            </ol>
            {
                editMode ? (
                    <div className="edit-dialog">
                        <input type="text" name="name" value={editedObject.name} onChange={handleUpdate} />
                        <input type="text" name="last_name" value={editedObject.last_name} onChange={handleUpdate} />
                        <button onClick={() => updatePerson(editedObject._id)}>Update person</button>
                    </div>) : ""
            }
        </div>
    )
}

export default Home