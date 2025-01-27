const contact = (name, email, phone, city, age, areaOfIntrestArray, FitenssGoalArray, serviceBefoureArray, intrested, hereAbout) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>User Sponsorship Inquiry</title>
		<style>
			body {
				background-color: #f9f9f9;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.6;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 30px auto;
				background-color: #ffffff;
				padding: 20px;
				border-radius: 10px;
				box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
				text-align: center;
			}
	
			.header {
				font-size: 24px;
				font-weight: bold;
				color: #e53935;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				color: #555555;
				margin-bottom: 20px;
			}
	
			.user-info {
				font-size: 18px;
				color: #333333;
				margin-bottom: 15px;
			}
	
			.footer {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
		</style>
	</head>
	
	<body>
		<div class="container">
			<div class="header">New Sponsorship Inquiry</div>
			<div class="body">
				<p>Hi Admin,</p>
				<p>You have received a new sponsorship inquiry from <span class="highlight">${name}</span>. Below are the details:</p>
				
				<div class="user-info">
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Phone:</strong> ${phone}</p>
					<p><strong>City:</strong> ${city}</p>
					<p><strong>Age:</strong> ${age}</p>
					<p><strong>Interest Areas:</strong> ${Array.isArray(areaOfIntrestArray) ? areaOfIntrestArray.join(', ') : areaOfIntrestArray}</p>
					<p><strong>Fitness Goals:</strong> ${Array.isArray(FitenssGoalArray) ? FitenssGoalArray.join(', ') : FitenssGoalArray}</p>
					<p><strong>Have You Used These Services Before?</strong> ${Array.isArray(serviceBefoureArray) ? serviceBefoureArray.join(', ') : serviceBefoureArray}</p>
					<p><strong>Interested in Sponsorship for:</strong> ${intrested}</p>
					<p><strong>How Did You Hear About Us?:</strong> ${hereAbout}</p>
				</div>
				
				<p>Feel free to follow up with the user to explore sponsorship opportunities further.</p>
			</div>
			<div class="footer">
				<p>Thank you,</p>
				<p><strong>Your Team</strong></p>
			</div>
		</div>
	</body>
	
	</html>`;
};

module.exports = contact;
