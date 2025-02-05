const contact = require("../templates/contact");
const mailSender = require("../utils/mailSender");
const { eventContactEmail } = require("../templates/contactFormRes");

const sendContectSessage = async (req, res) => {
    try {
        const { name, email, phone, city, age, areaOfIntrest, FitenssGoal, serviceBefoure, intrested, hereAbout } = req.body;

        const areaOfIntrestArray = typeof areaOfIntrest === "string" ? JSON.parse(areaOfIntrest) : areaOfIntrest;
        const FitenssGoalArray = typeof FitenssGoal === "string" ? JSON.parse(FitenssGoal) : FitenssGoal;
        const serviceBefoureArray = typeof serviceBefoure === "string" ? JSON.parse(serviceBefoure) : serviceBefoure;

        await mailSender(
            "fitnessexpoindia@gmail.com",
            "Contact Email",
            contact(name, email, phone, city, age, areaOfIntrestArray, FitenssGoalArray, serviceBefoureArray, intrested, hereAbout)
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
    const { name, email, contact, message, priceCategory, dob, id } = req.body;

    try {
        const emailRes = await mailSender(
            // "fitnessexpoindia@gmail.com",
            "rishimaheshwari040@gmail.com",

            "Your Data send successfully",
            eventContactEmail(name, email, contact, message, priceCategory, dob, id)
        )
        if (!email || !name || !contact || !message || !priceCategory || !dob) {
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
