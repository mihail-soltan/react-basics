import axios from 'axios';


const API_URL = "https://team-manager-backend-production.up.railway.app"

export function convertDate(date) {
    const months = ["ianuarie",
        "februarie",
        "martie",
        "aprilie",
        "mai",
        "iunie",
        "iulie",
        "august",
        "septembrie",
        "octombrie",
        "noiembrie",
        "decembrie"]

    if (date) {
        const original = new Date(date)
        const day = original.getDate()
        const month = months[original.getMonth()]
        const year = original.getFullYear()
        return `${day}/${month}/${year} `
    }
    return " - "
}

export function convertDoB(date) {
    const initialDate = new Date(date)
    const year = initialDate.getFullYear()
    let month = initialDate.getMonth() + 1
    if (month < 10) {
        month = `0${month}`
    }
    let day = initialDate.getDate()
    if (day < 10) {
        day = `0${day}`
    }
    return `${year}-${month}-${day}`
}

export async function getAllTeams() {
    try {
        const response = await axios.get(`${API_URL}/teams`)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}

export const getOneTeam = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/teams/${id}`)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}

export const getPlayers = async () => {

    try {
        const response = await axios.get(`${API_URL}/players/`)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}

export const addNewTeam = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/teams/`, body)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}

export const addNewPlayer = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/players/`, body)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}

export const editTeam = async (teamId, body) => {
    try {
        const response = await axios.put(`${API_URL}/teams/${teamId}`, body)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}

export const getOnePlayer = async (playerId) => {
    try {
        const response = await axios.get(`${API_URL}/players/${playerId}`)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}

export const editPlayer = async (playerId, body) => {
    try {
        const response = await axios.put(`${API_URL}/players/${playerId}`, body)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}

export const toggleTeamActivity = async (teamId, body) => {
    try {
        const response = await axios.put(`${API_URL}/teams/${teamId}/active`, body)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}

export const togglePlayerActivity = async (player, body) => {
    try {
        const response = await axios.put(`${API_URL}/players/${player}/active`, body)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}