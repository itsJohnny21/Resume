const name = 'Jonathan Salazar'
const address = '8423 W Whyman Ave Tolleson, AZ 85353 United States'
const title = 'Software Engineer'
const phone = '(480) 466-3466'
const email = 'jsalazar6421@gmail.com'
const github = 'itsJohnny21'
const linkedinLink = 'https://www.linkedin.com/in/jonathan-salazar-6931432a5'
const company = 'the company'
const objective = `Aspiring software engineer with a strong passion for technological innovation, eager to contribute to ${company}'s success.  Specialties include: database design, software architecture, quality assurance, version control, API design, machine learning, and web development.`

const education = [
  {
    school: 'Arizona State University',
    title: "Associate's Degree in Computer Science",
    startDate: 'Jan 2022',
    endDate: 'Dec 2023',
    src: './src/assets/asuIcon.svg',
  },
]

const licenses = [
  {
    title: 'Powered Industrial Truck License',
    provider: 'Amazon Fulfillment Center',
    receivedDate: 'Jan 2021',
    src: './src/assets/forkliftIcon.svg',
  },
]

const technicalSkills = [
  { name: 'JavaScript', proficiencyLevel: 70 },
  { name: 'React', proficiencyLevel: 45 },
  { name: 'Express js', proficiencyLevel: 45 },
  { name: 'Tailwind CSS', proficiencyLevel: 45 },
  { name: 'Java', proficiencyLevel: 60 },
  { name: 'Python', proficiencyLevel: 70 },
  { name: 'Database Design', proficiencyLevel: 40 },
  { name: 'AWS', proficiencyLevel: 30 },
  { name: 'Quality Assurance', proficiencyLevel: 40 },
  { name: 'RDS', proficiencyLevel: 60 },
]

const softSkills = [
  'Communication',
  'Team Player',
  'Creativity',
  'Delegation',
  'Time Management',
]

const awards = [
  {
    title: 'Best Presentation Award',
    provider: 'Arizona Nevada Academy of Science',
    receivedDate: 'Apr 2023',
    description:
      'Presented research findings and a realistic simulation on satellite re-entry at the 2023 ANAS annual meeting held at the Arizona Science Center.',
    src: './src/assets/anasIcon.png',
  },
]

const projectExperiences = [
  {
    title: 'Lead Software Engineer',
    company: 'EasyDoctor',
    startDate: 'Jan 2024',
    endDate: 'May 2024',
    totalTime: '4 months',
    bullets: [
      'Managed an agile development project using Jira to increase productivity by 50%.',
      'Designed application wireframes and user interfaces for main controllers',
      'Developed a Class Responsibility Collaborator (CRC) card diagram.',
      'Mentored team members to increase productivity and professional growth.',
      'Engineered a MySQL database schema using Entity-Relationship (ER) diagrams.',
      'Leveraged AWS to set up a MySQL database server.',
    ],
    src: './src/assets/easyDoctorIcon.png',
  },
  {
    title: 'Simulation Developer',
    company: 'WAESO',
    startDate: 'Aug 2023',
    endDate: 'Dec 2023',
    totalTime: '4 months',
    bullets: [
      'Investigated the fundamental engineering concepts governing satellite re-entry.',
      "Collaborated with team members to simulate the re-entry phase of NASA's Mercury Atlas-6 mission.",
      'Developed detailed graphs and animations using Python libraries to visually represent our findings.',
      'Composed comprehensive, step-by-step documentation for replicating our simulation.',
      "Utilized React and Tailwind CSS to design the website's visual aesthetics.",
      'Employed LaTeX to express all mathematical concepts and computations involved in our study.',
    ],
    src: './src/assets/reentryIcon.svg',
  },
  {
    title: 'Full-Stack Developer',
    company: 'TopicTyper',
    startDate: 'Jun 2023',
    endDate: 'Nov 2023',
    totalTime: '5 months',
    bullets: [
      "Integrated OpenAI's API to dynamically display content.",
      'Developed the frontend using React and Tailwind CSS.',
      'Implemented backend services using Express.js.',
      "Engineered and optimized a MySQL database schema specifically tailored for Typer's API",
      'Optimized for time and space complexity, resulting in a 150% increase in performance.',
      'Crafted the user interface using Tailwind CSS.',
      'Maintained version control using GitHub.',
    ],
    src: './src/assets/typerIcon.svg',
  },
  {
    title: 'Data Scraping Specialist',
    company: 'KBBScraper',
    startDate: 'Jul 2023',
    endDate: 'Aug 2023',
    totalTime: '1 month',
    bullets: [
      'Developed a web scraping tool using JavaScript and the Puppeteer library to extract car pricing information efficiently.',
      'Implemented Nodemailer to establish connections with an SMTP server for email functionalities.',
      'Scheduled automatic monthly email updates using cron jobs.',
      "Converted scraped data into CSV format and utilized Python's Plotly library to generate insightful visual data presentations.",
      'Automated data storage by systematically organizing files into folders by month and year.',
    ],
    src: './src/assets/scraperIcon.svg',
  },
]

const contactDetails = [
  {
    src: './src/assets/phoneIcon.svg',
    content: phone,
    link: `tel:${phone}`,
  },
  {
    src: './src/assets/emailIcon.svg',
    content: `${email}`,
    link: `mailto:${email}`,
  },
  {
    src: './src/assets/githubIcon.svg',
    content: github,
    link: `https://github.com/${github}`,
  },
  {
    src: './src/assets/linkedinIcon.svg',
    content: name,
    link: linkedinLink,
  },
  {
    src: './src/assets/pinIcon.svg',
    content: address,
    link: `https://www.google.com/maps/search/?api=1&query=${address}`,
  },
]

export {
  contactDetails,
  address,
  name,
  title,
  phone,
  email,
  objective,
  projectExperiences,
  education,
  licenses,
  technicalSkills,
  softSkills,
  awards,
}
