import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Woody',
	title: 'Jeongwook Hong\'s Profile',
	subTitle: '',
	role: "Blockchain Developer",
	resumeLink: "https://github.com/VVoodyHong/Profile",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/VVoodyHong',
	email: 'hju4287@naver.com',
	facebook: 'https://www.facebook.com/profile.php?id=100002048019948',
	instagram: "https://www.instagram.com/w8kjeong/",
	// linkedin: 'Your linkedin link',
	// twitter: "Your twitter link",
	// medium: 'Your medium link',
	// stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji('Skills ⚡'),
	subTitle: "Languages ​​and tools available",
	describeSkills: [
		// moji("✔ describe first"),
		// emoji("✔ describe second"),
		// emoji("✔ describe third"),
		// emoji("✔ describe forth"),
		// emoji("✔ describe fifth"),e
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fas fa-copyright", text: "C/C++", proficiency: 80},
		{fontAwesome: "fab fa-java", text: "Java", proficiency: 70},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fab fa-google", text: "Go", proficiency: 40},
		{fontAwesome: "fab fa-python", text: "Python", proficiency: 30},
		{fontAwesome: "fab fa-react", text: "React-Native", proficiency: 70},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 70},
		{fontAwesome: "fab fa-node", text: "node.js", proficiency: 60},
		{fontAwesome: "fab fa-docker", text: "Docker", proficiency: 50},
		{fontAwesome: "fas fa-database", text: "SQL", proficiency: 50},
	],
	view: true
};

export const experience = {
	title: emoji("Work Experience 👨‍💻"),
	lists: [
		{
			date: "2020.12.21 ~",
			company: "UPCHAIN",
			role: "Blockchain Developer",
		},
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "",
	lists: [
		{
			title: "Synergy",
			descPeriod: "2020. 12. 21 ~ ",
			descPart: "admin and client app development",
			url: "http://eaglessystem.com/intro"
		},
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "",
	lists: [
		{
			img: "",
			alt: "",
			title: "부산대학교 블록체인 코딩 개발자 양성과정 1기",
			desc: "2020. 06 ~ 2020. 12"
		},
		{
			img: "",
			alt: "",
			title: "고려대학교 팬데믹 블록체인 아이디어톤 - 장려상",
			desc: " 수상날짜: 2020. 11"
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

//hard coding
export const contactInfo = {
	title: "Contact Me 🤝",
	subTitle: "",
	introduce: "",
	view: true
}