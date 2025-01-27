const contact = require("../templates/contact");
const mailSender = require("../utils/mailSender");

const sendContectSessage = async (req, res) => {
    try {
        const { name, email, phone, city, age, areaOfIntrest, FitenssGoal, serviceBefoure, intrested, hereAbout } = req.body;

        const areaOfIntrestArray = typeof areaOfIntrest === "string" ? JSON.parse(areaOfIntrest) : areaOfIntrest;
        const FitenssGoalArray = typeof FitenssGoal === "string" ? JSON.parse(FitenssGoal) : FitenssGoal;
        const serviceBefoureArray = typeof serviceBefoure === "string" ? JSON.parse(serviceBefoure) : serviceBefoure;

        await mailSender(
            "rishimaheshwari040@gmail.com",
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

module.exports = { sendContectSessage };
