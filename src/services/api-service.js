import axios from 'axios';

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


export const getOneTeam = async (id) => {
    try {
        const response = await axios.get(`https://team-manager-backend-production.up.railway.app/teams/${id}`)
        return response
    }
    catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}