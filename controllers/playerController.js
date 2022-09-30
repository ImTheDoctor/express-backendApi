import sqlite from 'sqlite3'
sqlite.verbose()
const db = new sqlite.Database('./data.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.log(err);
})
let sql

sql = `CREATE TABLE IF NOT EXISTS data (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT VARCHAR(255), 
    surname TEXT VARCHAR(255), 
    age INTEGER, 
    nation TEXT VARCHAR(255), 
    cityOfBirth TEXT VARCHAR(255),
    club TEXT VARCHAR(255), 
    job TEXT VARCHAR(255), 
    wage INTEGER)`
db.run(sql)


export const getPlayers = (req, res) => {
    db.all("SELECT * FROM data", (err, rows)=> {
        console.log(err);
        res.send(rows)
    })
}

export const createPlayer = (req, res) => {
    const player = req.body
    sql = "INSERT INTO data(name, surname, age, nation, cityOfBirth, club, job, wage) VALUES(?,?,?,?,?,?,?,?)"
    db.run(sql, player['name'], player['surname'], player['age'], player['nation'], player['cityOfBirth'], player['club'], player['job'], player['wage'])
    res.send('players')
}

export const deletePlayer = (req, res) => {
    const id = req.params.id
    sql = "DELETE FROM data WHERE id = ?"
    db.run(sql, id)
    res.send(`Player with id ${id} deleted from the database`)
}

export const updatePlayer = (req, res) => {
    const id = req.params.id
    const player = req.body

    sql = `UPDATE data SET name = ?, surname = ?, age = ?, nation = ?, cityOfBirth = ?, club = ?, job = ?, wage = ? WHERE id = ${id}`
    db.run(sql,  player['name'], player['surname'],player['age'], player['nation'], player['cityOfBirth'], player['club'], player['job'], player['wage'])
    res.send(`User with the id ${id} has been updated`)
}