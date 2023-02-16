import express from "express";
import { getUseres } from "../controllers/user"

const router = express.Router()

router.ger("/", getUseres)

export default router