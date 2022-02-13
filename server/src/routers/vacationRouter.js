import express from "express";
import { requireSignin } from "../middleware";

const router = express.Router();

router.post('/login', requireSignin, );
router.get('/vacation', () => {});

export default router;