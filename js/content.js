document.getElementById('about-text').innerHTML = `
  <p>Final-year B.E. Computer Science Engineering student at Cambridge Institute of Technology, specializing in IoT, Cybersecurity & Blockchain. I've spent the last two years building real-time data pipelines, hardened web apps, and automation tools — turning raw sensor and threat data into dashboards people can actually act on.</p>
  <p>Currently seeking an entry-level role in Data Analytics, IoT, or Cybersecurity.</p>`;

const stats = [
  { num: '9.18', label: 'CGPA — B.E. CSE, CIT (2023–present)' },
  { num: '5+', label: 'Real-time IoT pipelines shipped at Samsung Innovation Campus' },
  { num: '300+', label: 'Students managed by a portal I built solo' }
];
document.getElementById('about-stats').innerHTML = stats.map(s =>
  `<div class="stat-block"><div class="num">${s.num}</div><div class="label">${s.label}</div></div>`).join('');

const journey = [
  { date: '2023 – Present', title: 'B.E. Computer Science Engineering (IoT & Cybersecurity)', org: 'Cambridge Institute of Technology · CGPA 9.18',
    desc: 'Specializing in IoT, Cybersecurity & Blockchain, alongside coursework in DSA, OOP, and database systems.' },
  { date: 'Jul 2025 – Feb 2026', title: 'Apprenticeship, Samsung Innovation Campus', org: 'Cambridge Institute of Technology',
    desc: 'Engineered 5+ real-time IoT pipelines in Node-RED, deployed MQTT to cut message overhead by 30%, and built live dashboards that accelerated incident response.' },
  { date: 'Ongoing', title: 'Design Team Member, Crypto Net Club', org: 'Cybersecurity club, CIT',
    desc: 'Contributed visual content and promotional materials for club events and activities.' },
  { date: 'Hackathon', title: 'Finalist, Manipal MedTech Hackathon', org: 'Top 10 among participating teams',
    desc: 'Reached the finals by developing an innovative solution under time pressure with a small team.' }
];
document.getElementById('journey-timeline').innerHTML = journey.map(j => `
  <div class="timeline-item">
    <span class="timeline-date">${j.date}</span>
    <h3>${j.title}</h3>
    <span class="org">${j.org}</span>
    <p>${j.desc}</p>
  </div>`).join('');

const projects = [
  { name: 'APNPS — School Admin & Analytics Portal',
    desc: 'Production school administration system in active use, managing 300+ students, staff records, and fee/salary tracking. Hardened with CSRF protection and a login lockout mechanism; live database wired to Power BI.',
    tags: ['Python', 'Flask', 'SQLAlchemy', 'Power BI'] },
  { name: 'HazGuard — Spill & Fume Monitoring',
    desc: 'IoT-based gas leak detection system with Node-RED dashboards, cutting manual inspection cycles by 60% through automated real-time alerts across monitoring zones.',
    tags: ['IoT', 'Node-RED', 'MQTT', 'C'] },
  { name: 'AI-Powered News Monitor Bot',
    desc: 'End-to-end news automation pipeline: n8n + Telegram Bot API + Groq LLaMA for ingestion and summarization, cutting manual monitoring effort by 90% with multi-user Telegram delivery.',
    tags: ['n8n', 'Telegram API', 'Groq LLaMA'] },
  { name: 'Threat Pulse — Cyber Risk Analytics Dashboard',
    desc: 'Analyzes 800+ global data breach records through automated Python ETL workflows. Cleans and explores the data with Pandas, scores sector-wise cyber risk with a composite industry risk model, and studies breach disclosure delays to surface organizational response patterns.',
    tags: ['Python', 'Streamlit', 'Plotly', 'Pandas'] },
  { name: 'Eventify — Event Management & Certificate Generation',
    desc: 'Desktop event management application built with Java Swing for the interface and MySQL for backend data. Handles storing, updating, and retrieving event details through a structured, interactive workflow.',
    tags: ['Java Swing', 'MySQL'] }
];

function skillIconError(imgEl, label) {
  const mono = document.createElement('span');
  mono.className = 'mono-badge';
  mono.textContent = label.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase();
  imgEl.replaceWith(mono);
}

function skillIcon(s) {
  if (s.icon[0] === 'd') return `<i class="devicon-${s.icon.slice(2)} colored"></i>`;
  if (s.icon[0] === 's') return `<img src="https://cdn.simpleicons.org/${s.icon.slice(2)}" alt="" loading="lazy" onerror="skillIconError(this,'${s.name}')">`;
  return `<span class="mono-badge">${s.name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()}</span>`;
}

const skillGroups = [
  { title: 'Languages', items: [
    { name: 'Java', icon: 'd:java-plain' }, { name: 'Python', icon: 'd:python-plain' },
    { name: 'HTML5', icon: 'd:html5-plain' }, { name: 'CSS3', icon: 'd:css3-plain' },
    { name: 'JavaScript', icon: 'd:javascript-plain' } ] },
  { title: 'Data & Analytics', items: [
    { name: 'Excel', icon: 's:microsoftexcel' }, { name: 'Tableau', icon: 's:tableau' },
    { name: 'Power BI', icon: 's:powerbi' }, { name: 'Dataiku', icon: 's:dataiku' },
    { name: 'EDA', icon: 'm' } ] },
  { title: 'Automation & IoT', items: [
    { name: 'n8n', icon: 's:n8n' }, { name: 'Node-RED', icon: 's:nodered' },
    { name: 'MQTT', icon: 's:mqtt' }, { name: 'REST APIs', icon: 'm' } ] },
  { title: 'Databases & Cloud', items: [
    { name: 'MySQL', icon: 'd:mysql-plain' }, { name: 'PostgreSQL', icon: 'd:postgresql-plain' },
    { name: 'MongoDB', icon: 'd:mongodb-plain' }, { name: 'AWS', icon: 'd:amazonwebservices-original' } ] },
  { title: 'Tools & Libraries', items: [
    { name: 'Numpy', icon: 'd:numpy-original' }, { name: 'Pandas', icon: 'd:pandas-original' },
    { name: 'Scikit-learn', icon: 's:scikitlearn' }, { name: 'Plotly', icon: 's:plotly' },
    { name: 'Streamlit', icon: 's:streamlit' }, { name: 'Linux', icon: 'd:linux-plain' } ] }
];

const certs = [
  { title: 'Deloitte — Data Analytics Job Simulation', desc: 'Practical simulation covering core data analytics tasks.' },
  { title: 'NPTEL — Data Analytics with Python', desc: 'Certification in Python-based data analytics.' },
  { title: 'CIT — Cambridge Generative AI Program', desc: 'Focused on network and security.' },
  { title: 'Cisco — Certificate in Ethical Hacking', desc: 'Hands-on training in ethical hacking techniques.' }
];

const projectPageSize = 3;
let projectPage = 0;
const projectPages = Math.ceil(projects.length / projectPageSize);

function renderProjects() {
  const start = projectPage * projectPageSize;
  const items = projects.slice(start, start + projectPageSize);
  document.getElementById('project-grid').innerHTML = items.map(p => `
    <div class="project-card">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="tag-row">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>`).join('');
  document.getElementById('project-dots').innerHTML = Array.from({ length: projectPages }).map((_, i) =>
    `<span class="dot${i === projectPage ? ' active' : ''}"></span>`).join('');
}

document.getElementById('project-next').addEventListener('click', () => {
  projectPage = (projectPage + 1) % projectPages;
  renderProjects();
});
document.getElementById('project-prev').addEventListener('click', () => {
  projectPage = (projectPage - 1 + projectPages) % projectPages;
  renderProjects();
});
renderProjects();

const skillPageSize = 3;
let skillPage = 0;
const skillPages = Math.ceil(skillGroups.length / skillPageSize);

function renderSkills() {
  const start = skillPage * skillPageSize;
  const groups = skillGroups.slice(start, start + skillPageSize);
  document.getElementById('skills-grid').innerHTML = groups.map(g => `
    <div class="skill-group">
      <h4>${g.title}</h4>
      <div class="skill-icon-row">${g.items.map(s => `<div class="skill-chip">${skillIcon(s)}<span>${s.name}</span></div>`).join('')}</div>
    </div>`).join('');
  document.getElementById('skill-dots').innerHTML = Array.from({ length: skillPages }).map((_, i) =>
    `<span class="dot${i === skillPage ? ' active' : ''}"></span>`).join('');
}

document.getElementById('skill-next').addEventListener('click', () => {
  skillPage = (skillPage + 1) % skillPages;
  renderSkills();
});
document.getElementById('skill-prev').addEventListener('click', () => {
  skillPage = (skillPage - 1 + skillPages) % skillPages;
  renderSkills();
});
renderSkills();

document.getElementById('cert-list').innerHTML = certs.map(c => `
  <div class="cert-item"><span class="dot"></span>
    <div><strong>${c.title}</strong><br><span>${c.desc}</span></div>
  </div>`).join('');
