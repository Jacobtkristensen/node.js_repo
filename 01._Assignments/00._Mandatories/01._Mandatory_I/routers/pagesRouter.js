import { Router} from "express";
import { homepagePage } from "../util/readPages.js";

const router = Router();


router.get("/", (req, res) => {
    res.send(homepagePage);
});
router.get("/introduction", (req, res) => {
    res.send();
});
router.get("/firstserver", (req, res) => {
    res.send();
});
router.get("/htmlfiles", (req, res) => {
    res.send();
});
router.get("/time", (req, res) => {
    res.send();
});
router.get("/exportImport", (req, res) => {
    res.send();
});
router.get("/ssr", (req, res) => {
    res.send();
});
router.get("/environment", (req, res) => {
    res.send();
});








// router.get("/matches", (req, res) => {
//     res.send(matchesPage);
// });

// router.get("/contact", (req, res) => {
//     res.send(contactPage);
// });


export default router;