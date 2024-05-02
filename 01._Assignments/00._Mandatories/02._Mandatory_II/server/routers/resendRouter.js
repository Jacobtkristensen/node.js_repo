import { Router } from 'express';
import { sendEmail }  from '../util/resend.js';

const router = Router();

router.post('/api/resend', async (req, res) => {
    const { email } = req.body;
    const result = await sendEmail(email);
    res.send({data: "Email sent with ID: " + result});
});

export default router;