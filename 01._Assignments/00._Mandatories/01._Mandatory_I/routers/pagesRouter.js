import { Router} from "express";
import { homepagePage,
    introductionPage,
    firstserverPage,
    htmlfilesPage,
    timePage,
    exportImportPage,
    ssrPage,
    environmentPage
} from "../util/readPages.js";

const router = Router();


router.get("/", (req, res) => {
    res.send(homepagePage);
});
router.get("/introduction", (req, res) => {
    res.send(introductionPage);
});
router.get("/firstserver", (req, res) => {
    res.send(firstserverPage);
});
router.get("/htmlfiles", (req, res) => {
    res.send(htmlfilesPage);
});
router.get("/time", (req, res) => {
    res.send(timePage);
});
router.get("/exportImport", (req, res) => {
    res.send(exportImportPage);
});
router.get("/ssr", (req, res) => {
    res.send(ssrPage);
});
router.get("/environment", (req, res) => {
    res.send(environmentPage);
});








// router.get("/matches", (req, res) => {
//     res.send(matchesPage);
// });

// router.get("/contact", (req, res) => {
//     res.send(contactPage);
// });


export default router;