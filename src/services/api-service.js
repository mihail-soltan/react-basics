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

