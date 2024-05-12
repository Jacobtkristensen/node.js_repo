import { Router } from 'express';
import { sendEmail }  from '../util/resend.js';
import { requireAuth } from '../util/authMiddleware.js';

const router = Router();
//isnt used right now
router.post('/api/resend', requireAuth, async (req, res) => {
    const { email } = req.body;
    await sendEmail(email);
    res.send({ data: "Email sent to: " + email});
});

export default router;