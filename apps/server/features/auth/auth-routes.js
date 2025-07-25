import { Router } from "express";
import { ModelLogin, RefreshToken } from "./auth-controller.js"

const router = Router();

router.post('/ModelLogin', ModelLogin);

router.post('/RefreshToken', async (req, res) => {
    return RefreshToken(req, res);
});

export default router;