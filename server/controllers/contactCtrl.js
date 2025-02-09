const contact = require("../templates/contact");
const mailSender = require("../utils/mailSender");
const { eventContactEmail } = require("../templates/contactFormRes");
const contactModel = require("../modle/contactModel")
const registerModel = require("../modle/registerModel")

const sendContectSessage = async (req, res) => {
    try {
        const { name, email, phone, city, stallCategory, occupation } = req.body;

        await registerModel.create({ name, email, phone, city, stallCategory, occupation })

        await mailSender(
            "fitnessexpoindia@gmail.com",
            // "rishimaheshwari040@gmail.com",

            "Contact Email",
            contact(name, email, phone, city, occupation, stallCategory)
        );

        return res.status(200).json({
            success: true,
            message: "Message Send Successfully!"
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in sending email"
        });
    }
}



const contactCtrl = async (req, res) => {
    const { name, email, contact, dob, priceCategory, price, size } = req.body;

    try {
        await contactModel.create({ name, email, contact, dob, priceCategory, price, size })

        const emailRes = await mailSender(
            "fitnessexpoindia@gmail.com",
            // "rishimaheshwari040@gmail.com",

            "Your Data send successfully",
            eventContactEmail(name, email, contact, dob, priceCategory, price, size)
        )
        if (!email || !name || !contact || !contact || !priceCategory || !size) {
            return res.status(500).send({
                message: "Plase provide all fields",
                success: false
            })
        }
        res.status(200).send({
            message: "Email send successfully.Our team will contact you soon!",
            emailRes,
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error in sending email",
        })
    }
}
module.exports = { sendContectSessage, contactCtrl };
