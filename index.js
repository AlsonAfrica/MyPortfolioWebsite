const fullName = "Nhlakanipho Radebe";
const bio = "Dynamic and motivated Biokinetics graduate seeking to leverage academic background and passion for improving human movement and performance in a professional setting. Eager to contribute to a team dedicated to enhancing health and wellness outcomes. I'm also a tech enthusiast with a keen interest in web development. Proficient in HTML, CSS, and JavaScript, I enjoy exploring the intersection of technology and health, seeking innovative ways to integrate digital solutions into rehabilitation practices. Whether on the field or behind the screen, I'm committed to leveraging my diverse interests and expertise to make a meaningful impact in the field of biokinetics and sports rehabilitation.";


const personalInfo = "I am a 24 year old male who currently resides at Johannesburg Gauteng Soweto, completed my matric at Seanamarena High School in 2017. Furthered my studied at the University of Johannesburg under the department of Health Sciences and graduated with a Bachelors degree in Biokinetics. Worked at various places including Pick and Pay, Saayc Soweto and Sir Innocent Academy.";


const qualifications = ["Matric", "Bachelor Degree in Biokinetics", "End User Computing", "Intro to Web Development"];


const skills = ["HTML", "CSS", "JavaScript", "Microsoft 365", "Critical Thinking", "Leadership"];


const contactEmail = "nhlakaniphoradebe337@gmail.com";
const contactPhone = "082 323 0382";
const contactAddress = "640 Rammatli Street Molapo";

document.getElementById("fullName").innerText = fullName;
document.getElementById("bio").innerText = bio;
document.getElementById("personalInfo").innerText = personalInfo;

const qualificationsTable = document.getElementById("qualificationsTable");
qualifications.forEach(qualification => {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = qualification;
    row.appendChild(cell);
    qualificationsTable.appendChild(row);
});

const skillsTable = document.getElementById("skillsTable");
skills.forEach(skill => {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = skill;
    row.appendChild(cell);
    skillsTable.appendChild(row);
});

document.getElementById("contactEmailInfo").innerText = contactEmail;
document.getElementById("contactPhoneInfo").innerText = contactPhone;
document.getElementById("contactAddressInfo").innerText = contactAddress;

