const express = require("express")
const { sendContectSessage, contactCtrl } = require("../controllers/contactCtrl")
const router = express.Router()


router.post("/create", sendContectSessage)
router.post("/send", contactCtrl)




module.exports = router