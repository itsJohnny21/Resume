const name = 'Jonathan Salazar'
const address = '8423 W Whyman Ave Tolleson, AZ 85353 United States'
const title = 'Warehouse Associate'
const phone = '(480) 466-3466'
const email = 'jsalazar6421@gmail.com'
const github = 'itsJohnny21'
const linkedinLink = 'https://www.linkedin.com/in/jonathan-salazar-6931432a5'
const professionalSummary =
  'Proactive and dependable warehouse worker with 2+ years of leadership experience, seeking to add value to the HelloFresh company. Specialties include: communicating effectively, task delegation, operating a forklift, interpreting schematics, and enforcing quality control.'

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

const skills = [
  'Forklift Operation',
  'Communication',
  'Quality Assurance',
  'Team Leader',
  'Delegation',
  'Microsoft Excel',
  'Software Development',
  'JavaScript',
  'Database Design',
  'Arduino',
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

const experiences = [
  {
    title: 'Newspaper Carrier',
    company: 'The Arizona Republic',
    startDate: 'Jul 2017',
    endDate: 'Jun 2019',
    totalTime: '2 years',
    bullets: [
      'Managed the assembly and distribution of newspapers to customers.',
      'Adjusted to a night schedule to be able to perform the job.',
      'Memorized four different delivery routes, totaling over 500 addresses.',
      'Streamlined the delivery processes by consolidating the four routes into a single, efficient route, reducing drive time by one hour.',
      'Addressed and resolved customer complaints regarding delivery issues.',
      'Prioritized customer satisfaction by adhering to their specific delivery preferences.',
    ],
    src: './src/assets/arizonaRepublicIcon.png',
  },
  {
    title: 'Inbound Process Assistant',
    company: 'Amazon Fulfillment Center',
    startDate: 'Aug 2020',
    endDate: 'Jan 2022',
    totalTime: '1 year 6 months',
    bullets: [
      'Monitored incoming shipments and coordinated the team for efficient unloading.',
      'Created immediate solutions to address unforeseen challenges.',
      'Delegated the team based on their skillset and current business requirements.',
      'Wrote the EOS report, documenting any significant events that took place during the shift.',
      'Consistently demonstrated respect and fairness in team interactions.',
      'Maintained clear and effective communication with the team, ensuring all members were informed of any significant issues.',
    ],
    src: './src/assets/amazonIcon.svg',
  },
  {
    title: '2023 Undergrad Satellite Re-Entry Research Project',
    company: 'Arizona Nevada Acadmey of Science',
    startDate: 'Mar 2023',
    endDate: 'May 2023',
    totalTime: '3 months',
    bullets: [
      'Conducted research on the physics involved during satellite re-entry and created a corresponding physics simulation.',
      "Earned the 'Best Presentation Award' at the Arizona Nevada Academy of Science annual meeting for outstanding team presentation of research findings.",
    ],
    src: './src/assets/anasIcon.png',
  },
  {
    title: 'UberEats Delivery Driver',
    company: 'Uber',
    startDate: 'Jan 2022',
    endDate: 'May 2024',
    totalTime: '2 years 5 months',
    bullets: [
      'Prioritized customer satisfaction by ensuring orders were complete and delivered on time.',
      "Ensured the delivery vehicle was properly maintained according to the owner's manual specifications",
      'Monitored essential business expenditures including fuel, tire replacement, oil changes, and mileage for inclusion in tax filings.',
    ],
    src: './src/assets/uberIcon.svg',
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
  professionalSummary,
  experiences,
  education,
  licenses,
  skills,
  awards,
}
