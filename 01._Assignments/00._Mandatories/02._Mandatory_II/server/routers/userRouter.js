import { Router } from 'express';
import { hashPassword, comparePasswords } from '../util/passwordUtil.js';
import db from '../database/connection.js';
import {sendEmail} from '../util/resend.js';

const router = Router();

router.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

    if (!user) {
        return res.status(400).send({ data: "Invalid email or password" });
    }

    const match = await comparePasswords(password, user.password);

    console.log(user.email);
    if (match) {
        req.session.user = user;
        res.send({ data: { email: email} });
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

    await sendEmail(email);
});

router.get("/api/logout", (req, res) => {
    req.session.destroy(error => {
        if (error) {
            return res.status(500).send('Failed to log out');
        }
        res.send('Logged out successfully');
    });
});

export default router;