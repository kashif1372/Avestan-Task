import express from "express";
import { addUserController,getAllUsersController } from "../controllers/userControllers.js"

const router = express.Router();

router.post('/add-user',addUserController);

router.get('/get-all-users',getAllUsersController);


export default router;
