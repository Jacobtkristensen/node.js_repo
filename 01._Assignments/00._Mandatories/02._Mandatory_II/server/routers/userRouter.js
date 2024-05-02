import { Router } from 'express';
import { hashPassword, comparePasswords } from '../util/passwordUtil.js';
import db from '../database/connection.js';

const router = Router();

router.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

    if (!user) {

        return res.status(400).send({ data: "Invalid email or password" });
    }

    const match = await comparePasswords(password, user.password);

    if (match) {
        req.session.user = user;
        res.send({ data: "Login successful" });
    } else {
        return res.status(400).send({ data: "Invalid email or password" });
    }
});

router.post("/api/signup", async (req, res) => {
    const { email, password } = req.body;

    const checkExistingemail = await db.get('SELECT * FROM users WHERE email = ?', [email]);

    if (checkExistingemail) {
        return res.status(400).send({ data: "Email already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const signup = await db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, hashedPassword]);

    if (signup) {
        res.send({ data: "Signup successful" });
    } else {
        return res.status(400).send({ data: "Signup failed" });
    }
});

export default router;