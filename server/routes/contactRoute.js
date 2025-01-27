const express = require("express")
const { sendContectSessage } = require("../controllers/contactCtrl")
const router = express.Router()


router.post("/create", sendContectSessage)




module.exports = router