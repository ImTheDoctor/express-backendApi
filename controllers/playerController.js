import { v4 as uuidv4 } from 'uuid';
let players = []


export const getPlayers = (req, res) => {
    res.send(players)
}

export const createPlayer = (req, res) => {
    const player = req.body

    players.push({ ...player, id: uuidv4() })

    res.send('Player was added')
}

export const getPlayer = (req, res) => {
    const { id } = req.params

    const foundPlayer = players.find(player => player.id === id)
    res.send(foundPlayer)
}

export const deletePlayer = (req, res) => {
    const { id } = req.params

    players = players.filter(player => player.id !== id)
    res.send(`Player with id ${id} deleted from the database`)
}

export const updatePlayer = (req, res) => {
    const { id } = req.params
    const { name, surname, age, nation, cityOfBirth, club, job, wage } = req.body
    const player = players.find(player => player.id === id)

    if (name) player.name = name
    if (surname) player.surname = surname
    if (age) player.age = age
    if (nation) player.nation = nation
    if (cityOfBirth) player.cityOfBirth = cityOfBirth
    if (club) player.club = club
    if (job) player.job = job
    if (wage) player.wage = wage

    res.send(`User with the id ${id} has been updated`)
}