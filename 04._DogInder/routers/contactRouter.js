import { Router } from "express";

const router = Router();

router.post("/api/contact" , (req, res) => {

console.log("FORM SUBMITTED", req.body);
res.send();
});

export default router;