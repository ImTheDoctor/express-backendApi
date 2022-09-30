import express from "express";

import { getPlayers, createPlayer, deletePlayer, updatePlayer } from '../controllers/playerController.js'

const router = express.Router()

router.get('/', getPlayers)

router.post('/', createPlayer) 

router.delete('/:id', deletePlayer)

router.patch('/:id', updatePlayer)

export default router