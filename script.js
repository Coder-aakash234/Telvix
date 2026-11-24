/* ============================================================
   TELVIX · Main JavaScript
   Single-page frontend prototype · HTML5 / CSS3 / Vanilla JS
   ============================================================ */

'use strict';

/* ============================================================
   1. CONSTANTS & DEMO ACCOUNTS
   ============================================================ */
const DEMO_PASSWORD = 'Demo@123';

const DEMO_ACCOUNTS = {
  'student@telvix.demo': { role: 'student', name: 'Aarav Sharma', id: 'U-STU-01' },
  'faculty@telvix.demo': { role: 'faculty', name: 'Dr. Meera Iyer', id: 'U-FAC-01' },
  'industry@telvix.demo': { role: 'industry', name: 'NovaTech Solutions', id: 'U-IND-01' },
  'admin@telvix.demo': { role: 'admin', name: 'Platform Admin', id: 'U-ADM-01' }
};

const LS_KEYS = {
  session: 'telvix_session',
  data: 'telvix_data',
  roadmap: 'telvix_roadmap_progress'
};

/* ============================================================
   2. DEFAULT DEMO DATA
   ============================================================ */
function getDefaultData() {
  return {
    users: [
      { id: 'U-STU-01', name: 'Aarav Sharma', email: 'student@telvix.demo', role: 'student', status: 'Active', joined: '2025-01-12', course: 'B.Tech CSE', university: 'Sunrise Institute of Technology', gradYear: 2026 },
      { id: 'U-STU-02', name: 'Priya Nair', email: 'priya.nair@demo.edu', role: 'student', status: 'Active', joined: '2025-02-03', course: 'B.Tech IT', university: 'Sunrise Institute of Technology', gradYear: 2026 },
      { id: 'U-STU-03', name: 'Rohan Verma', email: 'rohan.verma@demo.edu', role: 'student', status: 'Active', joined: '2025-02-18', course: 'B.Tech ECE', university: 'Greenfield University', gradYear: 2025 },
      { id: 'U-STU-04', name: 'Sneha Kulkarni', email: 'sneha.k@demo.edu', role: 'student', status: 'Active', joined: '2025-03-01', course: 'B.Tech CSE', university: 'Greenfield University', gradYear: 2027 },
      { id: 'U-STU-05', name: 'Kabir Malhotra', email: 'kabir.m@demo.edu', role: 'student', status: 'Active', joined: '2025-03-15', course: 'B.Tech AI & DS', university: 'Sunrise Institute of Technology', gradYear: 2026 },
      { id: 'U-FAC-01', name: 'Dr. Meera Iyer', email: 'faculty@telvix.demo', role: 'faculty', status: 'Active', joined: '2025-01-05', dept: 'Computer Science', designation: 'Associate Professor', university: 'Sunrise Institute of Technology' },
      { id: 'U-FAC-02', name: 'Dr. Anil Kapoor', email: 'anil.kapoor@demo.edu', role: 'faculty', status: 'Active', joined: '2025-01-20', dept: 'Information Technology', designation: 'Professor', university: 'Greenfield University' },
      { id: 'U-FAC-03', name: 'Prof. Ritu Singh', email: 'ritu.singh@demo.edu', role: 'faculty', status: 'Active', joined: '2025-02-10', dept: 'Electronics', designation: 'Assistant Professor', university: 'Sunrise Institute of Technology' },
      { id: 'U-IND-01', name: 'NovaTech Solutions', email: 'industry@telvix.demo', role: 'industry', status: 'Active', joined: '2025-01-08', sector: 'Software & IT Services' },
      { id: 'U-IND-02', name: 'ByteForge Labs', email: 'contact@byteforge.demo', role: 'industry', status: 'Active', joined: '2025-02-14', sector: 'Product Engineering' },
      { id: 'U-IND-03', name: 'EduSpark Learning', email: 'hello@eduspark.demo', role: 'industry', status: 'Active', joined: '2025-03-05', sector: 'EdTech' },
      { id: 'U-ADM-01', name: 'Platform Admin', email: 'admin@telvix.demo', role: 'admin', status: 'Active', joined: '2025-01-01' }
    ],
    organizations: [
      { id: 'ORG-01', name: 'NovaTech Solutions', sector: 'Software & IT Services', status: 'Verified', location: 'Bengaluru' },
      { id: 'ORG-02', name: 'ByteForge Labs', sector: 'Product Engineering', status: 'Pending', location: 'Pune' },
      { id: 'ORG-03', name: 'EduSpark Learning', sector: 'EdTech', status: 'Verified', location: 'Hyderabad' },
      { id: 'ORG-04', name: 'GreenGrid Energy', sector: 'Clean Energy', status: 'Pending', location: 'Chennai' }
    ],
    skills: [
      'HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'React',
      'Communication', 'Problem-solving', 'Teamwork', 'Data Analysis', 'Machine Learning'
    ],
    skillTaxonomy: [
      { id: 'SKT-1', name: 'Programming' },
      { id: 'SKT-2', name: 'Web Development' },
      { id: 'SKT-3', name: 'Database Management' },
      { id: 'SKT-4', name: 'Data Analytics' },
      { id: 'SKT-5', name: 'Artificial Intelligence' },
      { id: 'SKT-6', name: 'Communication' },
      { id: 'SKT-7', name: 'Leadership' }
    ],
    opportunities: [
      {
        id: 'OPP-01', org: 'NovaTech Solutions', orgId: 'U-IND-01', title: 'Frontend Developer Intern',
        type: 'Internship', category: 'Web Development',
        description: 'Work on real client dashboards using HTML, CSS, and vanilla JavaScript. You will collaborate with senior engineers on production UI features.',
        responsibilities: 'Build reusable UI components, fix accessibility issues, write clean JavaScript, participate in code reviews.',
        skills: ['HTML', 'CSS', 'JavaScript'], eligibility: 'B.Tech CSE/IT, 2025 or 2026 batch, CGPA 7.0+',
        location: 'Bengaluru', mode: 'Hybrid', stipend: '₹25,000 / month',
        deadline: '2026-06-30', openings: 3, status: 'Approved',
        posted: '2026-01-10', applications: 0
      },
      {
        id: 'OPP-02', org: 'ByteForge Labs', orgId: 'U-IND-02', title: 'Data Analytics Intern',
        type: 'Internship', category: 'Data Analytics',
        description: 'Assist the analytics team in building dashboards, cleaning datasets, and producing weekly insight reports for product teams.',
        responsibilities: 'Use Python and SQL to analyze data, build Chart.js visualizations, document findings.',
        skills: ['Python', 'SQL', 'Data Analysis'], eligibility: 'Any engineering stream, final year',
        location: 'Pune', mode: 'On-site', stipend: '₹20,000 / month',
        deadline: '2026-05-15', openings: 2, status: 'Approved',
        posted: '2026-01-18', applications: 0
      },
      {
        id: 'OPP-03', org: 'EduSpark Learning', orgId: 'U-IND-03', title: 'Junior Full-Stack Developer',
        type: 'Job', category: 'Web Development',
        description: 'Join our product team to build and maintain a learning management system used by thousands of students.',
        responsibilities: 'Develop REST-backed frontend features, write tests, collaborate with design and QA.',
        skills: ['JavaScript', 'HTML', 'CSS', 'SQL'], eligibility: 'B.Tech/MCA 2025 pass-out, 0-1 years experience',
        location: 'Hyderabad', mode: 'On-site', stipend: '₹6.5 – 8 LPA',
        deadline: '2026-04-20', openings: 4, status: 'Approved',
        posted: '2026-01-22', applications: 0
      },
      {
        id: 'OPP-04', org: 'NovaTech Solutions', orgId: 'U-IND-01', title: 'ML Research Assistant (Live Project)',
        type: 'Live Project', category: 'Artificial Intelligence',
        description: 'Support an applied ML research project on document classification. Ideal for students keen on AI research.',
        responsibilities: 'Prepare datasets, train baseline models, write experiment summaries.',
        skills: ['Python', 'Machine Learning', 'Data Analysis'], eligibility: 'B.Tech CSE/AI 3rd or 4th year',
        location: 'Remote', mode: 'Remote', stipend: '₹15,000 / month',
        deadline: '2026-05-05', openings: 2, status: 'Approved',
        posted: '2026-02-01', applications: 0
      },
      {
        id: 'OPP-05', org: 'ByteForge Labs', orgId: 'U-IND-02', title: 'Apprenticeship – UI Engineering',
        type: 'Apprenticeship', category: 'Web Development',
        description: 'Structured 6-month apprenticeship with mentorship, real tickets, and a certificate on completion.',
        responsibilities: 'Ship small UI features, learn design systems, participate in daily standups.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Communication'], eligibility: 'Any degree, 2025/2026 batch',
        location: 'Pune', mode: 'Hybrid', stipend: '₹12,000 / month',
        deadline: '2026-04-10', openings: 5, status: 'Approved',
        posted: '2026-02-05', applications: 0
      }
    ],
    applications: [
      { id: 'APP-01', oppId: 'OPP-02', studentId: 'U-STU-01', studentName: 'Aarav Sharma', studentEducation: 'B.Tech CSE, Sunrise Institute of Technology', studentSkills: 'Python, SQL', date: '2026-02-02', status: 'Under Review' },
      { id: 'APP-02', oppId: 'OPP-01', studentId: 'U-STU-02', studentName: 'Priya Nair', studentEducation: 'B.Tech IT, Sunrise Institute of Technology', studentSkills: 'HTML, CSS, JavaScript', date: '2026-02-04', status: 'Shortlisted' }
    ],
    collaborations: [
      { id: 'COL-01', title: 'Smart Campus Energy Monitor', org: 'NovaTech Solutions', facultyId: 'U-FAC-01', facultyName: 'Dr. Meera Iyer', expertise: 'IoT, Embedded Systems', skills: ['Python', 'Data Analysis'], duration: '6 months', type: 'Research Collaboration', status: 'Open', description: 'Design a campus-wide energy monitoring prototype with cloud dashboards.' },
      { id: 'COL-02', title: 'Curriculum Alignment for Cloud Skills', org: 'EduSpark Learning', facultyId: 'U-FAC-02', facultyName: 'Dr. Anil Kapoor', expertise: 'Cloud Computing', skills: ['SQL', 'Python'], duration: '3 months', type: 'Consultancy', status: 'In Progress', description: 'Review and update the cloud computing elective curriculum with industry input.' }
    ],
    projects: [
      { id: 'PRJ-01', title: 'Campus Lost & Found App', student: 'Priya Nair', category: 'Web Development', progress: 60, deadline: '2026-04-25', status: 'Active', facultyId: 'U-FAC-01' },
      { id: 'PRJ-02', title: 'Attendance Analytics Dashboard', student: 'Aarav Sharma', category: 'Data Analytics', progress: 35, deadline: '2026-05-10', status: 'Active', facultyId: 'U-FAC-01' }
    ],
    notifications: [
      { id: 'NTF-01', userId: 'U-STU-01', text: 'Application submitted successfully for Data Analytics Intern.', time: '2026-02-02 10:14', read: false },
      { id: 'NTF-02', userId: 'U-STU-01', text: 'Your application is now Under Review.', time: '2026-02-03 09:02', read: false },
      { id: 'NTF-03', userId: 'U-STU-01', text: 'New opportunity published: Junior Full-Stack Developer.', time: '2026-01-22 16:40', read: true },
      { id: 'NTF-04', userId: 'U-IND-01', text: 'New application received for Frontend Developer Intern.', time: '2026-02-04 12:20', read: false },
      { id: 'NTF-05', userId: 'U-FAC-01', text: 'Collaboration proposal received from EduSpark Learning.', time: '2026-02-06 11:10', read: false },
      { id: 'NTF-06', userId: 'U-ADM-01', text: 'Organization verification completed for EduSpark Learning.', time: '2026-02-07 08:45', read: true }
    ],
    roadmap: {
      'Full-Stack Developer': [
        { id: 'RM-1', topic: 'Advanced JavaScript & ES6+', resource: 'MDN Web Docs · JS.info', done: true, progress: 100 },
        { id: 'RM-2', topic: 'React Fundamentals', resource: 'React official docs', done: false, progress: 40 },
        { id: 'RM-3', topic: 'REST APIs & Node.js', resource: 'Node.js learning path', done: false, progress: 0 },
        { id: 'RM-4', topic: 'SQL & Database Design', resource: 'SQLBolt · PostgreSQL tutorial', done: false, progress: 0 },
        { id: 'RM-5', topic: 'System Design Basics', resource: 'System Design Primer (GitHub)', done: false, progress: 0 }
      ],
      'Data Analyst': [
        { id: 'RM-6', topic: 'Python for Data Analysis', resource: 'Pandas documentation', done: true, progress: 100 },
        { id: 'RM-7', topic: 'SQL Queries & Joins', resource: 'Mode Analytics SQL tutorial', done: false, progress: 60 },
        { id: 'RM-8', topic: 'Data Visualization with Chart.js', resource: 'Chart.js official docs', done: false, progress: 20 },
        { id: 'RM-9', topic: 'Statistics Fundamentals', resource: 'Khan Academy Statistics', done: false, progress: 0 }
      ]
    },
    studentSkills: {
      'U-STU-01': { HTML: 75, CSS: 70, JavaScript: 65, Python: 80, SQL: 60, Communication: 85, 'Problem-solving': 78 }
    },
    assessmentQuestions: [
      { q: 'Which HTML5 tag is used to embed JavaScript?', options: ['<script>', '<js>', '<javascript>', '<code>'], answer: 0 },
      { q: 'Which CSS property controls text size?', options: ['font-style', 'font-size', 'text-size', 'font-weight'], answer: 1 },
      { q: 'What does `document.querySelector()` return?', options: ['All matching elements', 'The first matching element', 'A NodeList', 'An array'], answer: 1 },
      { q: 'Which SQL clause filters grouped rows?', options: ['WHERE', 'HAVING', 'GROUP BY', 'ORDER BY'], answer: 1 },
      { q: 'Which Python type is immutable?', options: ['list', 'dict', 'tuple', 'set'], answer: 2 }
    ],
    activityLogs: [
      { id: 'LOG-1', action: 'User login (student@telvix.demo)', time: '2026-02-07 09:12' },
      { id: 'LOG-2', action: 'Opportunity approved: OPP-03', time: '2026-02-07 08:50' },
      { id: 'LOG-3', action: 'Organization verified: EduSpark Learning', time: '2026-02-07 08:45' }
    ]
  };
}

/* ============================================================
   3. STATE
   ============================================================ */
let appData = null;
let currentUser = null;
let currentView = 'landing';
let currentDashboardPage = 'overview';
let charts = {};

/* ============================================================
   4. LOCALSTORAGE HELPERS
   ============================================================ */
function safeParse(str) {
  try { return JSON.parse(str); } catch (e) { return null; }
}

function loadData() {
  const raw = localStorage.getItem(LS_KEYS.data);
  const parsed = raw ? safeParse(raw) : null;
  if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.opportunities)) {
    appData = getDefaultData();
    saveData();
  } else {
    const def = getDefaultData();
    appData = Object.assign({}, def, parsed);
    ['users', 'opportunities', 'applications', 'collaborations', 'projects',
     'notifications', 'organizations', 'skillTaxonomy', 'activityLogs'].forEach(k => {
      if (!Array.isArray(appData[k])) appData[k] = def[k];
    });
    if (!appData.roadmap || typeof appData.roadmap !== 'object') appData.roadmap = def.roadmap;
    if (!appData.studentSkills || typeof appData.studentSkills !== 'object') appData.studentSkills = def.studentSkills;
  }
}

function saveData() {
  try {
    localStorage.setItem(LS_KEYS.data, JSON.stringify(appData));
  } catch (e) {
    console.warn('LocalStorage write failed', e);
  }
}

function loadSession() {
  const raw = localStorage.getItem(LS_KEYS.session);
  const parsed = raw ? safeParse(raw) : null;
  if (parsed && DEMO_ACCOUNTS[parsed.email]) {
    currentUser = DEMO_ACCOUNTS[parsed.email];
    currentUser.email = parsed.email;
  }
}

function saveSession() {
  if (currentUser) {
    localStorage.setItem(LS_KEYS.session, JSON.stringify({ email: currentUser.email }));
  } else {
    localStorage.removeItem(LS_KEYS.session);
  }
}

/* ============================================================
   5. UI HELPERS
   ============================================================ */
function $(sel, root = document) { return root.querySelector(sel); }
function $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function uid(prefix = 'ID') {
  return prefix + '-' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function nowStamp() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/* Toast notifications */
function showToast(message, type = 'info') {
  const container = $('#toastContainer');
  if (!container) return;
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i><span>${escapeHtml(message)}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateX(40px)';
    setTimeout(() => el.remove(), 320);
  }, 3200);
}

/* Modal */
function openModal(html) {
  const overlay = $('#modalOverlay');
  const content = $('#modalContent');
  content.innerHTML = html;
  overlay.classList.remove('hidden');
  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
}

function closeModal() {
  const overlay = $('#modalOverlay');
  overlay.classList.add('hidden');
  $('#modalContent').innerHTML = '';
}

/* Destroy charts before re-rendering */
function destroyCharts() {
  Object.values(charts).forEach(c => { try { c.destroy(); } catch (e) {} });
  charts = {};
}

/* ============================================================
   6. DATA ACCESS HELPERS
   ============================================================ */
function getUser(email) {
  return appData.users.find(u => u.email === email) || null;
}

function getUserById(id) {
  return appData.users.find(u => u.id === id) || null;
}

function getOpportunityById(id) {
  return appData.opportunities.find(o => o.id === id) || null;
}

function getApprovedOpportunities() {
  return appData.opportunities.filter(o => o.status === 'Approved');
}

function getStudentApplications(studentId) {
  return appData.applications.filter(a => a.studentId === studentId);
}

function getNotificationsFor(userId) {
  return appData.notifications.filter(n => n.userId === userId);
}

function getUnreadCount(userId) {
  return appData.notifications.filter(n => n.userId === userId && !n.read).length;
}

function addNotification(userId, text) {
  appData.notifications.unshift({
    id: uid('NTF'), userId, text, time: nowStamp(), read: false
  });
  saveData();
  updateNotifBadge();
}

/* ============================================================
   7. VIEW NAVIGATION (SPA)
   ============================================================ */
function showView(viewName, page) {
  destroyCharts();
  $$('.view').forEach(v => v.classList.remove('active'));

  if (viewName === 'landing' || viewName === 'login' || viewName === 'register') {
    const target = $('#view-' + viewName);
    if (target) target.classList.add('active');
    currentView = viewName;
    window.scrollTo(0, 0);
    if (viewName === 'landing') renderLanding();
    return;
  }

  if (viewName === 'dashboard') {
    if (!currentUser) { showView('login'); return; }
    $('#view-dashboard').classList.add('active');
    currentView = 'dashboard';
    currentDashboardPage = page || 'overview';
    buildSidebar();
    updateHeaderUser();
    renderDashboardPage(currentDashboardPage);
  }
}

function navigate(view, page) {
  showView(view, page);
  closeMobileMenus();
}

/* ============================================================
   8. AUTHENTICATION
   ============================================================ */
function handleLogin(e) {
  e.preventDefault();
  const email = $('#loginEmail').value.trim().toLowerCase();
  const password = $('#loginPassword').value;
  const btn = e.target.querySelector('button[type="submit"]');

  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';

  setTimeout(() => {
    const account = DEMO_ACCOUNTS[email];
    if (!account || password !== DEMO_PASSWORD) {
      showToast('Invalid email or password. Use the demo credentials shown.', 'error');
      btn.disabled = false;
      btn.innerHTML = originalText;
      return;
    }
    currentUser = Object.assign({}, account, { email });
    saveSession();
    showToast(`Welcome back, ${account.name}!`, 'success');
    btn.disabled = false;
    btn.innerHTML = originalText;
    navigate('dashboard', 'overview');
  }, 450);
}

function handleRegister(e) {
  e.preventDefault();
  const name = $('#regName').value.trim();
  const email = $('#regEmail').value.trim().toLowerCase();
  const pass = $('#regPassword').value;
  const confirm = $('#regConfirm').value;
  const role = $('#regRole').value;

  if (!name || !email || !pass) { showToast('Please fill all required fields.', 'error'); return; }
  if (pass.length < 6) { showToast('Password must be at least 6 characters.', 'error'); return; }
  if (pass !== confirm) { showToast('Passwords do not match.', 'error'); return; }
  if (DEMO_ACCOUNTS[email] || getUser(email)) {
    showToast('An account with this email already exists in the demo.', 'error'); return;
  }
  if (role === 'admin') { showToast('Admin accounts cannot be self-registered.', 'error'); return; }

  showToast('Registration simulated. Use a demo account to explore the prototype.', 'info');
  setTimeout(() => {
    navigate('login');
    $('#loginEmail').value = email;
  }, 900);
}

function logout() {
  currentUser = null;
  saveSession();
  closeMobileMenus();
  showToast('You have been logged out.', 'info');
  navigate('landing');
}

/* ============================================================
   9. LANDING PAGE RENDERING
   ============================================================ */
function renderLanding() {
  const features = [
    { icon: 'fa-project-diagram', title: 'Smart Skill Mapping', text: 'Map academic skills to industry demand with clear visual insight.' },
    { icon: 'fa-briefcase', title: 'Internship & Job Opportunities', text: 'Discover curated internships, jobs, and live projects from verified organizations.' },
    { icon: 'fa-handshake', title: 'Industry–Academia Collaboration', text: 'Connect faculty and industry for research, consultancy, and project work.' },
    { icon: 'fa-flask', title: 'Research & Live Projects', text: 'Collaborate on applied projects that solve real problems.' },
    { icon: 'fa-chart-line', title: 'Skill Gap Analysis', text: 'Understand the distance between current and required skills.' },
    { icon: 'fa-road', title: 'Personalized Learning Roadmaps', text: 'Follow structured milestones to reach your target role.' }
  ];
  const fg = $('#landingFeatureGrid');
  if (fg) fg.innerHTML = features.map(f => `
    <div class="feature-card">
      <i class="fas ${f.icon}"></i>
      <h3>${escapeHtml(f.title)}</h3>
      <p>${escapeHtml(f.text)}</p>
    </div>`).join('');

  const approved = getApprovedOpportunities().slice(0, 3);
  const featGrid = $('#landingFeaturedGrid');
  if (featGrid) {
    featGrid.innerHTML = approved.length ? approved.map(o => opportunityCardHtml(o, false)).join('')
      : `<div class="empty-state"><i class="fas fa-briefcase"></i><h4>No featured opportunities yet</h4><p>Check back soon.</p></div>`;
  }
}

/* ============================================================
   10. OPPORTUNITY CARD RENDERING
   ============================================================ */
function opportunityCardHtml(o, showApply = true) {
  const skills = (o.skills || []).slice(0, 4).map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('');
  const applyBtn = showApply
    ? `<button class="btn btn-primary btn-sm" data-action="apply" data-id="${o.id}">Apply Now</button>`
    : '';
  return `
    <div class="opp-card">
      <div class="opp-org">${escapeHtml(o.org)}</div>
      <div class="opp-title">${escapeHtml(o.title)}</div>
      <div class="opp-meta">
        <span><i class="fas fa-map-marker-alt"></i>${escapeHtml(o.location)}</span>
        <span><i class="fas fa-laptop-house"></i>${escapeHtml(o.mode)}</span>
        <span><i class="fas fa-coins"></i>${escapeHtml(o.stipend)}</span>
        <span><i class="fas fa-calendar-alt"></i>${escapeHtml(o.deadline)}</span>
      </div>
      <div class="opp-skills">${skills}</div>
      <div class="opp-actions">
        <button class="btn btn-outline btn-sm" data-action="view-opp" data-id="${o.id}">View Details</button>
        ${applyBtn}
      </div>
    </div>`;
}

/* ============================================================
   11. SIDEBAR MENUS BY ROLE
   ============================================================ */
const SIDEBAR_MENUS = {
  student: [
    { page: 'overview', icon: 'fa-th-large', label: 'Overview' },
    { page: 'profile', icon: 'fa-user', label: 'My Profile' },
    { page: 'skills', icon: 'fa-brain', label: 'My Skills' },
    { page: 'assessment', icon: 'fa-clipboard-check', label: 'Skill Assessment' },
    { page: 'gap', icon: 'fa-chart-bar', label: 'Skill Gap Analysis' },
    { page: 'recommended', icon: 'fa-star', label: 'Recommended Opportunities' },
    { page: 'opps', icon: 'fa-briefcase', label: 'Internships & Jobs' },
    { page: 'applications', icon: 'fa-file-alt', label: 'My Applications' },
    { page: 'roadmap', icon: 'fa-road', label: 'Learning Roadmap' },
    { page: 'projects', icon: 'fa-project-diagram', label: 'Projects' },
    { page: 'notifications', icon: 'fa-bell', label: 'Notifications' },
    { page: 'settings', icon: 'fa-cog', label: 'Settings' }
  ],
  faculty: [
    { page: 'overview', icon: 'fa-th-large', label: 'Overview' },
    { page: 'profile', icon: 'fa-user', label: 'Faculty Profile' },
    { page: 'expertise', icon: 'fa-lightbulb', label: 'Expertise & Skills' },
    { page: 'research', icon: 'fa-flask', label: 'Research Interests' },
    { page: 'collaborations', icon: 'fa-handshake', label: 'Industry Collaborations' },
    { page: 'student-projects', icon: 'fa-project-diagram', label: 'Student Projects' },
    { page: 'internships-training', icon: 'fa-chalkboard-teacher', label: 'Internships & Training' },
    { page: 'workshops', icon: 'fa-calendar-alt', label: 'Workshops & FDPs' },
    { page: 'consultancy', icon: 'fa-briefcase', label: 'Consultancy Opportunities' },
    { page: 'notifications', icon: 'fa-bell', label: 'Notifications' },
    { page: 'settings', icon: 'fa-cog', label: 'Settings' }
  ],
  industry: [
    { page: 'overview', icon: 'fa-th-large', label: 'Overview' },
    { page: 'profile', icon: 'fa-building', label: 'Organization Profile' },
    { page: 'post-opp', icon: 'fa-plus-circle', label: 'Post Opportunity' },
    { page: 'manage-opps', icon: 'fa-tasks', label: 'Manage Opportunities' },
    { page: 'applications', icon: 'fa-file-alt', label: 'Applications' },
    { page: 'talent', icon: 'fa-users', label: 'Discover Student Talent' },
    { page: 'skill-analytics', icon: 'fa-chart-pie', label: 'Skill Demand Analytics' },
    { page: 'faculty-collab', icon: 'fa-handshake', label: 'Faculty Collaboration' },
    { page: 'projects', icon: 'fa-project-diagram', label: 'Projects' },
    { page: 'interviews', icon: 'fa-calendar-check', label: 'Interviews' },
    { page: 'notifications', icon: 'fa-bell', label: 'Notifications' },
    { page: 'settings', icon: 'fa-cog', label: 'Settings' }
  ],
  admin: [
    { page: 'overview', icon: 'fa-th-large', label: 'Overview' },
    { page: 'users', icon: 'fa-users-cog', label: 'User Management' },
    { page: 'student-dir', icon: 'fa-user-graduate', label: 'Student Directory' },
    { page: 'faculty-dir', icon: 'fa-chalkboard-teacher', label: 'Faculty Directory' },
    { page: 'industry-dir', icon: 'fa-building', label: 'Industry Directory' },
    { page: 'org-verify', icon: 'fa-check-shield', label: 'Organization Verification' },
    { page: 'opp-mod', icon: 'fa-gavel', label: 'Opportunity Management' },
    { page: 'collab-mgmt', icon: 'fa-handshake', label: 'Collaboration Management' },
    { page: 'taxonomy', icon: 'fa-sitemap', label: 'Skill Taxonomy' },
    { page: 'assessment-mgmt', icon: 'fa-clipboard-list', label: 'Assessment Management' },
    { page: 'analytics', icon: 'fa-chart-line', label: 'Reports & Analytics' },
    { page: 'logs', icon: 'fa-history', label: 'Activity Logs' },
    { page: 'settings', icon: 'fa-cog', label: 'Settings' }
  ]
};

function buildSidebar() {
  const nav = $('#sidebarNav');
  if (!nav || !currentUser) return;
  const menu = SIDEBAR_MENUS[currentUser.role] || [];
  nav.innerHTML = menu.map(m => `
    <button data-page="${m.page}" class="${m.page === currentDashboardPage ? 'active' : ''}">
      <i class="fas ${m.icon}"></i><span>${escapeHtml(m.label)}</span>
    </button>`).join('');

  nav.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      currentDashboardPage = b.dataset.page;
      buildSidebar();
      renderDashboardPage(currentDashboardPage);
      closeMobileMenus();
    });
  });
}

function updateHeaderUser() {
  const el = $('#userGreeting');
  if (el && currentUser) el.textContent = currentUser.name;
  updateNotifBadge();
}

function updateNotifBadge() {
  const badge = $('#notifBadge');
  if (!badge || !currentUser) return;
  const n = getUnreadCount(currentUser.id);
  if (n > 0) { badge.textContent = n > 99 ? '99+' : n; badge.classList.remove('hidden'); }
  else badge.classList.add('hidden');
}

/* ============================================================
   12. DASHBOARD ROUTER
   ============================================================ */
function renderDashboardPage(page) {
  const content = $('#dashboardContent');
  if (!content || !currentUser) return;
  destroyCharts();
  content.innerHTML = '';

  const role = currentUser.role;
  try {
    if (role === 'student') renderStudentPage(page, content);
    else if (role === 'faculty') renderFacultyPage(page, content);
    else if (role === 'industry') renderIndustryPage(page, content);
    else if (role === 'admin') renderAdminPage(page, content);
  } catch (err) {
    console.error(err);
    content.innerHTML = `<div class="empty-state"><i class="fas fa-exclamation-triangle"></i><h4>Something went wrong</h4><p>${escapeHtml(err.message)}</p></div>`;
  }
}

/* ============================================================
   13. STUDENT DASHBOARD
   ============================================================ */
function studentSkillLevels() {
  return appData.studentSkills[currentUser.id] || {
    HTML: 60, CSS: 60, JavaScript: 60, Python: 60, SQL: 60,
    Communication: 70, 'Problem-solving': 70
  };
}

function renderStudentPage(page, content) {
  const user = getUser(currentUser.id) || { name: currentUser.name };
  switch (page) {
    case 'overview': return renderStudentOverview(content, user);
    case 'profile': return renderStudentProfile(content, user);
    case 'skills': return renderSkillsPage(content);
    case 'assessment': return renderAssessmentPage(content);
    case 'gap': return renderSkillGapPage(content);
    case 'recommended': return renderOpportunitiesPage(content, true);
    case 'opps': return renderOpportunitiesPage(content, false);
    case 'applications': return renderStudentApplications(content);
    case 'roadmap': return renderRoadmapPage(content);
    case 'projects': return renderStudentProjects(content);
    case 'notifications': return renderNotificationsPage(content);
    case 'settings': return renderSettingsPage(content);
    default: return renderStudentOverview(content, user);
  }
}

function renderStudentOverview(content, user) {
  const apps = getStudentApplications(currentUser.id);
  const skills = studentSkillLevels();
  const skillCount = Object.keys(skills).length;
  const approved = getApprovedOpportunities();
  const profileFields = [user.name, user.course, user.university, user.gradYear];
  const completion = Math.round((profileFields.filter(Boolean).length / profileFields.length) * 100);

  const upcoming = approved
    .filter(o => o.deadline && o.deadline >= todayISO())
    .sort((a, b) => a.deadline.localeCompare(b.deadline))
    .slice(0, 3);

  content.innerHTML = `
    <h2 class="page-title">Welcome back, ${escapeHtml(user.name.split(' ')[0])} 👋</h2>
    <p class="page-subtitle">Here is a snapshot of your TELVIX activity.</p>

    <div class="stats-grid">
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-user-check"></i></div>
        <div class="stat-value">${completion}%</div><div class="stat-label">Profile completion</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-brain"></i></div>
        <div class="stat-value">${skillCount}</div><div class="stat-label">Assessed skills</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-star"></i></div>
        <div class="stat-value">${approved.length}</div><div class="stat-label">Recommended opportunities</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-file-alt"></i></div>
        <div class="stat-value">${apps.length}</div><div class="stat-label">Applications submitted</div></div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Upcoming deadlines</h3>
        <button class="btn btn-outline btn-sm" data-nav-dashboard="opps">Browse all</button></div>
      ${upcoming.length ? `<div class="opp-skills">${upcoming.map(o => `
        <div style="padding:10px 0;border-bottom:1px solid var(--border);width:100%">
          <strong>${escapeHtml(o.title)}</strong>
          <div class="text-small text-muted">${escapeHtml(o.org)} · Deadline ${escapeHtml(o.deadline)}</div>
        </div>`).join('')}</div>`
      : `<div class="empty-state"><i class="fas fa-calendar"></i><h4>No upcoming deadlines</h4><p>New opportunities will appear here.</p></div>`}
    </div>

    <div class="card">
      <div class="card-header"><h3>Recommended for you</h3>
        <button class="btn btn-outline btn-sm" data-nav-dashboard="recommended">See all</button></div>
      <div class="opportunity-grid">
        ${approved.slice(0, 2).map(o => opportunityCardHtml(o, true)).join('') || '<p class="text-muted">No opportunities available.</p>'}
      </div>
    </div>`;
}

function renderStudentProfile(content, user) {
  content.innerHTML = `
    <h2 class="page-title">My Profile</h2>
    <p class="page-subtitle">Keep your profile updated to improve recommendations.</p>
    <div class="profile-grid">
      <div class="profile-avatar-card">
        <div class="profile-avatar">${escapeHtml(user.name.charAt(0))}</div>
        <h3>${escapeHtml(user.name)}</h3>
        <div class="role">Student</div>
        <p class="text-small text-muted mt-1">${escapeHtml(user.email || '')}</p>
        <button class="btn btn-outline btn-sm mt-2" data-action="edit-profile">Edit Profile</button>
      </div>
      <div class="card">
        <h3 class="mb-1">Personal details</h3>
        <div class="profile-details">
          <div class="detail-row"><span class="detail-label">Full name</span><span class="detail-value">${escapeHtml(user.name)}</span></div>
          <div class="detail-row"><span class="detail-label">Course</span><span class="detail-value">${escapeHtml(user.course || '—')}</span></div>
          <div class="detail-row"><span class="detail-label">University</span><span class="detail-value">${escapeHtml(user.university || '—')}</span></div>
          <div class="detail-row"><span class="detail-label">Graduation year</span><span class="detail-value">${escapeHtml(user.gradYear || '—')}</span></div>
          <div class="detail-row"><span class="detail-label">Career interests</span><span class="detail-value">Full-Stack Development, Data Analytics</span></div>
          <div class="detail-row"><span class="detail-label">Resume</span><span class="detail-value">
            <input type="file" id="resumeInput" style="display:none" accept=".pdf,.doc,.docx">
            <button class="btn btn-outline btn-sm" data-action="upload-resume">Upload Resume</button>
            <span id="resumeFilename" class="text-small text-muted ml-1"></span>
          </span></div>
        </div>
      </div>
    </div>`;
}

function renderSkillsPage(content) {
  const skills = studentSkillLevels();
  content.innerHTML = `
    <h2 class="page-title">My Skills</h2>
    <p class="page-subtitle">Update your demonstration skill levels. Changes are saved locally.</p>
    <div class="card">
      <div class="skills-list" id="skillsList">
        ${Object.entries(skills).map(([name, level]) => `
          <div class="skill-row">
            <span class="skill-name">${escapeHtml(name)}</span>
            <div class="skill-bar-wrap"><div class="progress-bar"><div class="progress-fill" style="width:${Math.min(100, Math.max(0, level))}%"></div></div></div>
            <div class="skill-level"><input type="number" min="0" max="100" value="${level}" data-skill="${escapeHtml(name)}"></div>
          </div>`).join('')}
      </div>
      <button class="btn btn-primary mt-2" data-action="save-skills">Save skill levels</button>
    </div>`;
}

function renderAssessmentPage(content) {
  const qs = appData.assessmentQuestions;
  content.innerHTML = `
    <h2 class="page-title">Skill Assessment</h2>
    <p class="page-subtitle">Answer the questions to get an instant score.</p>
    <div class="card" id="assessmentCard">
      <form id="assessmentForm">
        ${qs.map((q, i) => `
          <div class="question" data-qindex="${i}">
            <p class="q-text">${i + 1}. ${escapeHtml(q.q)}</p>
            ${q.options.map((opt, oi) => `
              <label class="option"><input type="radio" name="q${i}" value="${oi}"><span>${escapeHtml(opt)}</span></label>`).join('')}
          </div>`).join('')}
        <button type="submit" class="btn btn-primary">Submit Assessment</button>
      </form>
    </div>
    <div id="assessmentResult"></div>`;
}

function renderSkillGapPage(content) {
  const targetRole = 'Full-Stack Developer';
  const required = { HTML: 85, CSS: 80, JavaScript: 90, Python: 70, SQL: 75 };
  const current = studentSkillLevels();

  content.innerHTML = `
    <h2 class="page-title">Skill Gap Analysis</h2>
    <p class="page-subtitle">Compare your current proficiency against the target role: <strong>${escapeHtml(targetRole)}</strong>.</p>
    <div class="chart-card mb-2">
      <h3>Current vs. Required proficiency</h3>
      <div class="chart-container"><canvas id="gapChart"></canvas></div>
    </div>
    <div class="card">
      <h3 class="mb-1">Missing or underdeveloped skills</h3>
      ${Object.entries(required).filter(([s, r]) => (current[s] || 0) < r).map(([s, r]) => {
        const c = current[s] || 0;
        return `<div class="skill-row">
          <span class="skill-name">${escapeHtml(s)}</span>
          <div class="skill-bar-wrap"><div class="progress-bar"><div class="progress-fill" style="width:${c}%;background:#F59E0B"></div></div></div>
          <span class="skill-level">${c}/${r}</span>
        </div>`;
      }).join('') || '<p class="text-muted">Great! You meet all requirements.</p>'}
    </div>
    <div class="card">
      <h3 class="mb-1">Suggested learning resources</h3>
      <ul class="text-small" style="padding-left:18px">
        <li>MDN Web Docs for JavaScript and CSS deep dives.</li>
        <li>React official tutorials for component thinking.</li>
        <li>PostgreSQL Tutorial for SQL practice.</li>
        <li>Frontend Mentor challenges for portfolio projects.</li>
      </ul>
    </div>`;

  setTimeout(() => {
    const ctx = document.getElementById('gapChart');
    if (!ctx) return;
    charts.gap = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(required),
        datasets: [
          { label: 'Current', data: Object.keys(required).map(k => current[k] || 0), backgroundColor: '#0F9D92' },
          { label: 'Required', data: Object.values(required), backgroundColor: '#28445F' }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }
    });
  }, 50);
}

function renderOpportunitiesPage(content, recommended) {
  const approved = getApprovedOpportunities();
  const cats = [...new Set(approved.map(o => o.category))];

  content.innerHTML = `
    <h2 class="page-title">${recommended ? 'Recommended Opportunities' : 'Internships & Jobs'}</h2>
    <p class="page-subtitle">${approved.length} approved opportunities currently available.</p>
    <div class="filters-bar">
      <input type="text" id="oppSearch" placeholder="Search title or organization...">
      <select id="oppCategory"><option value="">All categories</option>${cats.map(c => `<option>${escapeHtml(c)}</option>`).join('')}</select>
      <select id="oppMode"><option value="">All modes</option><option>Remote</option><option>On-site</option><option>Hybrid</option></select>
      <select id="oppSort"><option value="newest">Newest</option><option value="deadline">Deadline</option></select>
    </div>
    <div class="opportunity-grid" id="oppListGrid"></div>`;

  const render = () => {
    const q = ($('#oppSearch')?.value || '').toLowerCase();
    const cat = $('#oppCategory')?.value || '';
    const mode = $('#oppMode')?.value || '';
    const sort = $('#oppSort')?.value || 'newest';

    let list = approved.filter(o => {
      if (q && !(o.title.toLowerCase().includes(q) || o.org.toLowerCase().includes(q))) return false;
      if (cat && o.category !== cat) return false;
      if (mode && o.mode !== mode) return false;
      return true;
    });
    list.sort((a, b) => sort === 'deadline' ? a.deadline.localeCompare(b.deadline) : b.posted.localeCompare(a.posted));

    const grid = $('#oppListGrid');
    if (!grid) return;
    grid.innerHTML = list.length
      ? list.map(o => opportunityCardHtml(o, currentUser.role === 'student')).join('')
      : `<div class="empty-state"><i class="fas fa-search"></i><h4>No matching opportunities</h4><p>Try adjusting filters.</p></div>`;
  };
  render();
  ['oppSearch', 'oppCategory', 'oppMode', 'oppSort'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', render);
  });
}

function renderStudentApplications(content) {
  const apps = getStudentApplications(currentUser.id);
  content.innerHTML = `
    <h2 class="page-title">My Applications</h2>
    <p class="page-subtitle">Track your submitted applications and statuses.</p>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Opportunity</th><th>Organization</th><th>Applied</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${apps.length ? apps.map(a => {
            const o = getOpportunityById(a.oppId) || { title: '—', org: '—' };
            return `<tr>
              <td>${escapeHtml(o.title)}</td>
              <td>${escapeHtml(o.org)}</td>
              <td>${escapeHtml(a.date)}</td>
              <td><span class="status status-${a.status.toLowerCase().replace(/\s+/g, '-')}">${escapeHtml(a.status)}</span></td>
              <td><button class="btn btn-outline btn-sm" data-action="view-opp" data-id="${a.oppId}">View</button></td>
            </tr>`;
          }).join('') : `<tr><td colspan="5"><div class="empty-state"><i class="fas fa-file-alt"></i><h4>No applications yet</h4><p>Apply to an opportunity to see it here.</p></div></td></tr>`}
        </tbody>
      </table>
    </div>`;
}

function renderRoadmapPage(content) {
  const careers = Object.keys(appData.roadmap);
  const selected = appData._selectedRoadmap || careers[0];
  const items = appData.roadmap[selected] || [];

  content.innerHTML = `
    <h2 class="page-title">Learning Roadmap</h2>
    <p class="page-subtitle">Follow milestones for your target career. Progress is saved locally.</p>
    <div class="filters-bar">
      <select id="roadmapCareer">${careers.map(c => `<option ${c === selected ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}</select>
    </div>
    <div class="card">
      <div class="card-header"><h3>${escapeHtml(selected)}</h3>
        <span class="text-small text-muted">${items.filter(i => i.done).length}/${items.length} completed</span></div>
      <div id="roadmapList">
        ${items.map(item => `
          <div class="roadmap-item">
            <input type="checkbox" class="roadmap-check" data-roadmap-id="${item.id}" ${item.done ? 'checked' : ''}>
            <div class="roadmap-body">
              <h4>${escapeHtml(item.topic)}</h4>
              <p>${escapeHtml(item.resource)}</p>
              <div class="progress-bar"><div class="progress-fill" style="width:${item.progress}%"></div></div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;

  const sel = $('#roadmapCareer');
  if (sel) sel.addEventListener('change', () => {
    appData._selectedRoadmap = sel.value;
    saveData();
    renderRoadmapPage(content);
  });

  $$('.roadmap-check').forEach(cb => {
    cb.addEventListener('change', () => {
      const id = cb.dataset.roadmapId;
      items.forEach(i => {
        if (i.id === id) { i.done = cb.checked; i.progress = cb.checked ? 100 : i.progress; }
      });
      saveData();
      if (cb.checked) showToast('Learning milestone completed!', 'success');
      renderRoadmapPage(content);
    });
  });
}

function renderStudentProjects(content) {
  const projs = appData.projects.filter(p => p.facultyId === currentUser.id || p.student === 'Aarav Sharma');
  content.innerHTML = `
    <h2 class="page-title">Projects</h2>
    <p class="page-subtitle">Projects you are involved in.</p>
    <div class="card">
      ${projs.length ? projs.map(p => `
        <div style="padding:14px 0;border-bottom:1px solid var(--border)">
          <strong>${escapeHtml(p.title)}</strong>
          <div class="text-small text-muted">${escapeHtml(p.category)} · Deadline ${escapeHtml(p.deadline)}</div>
          <div class="progress-bar mt-1"><div class="progress-fill" style="width:${p.progress}%"></div></div>
          <div class="text-small text-muted mt-1">${p.progress}% complete</div>
        </div>`).join('') : '<div class="empty-state"><i class="fas fa-project-diagram"></i><h4>No projects</h4><p>Projects will appear here.</p></div>'}
    </div>`;
}

/* ============================================================
   14. NOTIFICATIONS & SETTINGS (shared)
   ============================================================ */
function renderNotificationsPage(content) {
  const notifs = getNotificationsFor(currentUser.id);
  content.innerHTML = `
    <h2 class="page-title">Notifications</h2>
    <p class="page-subtitle">${notifs.filter(n => !n.read).length} unread notification(s).</p>
    <div class="flex-between mb-2">
      <span></span>
      <button class="btn btn-outline btn-sm" data-action="mark-all-read">Mark all as read</button>
    </div>
    <div class="notif-list">
      ${notifs.length ? notifs.map(n => `
        <div class="notif-item ${n.read ? '' : 'unread'}">
          <div class="notif-icon"><i class="fas fa-bell"></i></div>
          <div class="notif-body">
            <p>${escapeHtml(n.text)}</p>
            <span class="notif-time">${escapeHtml(n.time)}</span>
          </div>
          ${!n.read ? `<button class="btn btn-ghost btn-sm" data-action="mark-read" data-id="${n.id}">Mark read</button>` : ''}
        </div>`).join('') : '<div class="empty-state"><i class="fas fa-bell-slash"></i><h4>No notifications</h4><p>You are all caught up.</p></div>'}
    </div>`;
}

function renderSettingsPage(content) {
  content.innerHTML = `
    <h2 class="page-title">Settings</h2>
    <p class="page-subtitle">Manage your demo preferences.</p>
    <div class="card">
      <h3 class="mb-1">Demo account</h3>
      <p class="text-small text-muted mb-2">You are signed in as <strong>${escapeHtml(currentUser.name)}</strong> (${currentUser.role}).</p>
      <div class="form-group"><label>Email</label><input type="email" value="${escapeHtml(currentUser.email)}" disabled></div>
      <div class="form-group"><label>Role</label><input type="text" value="${escapeHtml(currentUser.role)}" disabled></div>
      <button class="btn btn-danger mt-1" data-action="logout">Logout</button>
    </div>
    <div class="card">
      <h3 class="mb-1">About this prototype</h3>
      <p class="text-small text-muted">TELVIX is a frontend-only demonstration. Authentication, data storage, and workflows are simulated in the browser using localStorage. Do not enter real sensitive information.</p>
    </div>`;
}

/* ============================================================
   15. FACULTY DASHBOARD
   ============================================================ */
function renderFacultyPage(page, content) {
  const user = getUser(currentUser.id) || { name: currentUser.name };
  switch (page) {
    case 'overview': return renderFacultyOverview(content, user);
    case 'profile': return renderFacultyProfile(content, user);
    case 'expertise': return renderFacultyExpertise(content);
    case 'research': return renderFacultyResearch(content);
    case 'collaborations': return renderFacultyCollaborations(content);
    case 'student-projects': return renderFacultyStudentProjects(content);
    case 'internships-training': return renderFacultyTraining(content);
    case 'workshops': return renderFacultyWorkshops(content);
    case 'consultancy': return renderFacultyConsultancy(content);
    case 'notifications': return renderNotificationsPage(content);
    case 'settings': return renderSettingsPage(content);
    default: return renderFacultyOverview(content, user);
  }
}

function renderFacultyOverview(content, user) {
  const collabs = appData.collaborations.filter(c => c.facultyId === currentUser.id);
  const projs = appData.projects.filter(p => p.facultyId === currentUser.id);
  content.innerHTML = `
    <h2 class="page-title">Welcome, ${escapeHtml(user.name)}</h2>
    <p class="page-subtitle">Faculty dashboard overview.</p>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-handshake"></i></div><div class="stat-value">${collabs.length}</div><div class="stat-label">Active collaborations</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-project-diagram"></i></div><div class="stat-value">${projs.length}</div><div class="stat-label">Ongoing projects</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-clock"></i></div><div class="stat-value">2</div><div class="stat-label">Pending proposals</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-calendar-alt"></i></div><div class="stat-value">3</div><div class="stat-label">Upcoming workshops</div></div>
    </div>
    <div class="card">
      <div class="card-header"><h3>Student projects under supervision</h3></div>
      ${projs.length ? projs.map(p => `
        <div style="padding:12px 0;border-bottom:1px solid var(--border)">
          <strong>${escapeHtml(p.title)}</strong> · <span class="text-small text-muted">${escapeHtml(p.student)}</span>
          <div class="progress-bar mt-1"><div class="progress-fill" style="width:${p.progress}%"></div></div>
        </div>`).join('') : '<p class="text-muted">No projects yet.</p>'}
    </div>`;
}

function renderFacultyProfile(content, user) {
  content.innerHTML = `
    <h2 class="page-title">Faculty Profile</h2>
    <p class="page-subtitle">Your professional profile.</p>
    <div class="profile-grid">
      <div class="profile-avatar-card">
        <div class="profile-avatar">${escapeHtml(user.name.charAt(0))}</div>
        <h3>${escapeHtml(user.name)}</h3>
        <div class="role">Faculty</div>
      </div>
      <div class="card">
        <div class="profile-details">
          <div class="detail-row"><span class="detail-label">Department</span><span class="detail-value">${escapeHtml(user.dept || '—')}</span></div>
          <div class="detail-row"><span class="detail-label">Designation</span><span class="detail-value">${escapeHtml(user.designation || '—')}</span></div>
          <div class="detail-row"><span class="detail-label">University</span><span class="detail-value">${escapeHtml(user.university || '—')}</span></div>
          <div class="detail-row"><span class="detail-label">Experience</span><span class="detail-value">12 years</span></div>
          <div class="detail-row"><span class="detail-label">Publications</span><span class="detail-value">18</span></div>
          <div class="detail-row"><span class="detail-label">Professional summary</span><span class="detail-value">Researcher in applied computing with a focus on industry collaboration and student mentorship.</span></div>
        </div>
      </div>
    </div>`;
}

function renderFacultyExpertise(content) {
  content.innerHTML = `
    <h2 class="page-title">Expertise & Skills</h2>
    <p class="page-subtitle">Areas of technical expertise and research.</p>
    <div class="card">
      <div class="opp-skills">
        ${['IoT', 'Embedded Systems', 'Python', 'Data Analysis', 'Cloud Computing', 'Machine Learning'].map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('')}
      </div>
    </div>`;
}

function renderFacultyResearch(content) {
  content.innerHTML = `
    <h2 class="page-title">Research Interests</h2>
    <p class="page-subtitle">Your active research areas.</p>
    <div class="card">
      <ul class="text-small" style="padding-left:18px">
        <li>Applied machine learning for sustainable systems</li>
        <li>IoT-based smart campus infrastructure</li>
        <li>Cloud-native curriculum design</li>
      </ul>
    </div>`;
}

function renderFacultyCollaborations(content) {
  const collabs = appData.collaborations;
  content.innerHTML = `
    <h2 class="page-title">Industry Collaborations</h2>
    <p class="page-subtitle">Browse proposals and express interest.</p>
    <div class="card">
      <div class="card-header"><h3>Proposals</h3>
        <button class="btn btn-primary btn-sm" data-action="new-collab">Submit Proposal</button></div>
      ${collabs.map(c => `
        <div style="padding:16px 0;border-bottom:1px solid var(--border)">
          <strong>${escapeHtml(c.title)}</strong>
          <div class="text-small text-muted">${escapeHtml(c.org)} · ${escapeHtml(c.type)} · ${escapeHtml(c.duration)}</div>
          <p class="text-small mt-1">${escapeHtml(c.description || '')}</p>
          <span class="status status-${c.status.toLowerCase().replace(/\s+/g,'-')}">${escapeHtml(c.status)}</span>
          <button class="btn btn-outline btn-sm ml-1" data-action="express-interest" data-id="${c.id}">Express Interest</button>
        </div>`).join('')}
    </div>`;
}

function renderFacultyStudentProjects(content) {
  const projs = appData.projects.filter(p => p.facultyId === currentUser.id);
  content.innerHTML = `
    <h2 class="page-title">Student Projects</h2>
    <p class="page-subtitle">Supervise and update project progress.</p>
    <div class="card">
      <div class="card-header"><h3>Projects</h3>
        <button class="btn btn-primary btn-sm" data-action="new-project">Create Demo Project</button></div>
      ${projs.length ? projs.map(p => `
        <div style="padding:14px 0;border-bottom:1px solid var(--border)">
          <strong>${escapeHtml(p.title)}</strong> · <span class="text-small text-muted">${escapeHtml(p.student)}</span>
          <div class="text-small text-muted">${escapeHtml(p.category)} · Deadline ${escapeHtml(p.deadline)}</div>
          <div class="progress-bar mt-1"><div class="progress-fill" style="width:${p.progress}%"></div></div>
          <div class="flex-between mt-1">
            <span class="text-small text-muted">${p.progress}% complete</span>
            <button class="btn btn-outline btn-sm" data-action="update-progress" data-id="${p.id}">Update progress</button>
          </div>
        </div>`).join('') : '<p class="text-muted">No projects yet.</p>'}
    </div>`;
}

function renderFacultyTraining(content) {
  content.innerHTML = `
    <h2 class="page-title">Internships & Training</h2>
    <p class="page-subtitle">Faculty development and industry training opportunities.</p>
    <div class="card">
      ${['Faculty Development Program — AI in Education', 'Industry Training — Cloud DevOps', 'Workshop — Research Methodology'].map(t => `
        <div style="padding:12px 0;border-bottom:1px solid var(--border)">
          <strong>${escapeHtml(t)}</strong>
          <button class="btn btn-outline btn-sm ml-1" data-action="save-training" data-title="${escapeHtml(t)}">Save</button>
        </div>`).join('')}
    </div>`;
}

function renderFacultyWorkshops(content) {
  content.innerHTML = `
    <h2 class="page-title">Workshops & FDPs</h2>
    <p class="page-subtitle">Upcoming workshops and faculty development programs.</p>
    <div class="card">
      ${['Design Thinking Workshop', 'Outcome-Based Education FDP', 'Industry-Academia Meetup'].map(w => `
        <div style="padding:12px 0;border-bottom:1px solid var(--border)">
          <strong>${escapeHtml(w)}</strong>
          <button class="btn btn-outline btn-sm ml-1" data-action="express-interest" data-id="workshop">Express Interest</button>
        </div>`).join('')}
    </div>`;
}

function renderFacultyConsultancy(content) {
  content.innerHTML = `
    <h2 class="page-title">Consultancy Opportunities</h2>
    <p class="page-subtitle">Industry consultancy proposals.</p>
    <div class="card">
      <div style="padding:12px 0;border-bottom:1px solid var(--border)">
        <strong>Cloud Curriculum Review — EduSpark Learning</strong>
        <p class="text-small text-muted">Review and modernize the cloud computing elective curriculum.</p>
        <button class="btn btn-outline btn-sm" data-action="express-interest" data-id="consultancy">Express Interest</button>
      </div>
    </div>`;
}

/* ============================================================
   16. INDUSTRY DASHBOARD
   ============================================================ */
function renderIndustryPage(page, content) {
  const user = getUser(currentUser.id) || { name: currentUser.name };
  switch (page) {
    case 'overview': return renderIndustryOverview(content, user);
    case 'profile': return renderIndustryProfile(content, user);
    case 'post-opp': return renderPostOpportunity(content);
    case 'manage-opps': return renderManageOpportunities(content);
    case 'applications': return renderIndustryApplications(content);
    case 'talent': return renderTalentDirectory(content);
    case 'skill-analytics': return renderSkillAnalytics(content);
    case 'faculty-collab': return renderFacultyCollab(content);
    case 'projects': return renderIndustryProjects(content);
    case 'interviews': return renderInterviews(content);
    case 'notifications': return renderNotificationsPage(content);
    case 'settings': return renderSettingsPage(content);
    default: return renderIndustryOverview(content, user);
  }
}

function renderIndustryOverview(content, user) {
  const myOpps = appData.opportunities.filter(o => o.orgId === currentUser.id);
  const myApps = appData.applications.filter(a => {
    const o = getOpportunityById(a.oppId);
    return o && o.orgId === currentUser.id;
  });
  const shortlisted = myApps.filter(a => a.status === 'Shortlisted');

  content.innerHTML = `
    <h2 class="page-title">${escapeHtml(user.name)} Overview</h2>
    <p class="page-subtitle">Business dashboard for your organization.</p>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-briefcase"></i></div><div class="stat-value">${myOpps.length}</div><div class="stat-label">Active opportunities</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-file-alt"></i></div><div class="stat-value">${myApps.length}</div><div class="stat-label">Total applications</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-user-check"></i></div><div class="stat-value">${shortlisted.length}</div><div class="stat-label">Shortlisted candidates</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-calendar-check"></i></div><div class="stat-value">4</div><div class="stat-label">Upcoming interviews</div></div>
    </div>
    <div class="card">
      <div class="card-header"><h3>Recent applications</h3></div>
      <div class="table-wrapper">
        <table>
          <thead><tr><th>Candidate</th><th>Opportunity</th><th>Date</th><th>Status</th></tr></thead>
          <tbody>
            ${myApps.length ? myApps.map(a => {
              const o = getOpportunityById(a.oppId) || {};
              return `<tr><td>${escapeHtml(a.studentName)}</td><td>${escapeHtml(o.title || '—')}</td>
                <td>${escapeHtml(a.date)}</td>
                <td><span class="status status-${a.status.toLowerCase().replace(/\s+/g,'-')}">${escapeHtml(a.status)}</span></td></tr>`;
            }).join('') : '<tr><td colspan="4"><p class="text-muted">No applications yet.</p></td></tr>'}
          </tbody>
        </table>
      </div>
    </div>`;
}

function renderIndustryProfile(content, user) {
  content.innerHTML = `
    <h2 class="page-title">Organization Profile</h2>
    <p class="page-subtitle">Your organization details.</p>
    <div class="card">
      <div class="profile-details">
        <div class="detail-row"><span class="detail-label">Organization name</span><span class="detail-value">${escapeHtml(user.name)}</span></div>
        <div class="detail-row"><span class="detail-label">Industry sector</span><span class="detail-value">${escapeHtml(user.sector || 'Software & IT Services')}</span></div>
        <div class="detail-row"><span class="detail-label">Location</span><span class="detail-value">Bengaluru, India</span></div>
        <div class="detail-row"><span class="detail-label">Company size</span><span class="detail-value">200–500 employees</span></div>
        <div class="detail-row"><span class="detail-label">Website</span><span class="detail-value">https://novatech.demo</span></div>
        <div class="detail-row"><span class="detail-label">Contact</span><span class="detail-value">talent@novatech.demo</span></div>
        <div class="detail-row"><span class="detail-label">Required skills</span><span class="detail-value">JavaScript, Python, SQL, Communication</span></div>
      </div>
    </div>`;
}

function renderPostOpportunity(content) {
  content.innerHTML = `
    <h2 class="page-title">Post Opportunity</h2>
    <p class="page-subtitle">Create an internship, job, live project, or apprenticeship.</p>
    <div class="card">
      <form id="postOppForm">
        <div class="form-group"><label>Title *</label><input type="text" id="oppTitle" required></div>
        <div class="form-row">
          <div class="form-group"><label>Type</label>
            <select id="oppType"><option>Internship</option><option>Job</option><option>Live Project</option><option>Apprenticeship</option></select></div>
          <div class="form-group"><label>Category</label>
            <select id="oppCat"><option>Web Development</option><option>Data Analytics</option><option>Artificial Intelligence</option><option>Database Management</option></select></div>
        </div>
        <div class="form-group"><label>Description *</label><textarea id="oppDesc" required></textarea></div>
        <div class="form-group"><label>Required skills (comma separated)</label><input type="text" id="oppSkills" placeholder="HTML, CSS, JavaScript"></div>
        <div class="form-group"><label>Eligibility criteria</label><input type="text" id="oppElig" placeholder="B.Tech CSE, 2026 batch"></div>
        <div class="form-row">
          <div class="form-group"><label>Location</label><input type="text" id="oppLoc" value="Bengaluru"></div>
          <div class="form-group"><label>Work mode</label>
            <select id="oppModeInput"><option>On-site</option><option>Remote</option><option>Hybrid</option></select></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Stipend / Salary</label><input type="text" id="oppStipend" placeholder="₹25,000 / month"></div>
          <div class="form-group"><label>Deadline *</label><input type="date" id="oppDeadline" required></div>
          <div class="form-group"><label>Openings</label><input type="number" id="oppOpenings" value="1" min="1"></div>
        </div>
        <button type="submit" class="btn btn-primary">Publish Opportunity</button>
      </form>
    </div>`;

  $('#postOppForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = $('#oppTitle').value.trim();
    const desc = $('#oppDesc').value.trim();
    const deadline = $('#oppDeadline').value;
    if (!title || !desc || !deadline) { showToast('Please fill all required fields.', 'error'); return; }

    const newOpp = {
      id: uid('OPP'),
      org: getUser(currentUser.id)?.name || currentUser.name,
      orgId: currentUser.id,
      title,
      type: $('#oppType').value,
      category: $('#oppCat').value,
      description: desc,
      responsibilities: desc,
      skills: $('#oppSkills').value.split(',').map(s => s.trim()).filter(Boolean),
      eligibility: $('#oppElig').value.trim(),
      location: $('#oppLoc').value.trim() || '—',
      mode: $('#oppModeInput').value,
      stipend: $('#oppStipend').value.trim() || '—',
      deadline,
      openings: parseInt($('#oppOpenings').value, 10) || 1,
      status: 'Pending',
      posted: todayISO(),
      applications: 0
    };
    appData.opportunities.unshift(newOpp);
    saveData();
    addNotification(currentUser.id, `New opportunity published: ${title}.`);
    showToast('Opportunity submitted for admin approval.', 'success');
    renderPostOpportunity(content);
  });
}

function renderManageOpportunities(content) {
  const myOpps = appData.opportunities.filter(o => o.orgId === currentUser.id);
  content.innerHTML = `
    <h2 class="page-title">Manage Opportunities</h2>
    <p class="page-subtitle">All opportunities posted by your organization.</p>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Title</th><th>Type</th><th>Status</th><th>Applications</th><th>Deadline</th></tr></thead>
        <tbody>
          ${myOpps.length ? myOpps.map(o => `
            <tr><td>${escapeHtml(o.title)}</td><td>${escapeHtml(o.type)}</td>
              <td><span class="status status-${o.status.toLowerCase()}">${escapeHtml(o.status)}</span></td>
              <td>${appData.applications.filter(a => a.oppId === o.id).length}</td>
              <td>${escapeHtml(o.deadline)}</td></tr>`).join('')
          : '<tr><td colspan="5"><p class="text-muted">No opportunities posted yet.</p></td></tr>'}
        </tbody>
      </table>
    </div>`;
}

function renderIndustryApplications(content) {
  const myApps = appData.applications.filter(a => {
    const o = getOpportunityById(a.oppId);
    return o && o.orgId === currentUser.id;
  });
  content.innerHTML = `
    <h2 class="page-title">Applications</h2>
    <p class="page-subtitle">Review candidates and update statuses.</p>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Candidate</th><th>Education</th><th>Skills</th><th>Opportunity</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${myApps.length ? myApps.map(a => {
            const o = getOpportunityById(a.oppId) || {};
            return `<tr>
              <td>${escapeHtml(a.studentName)}</td>
              <td>${escapeHtml(a.studentEducation || '—')}</td>
              <td>${escapeHtml(a.studentSkills || '—')}</td>
              <td>${escapeHtml(o.title || '—')}</td>
              <td>${escapeHtml(a.date)}</td>
              <td><span class="status status-${a.status.toLowerCase().replace(/\s+/g,'-')}">${escapeHtml(a.status)}</span></td>
              <td>
                <select class="status-select" data-app-id="${a.id}" style="padding:6px;border:1.5px solid var(--border);border-radius:6px;font-size:0.82rem">
                  ${['Applied', 'Under Review', 'Shortlisted', 'Rejected'].map(s => `<option ${s === a.status ? 'selected' : ''}>${s}</option>`).join('')}
                </select>
              </td>
            </tr>`;
          }).join('') : '<tr><td colspan="7"><p class="text-muted">No applications yet.</p></td></tr>'}
        </tbody>
      </table>
    </div>`;

  $$('.status-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const appId = sel.dataset.appId;
      const app = appData.applications.find(a => a.id === appId);
      if (!app) return;
      app.status = sel.value;
      saveData();
      addNotification(app.studentId, `Application status updated: ${sel.value}.`);
      showToast(`Application updated to ${sel.value}.`, 'success');
      renderIndustryApplications(content);
    });
  });
}

function renderTalentDirectory(content) {
  const students = appData.users.filter(u => u.role === 'student');
  content.innerHTML = `
    <h2 class="page-title">Discover Student Talent</h2>
    <p class="page-subtitle">Search fictional student profiles.</p>
    <div class="filters-bar">
      <input type="text" id="talentSearch" placeholder="Search by name...">
      <select id="talentYear"><option value="">All graduation years</option>${[...new Set(students.map(s => s.gradYear))].map(y => `<option>${y}</option>`).join('')}</select>
    </div>
    <div class="opportunity-grid" id="talentGrid">
      ${students.map(s => `
        <div class="opp-card">
          <div class="opp-org">${escapeHtml(s.course || '')}</div>
          <div class="opp-title">${escapeHtml(s.name)}</div>
          <div class="opp-meta"><span><i class="fas fa-university"></i>${escapeHtml(s.university || '')}</span>
            <span><i class="fas fa-calendar"></i>${escapeHtml(String(s.gradYear || ''))}</span></div>
          <div class="opp-skills">${['JavaScript', 'Python', 'SQL'].map(k => `<span class="skill-tag">${k}</span>`).join('')}</div>
        </div>`).join('')}
    </div>`;

  const render = () => {
    const q = ($('#talentSearch')?.value || '').toLowerCase();
    const y = $('#talentYear')?.value || '';
    const filtered = students.filter(s =>
      (!q || s.name.toLowerCase().includes(q)) &&
      (!y || String(s.gradYear) === y)
    );
    const grid = $('#talentGrid');
    if (grid) grid.innerHTML = filtered.length ? filtered.map(s => `
      <div class="opp-card">
        <div class="opp-org">${escapeHtml(s.course || '')}</div>
        <div class="opp-title">${escapeHtml(s.name)}</div>
        <div class="opp-meta"><span><i class="fas fa-university"></i>${escapeHtml(s.university || '')}</span></div>
      </div>`).join('') : '<p class="text-muted">No matching students.</p>';
  };
  ['talentSearch', 'talentYear'].forEach(id => document.getElementById(id)?.addEventListener('input', render));
}

function renderSkillAnalytics(content) {
  content.innerHTML = `
    <h2 class="page-title">Skill Demand Analytics</h2>
    <p class="page-subtitle">Demonstration data for industry insight.</p>
    <div class="chart-grid">
      <div class="chart-card"><h3>Most requested skills</h3><div class="chart-container"><canvas id="skillsDemandChart"></canvas></div></div>
      <div class="chart-card"><h3>Opportunities by category</h3><div class="chart-container"><canvas id="categoryChart"></canvas></div></div>
      <div class="chart-card"><h3>Application trends</h3><div class="chart-container"><canvas id="trendChart"></canvas></div></div>
      <div class="chart-card"><h3>Internship vs job distribution</h3><div class="chart-container"><canvas id="distChart"></canvas></div></div>
    </div>`;

  setTimeout(() => {
    const s = document.getElementById('skillsDemandChart');
    if (s) charts.skills = new Chart(s, {
      type: 'bar',
      data: { labels: ['JavaScript', 'Python', 'SQL', 'HTML/CSS', 'Communication'],
        datasets: [{ label: 'Requests', data: [42, 38, 30, 26, 22], backgroundColor: '#0F9D92' }] },
      options: { responsive: true, maintainAspectRatio: false }
    });
    const c = document.getElementById('categoryChart');
    if (c) charts.category = new Chart(c, {
      type: 'doughnut',
      data: { labels: ['Web Development', 'Data Analytics', 'AI', 'Database'],
        datasets: [{ data: [45, 25, 18, 12], backgroundColor: ['#0F9D92', '#28445F', '#3B82F6', '#F59E0B'] }] },
      options: { responsive: true, maintainAspectRatio: false }
    });
    const t = document.getElementById('trendChart');
    if (t) charts.trend = new Chart(t, {
      type: 'line',
      data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{ label: 'Applications', data: [12, 22, 18, 34, 28], borderColor: '#0F9D92', tension: 0.3, fill: false }] },
      options: { responsive: true, maintainAspectRatio: false }
    });
    const d = document.getElementById('distChart');
    if (d) charts.dist = new Chart(d, {
      type: 'pie',
      data: { labels: ['Internships', 'Jobs', 'Live Projects', 'Apprenticeships'],
        datasets: [{ data: [50, 25, 15, 10], backgroundColor: ['#0F9D92', '#28445F', '#3B82F6', '#F59E0B'] }] },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }, 60);
}

function renderFacultyCollab(content) {
  content.innerHTML = `
    <h2 class="page-title">Faculty Collaboration</h2>
    <p class="page-subtitle">Discover faculty experts and submit collaboration requests.</p>
    <div class="card">
      ${appData.users.filter(u => u.role === 'faculty').map(f => `
        <div style="padding:14px 0;border-bottom:1px solid var(--border)">
          <strong>${escapeHtml(f.name)}</strong>
          <div class="text-small text-muted">${escapeHtml(f.dept)} · ${escapeHtml(f.university)}</div>
          <button class="btn btn-outline btn-sm mt-1" data-action="collab-request" data-id="${f.id}">Request Collaboration</button>
        </div>`).join('')}
    </div>`;
}

function renderIndustryProjects(content) {
  const projects = appData.projects;
  content.innerHTML = `
    <h2 class="page-title">Projects</h2>
    <p class="page-subtitle">Ongoing projects with faculty and students.</p>
    <div class="card">
      ${projects.map(p => `
        <div style="padding:12px 0;border-bottom:1px solid var(--border)">
          <strong>${escapeHtml(p.title)}</strong>
          <div class="text-small text-muted">${escapeHtml(p.student)} · ${escapeHtml(p.status)}</div>
        </div>`).join('')}
    </div>`;
}

function renderInterviews(content) {
  content.innerHTML = `
    <h2 class="page-title">Interviews</h2>
    <p class="page-subtitle">Upcoming interview schedule.</p>
    <div class="card">
      ${['Aarav Sharma — 2026-03-10 10:00', 'Priya Nair — 2026-03-11 14:00'].map(i => `
        <div style="padding:12px 0;border-bottom:1px solid var(--border)">${escapeHtml(i)}</div>`).join('')}
    </div>`;
}

/* ============================================================
   17. ADMIN DASHBOARD
   ============================================================ */
function renderAdminPage(page, content) {
  switch (page) {
    case 'overview': return renderAdminOverview(content);
    case 'users': return renderAdminUsers(content);
    case 'student-dir': return renderAdminDirectory(content, 'student');
    case 'faculty-dir': return renderAdminDirectory(content, 'faculty');
    case 'industry-dir': return renderAdminDirectory(content, 'industry');
    case 'org-verify': return renderOrgVerification(content);
    case 'opp-mod': return renderOppModeration(content);
    case 'collab-mgmt': return renderCollabManagement(content);
    case 'taxonomy': return renderTaxonomy(content);
    case 'assessment-mgmt': return renderAssessmentManagement(content);
    case 'analytics': return renderAdminAnalytics(content);
    case 'logs': return renderActivityLogs(content);
    case 'settings': return renderSettingsPage(content);
    default: return renderAdminOverview(content);
  }
}

function renderAdminOverview(content) {
  const counts = {
    users: appData.users.length,
    students: appData.users.filter(u => u.role === 'student').length,
    faculty: appData.users.filter(u => u.role === 'faculty').length,
    industry: appData.users.filter(u => u.role === 'industry').length,
    opps: appData.opportunities.length,
    pending: appData.organizations.filter(o => o.status === 'Pending').length
  };
  content.innerHTML = `
    <h2 class="page-title">Admin Overview</h2>
    <p class="page-subtitle">All figures are fictional demonstration data.</p>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-users"></i></div><div class="stat-value">${counts.users}</div><div class="stat-label">Demo users</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-user-graduate"></i></div><div class="stat-value">${counts.students}</div><div class="stat-label">Students</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-chalkboard-teacher"></i></div><div class="stat-value">${counts.faculty}</div><div class="stat-label">Faculty members</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-building"></i></div><div class="stat-value">${counts.industry}</div><div class="stat-label">Industry accounts</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-briefcase"></i></div><div class="stat-value">${counts.opps}</div><div class="stat-label">Published opportunities</div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fas fa-shield-alt"></i></div><div class="stat-value">${counts.pending}</div><div class="stat-label">Pending verifications</div></div>
    </div>`;
}

function renderAdminUsers(content) {
  content.innerHTML = `
    <h2 class="page-title">User Management</h2>
    <p class="page-subtitle">Manage demonstration accounts.</p>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Registered</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${appData.users.map(u => `
            <tr>
              <td>${escapeHtml(u.name)}</td>
              <td>${escapeHtml(u.email)}</td>
              <td>${escapeHtml(u.role)}</td>
              <td>${escapeHtml(u.joined)}</td>
              <td><span class="status status-${u.status.toLowerCase()}">${escapeHtml(u.status)}</span></td>
              <td>
                <select class="user-status-select" data-user-id="${u.id}" style="padding:6px;border:1.5px solid var(--border);border-radius:6px;font-size:0.82rem">
                  ${['Active', 'Suspended'].map(s => `<option ${s === u.status ? 'selected' : ''}>${s}</option>`).join('')}
                </select>
              </td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;

  $$('.user-status-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const u = appData.users.find(x => x.id === sel.dataset.userId);
      if (!u) return;
      u.status = sel.value;
      saveData();
      showToast(`User status updated to ${sel.value}.`, 'success');
    });
  });
}

function renderAdminDirectory(content, role) {
  const users = appData.users.filter(u => u.role === role);
  content.innerHTML = `
    <h2 class="page-title">${role.charAt(0).toUpperCase() + role.slice(1)} Directory</h2>
    <p class="page-subtitle">${users.length} ${role} account(s) in the demo.</p>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Name</th><th>Email</th><th>Details</th><th>Joined</th><th>Status</th></tr></thead>
        <tbody>
          ${users.map(u => `
            <tr>
              <td>${escapeHtml(u.name)}</td>
              <td>${escapeHtml(u.email)}</td>
              <td>${escapeHtml(u.course || u.dept || u.sector || '—')}</td>
              <td>${escapeHtml(u.joined)}</td>
              <td><span class="status status-${u.status.toLowerCase()}">${escapeHtml(u.status)}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderOrgVerification(content) {
  content.innerHTML = `
    <h2 class="page-title">Organization Verification</h2>
    <p class="page-subtitle">Approve or reject sample organizations.</p>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Organization</th><th>Sector</th><th>Location</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${appData.organizations.map(o => `
            <tr>
              <td>${escapeHtml(o.name)}</td>
              <td>${escapeHtml(o.sector)}</td>
              <td>${escapeHtml(o.location)}</td>
              <td><span class="status status-${o.status.toLowerCase()}">${escapeHtml(o.status)}</span></td>
              <td>
                <button class="btn btn-success btn-sm" data-action="approve-org" data-id="${o.id}">Approve</button>
                <button class="btn btn-danger btn-sm" data-action="reject-org" data-id="${o.id}">Reject</button>
              </td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderOppModeration(content) {
  content.innerHTML = `
    <h2 class="page-title">Opportunity Management</h2>
    <p class="page-subtitle">Approve or reject submitted opportunities.</p>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Title</th><th>Organization</th><th>Category</th><th>Submitted</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${appData.opportunities.map(o => `
            <tr>
              <td>${escapeHtml(o.title)}</td>
              <td>${escapeHtml(o.org)}</td>
              <td>${escapeHtml(o.category)}</td>
              <td>${escapeHtml(o.posted)}</td>
              <td><span class="status status-${o.status.toLowerCase()}">${escapeHtml(o.status)}</span></td>
              <td>
                <button class="btn btn-success btn-sm" data-action="approve-opp" data-id="${o.id}">Approve</button>
                <button class="btn btn-danger btn-sm" data-action="reject-opp" data-id="${o.id}">Reject</button>
              </td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderCollabManagement(content) {
  content.innerHTML = `
    <h2 class="page-title">Collaboration Management</h2>
    <p class="page-subtitle">Monitor collaboration proposals.</p>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Title</th><th>Organization</th><th>Faculty</th><th>Type</th><th>Status</th></tr></thead>
        <tbody>
          ${appData.collaborations.map(c => `
            <tr>
              <td>${escapeHtml(c.title)}</td>
              <td>${escapeHtml(c.org)}</td>
              <td>${escapeHtml(c.facultyName)}</td>
              <td>${escapeHtml(c.type)}</td>
              <td><span class="status status-${c.status.toLowerCase().replace(/\s+/g,'-')}">${escapeHtml(c.status)}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderTaxonomy(content) {
  content.innerHTML = `
    <h2 class="page-title">Skill Taxonomy</h2>
    <p class="page-subtitle">Manage sample skill categories.</p>
    <div class="card">
      <form id="taxonomyForm" class="flex gap-1 mb-2">
        <input type="text" id="taxonomyName" placeholder="New skill category..." style="flex:1;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px" required>
        <button type="submit" class="btn btn-primary">Add</button>
      </form>
      <div class="skills-list">
        ${appData.skillTaxonomy.map(t => `
          <div class="skill-row">
            <span class="skill-name">${escapeHtml(t.name)}</span>
            <button class="btn btn-ghost btn-sm" data-action="delete-taxonomy" data-id="${t.id}"><i class="fas fa-trash"></i></button>
          </div>`).join('')}
      </div>
    </div>`;

  $('#taxonomyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#taxonomyName').value.trim();
    if (!name) return;
    appData.skillTaxonomy.push({ id: uid('SKT'), name });
    saveData();
    showToast('Skill category added.', 'success');
    renderTaxonomy(content);
  });
}

function renderAssessmentManagement(content) {
  content.innerHTML = `
    <h2 class="page-title">Assessment Management</h2>
    <p class="page-subtitle">Sample assessment questions.</p>
    <div class="card">
      ${appData.assessmentQuestions.map((q, i) => `
        <div style="padding:12px 0;border-bottom:1px solid var(--border)">
          <strong>Q${i + 1}. ${escapeHtml(q.q)}</strong>
          <div class="text-small text-muted">Correct: ${escapeHtml(q.options[q.answer])}</div>
        </div>`).join('')}
    </div>`;
}

function renderAdminAnalytics(content) {
  content.innerHTML = `
    <h2 class="page-title">Reports & Analytics</h2>
    <p class="page-subtitle">Interactive demonstration charts.</p>
    <div class="chart-grid">
      <div class="chart-card"><h3>User distribution by role</h3><div class="chart-container"><canvas id="roleChart"></canvas></div></div>
      <div class="chart-card"><h3>Opportunities by category</h3><div class="chart-container"><canvas id="adminCategoryChart"></canvas></div></div>
      <div class="chart-card"><h3>Application statuses</h3><div class="chart-container"><canvas id="appStatusChart"></canvas></div></div>
      <div class="chart-card"><h3>Skill demand</h3><div class="chart-container"><canvas id="adminSkillChart"></canvas></div></div>
    </div>`;

  setTimeout(() => {
    const r = document.getElementById('roleChart');
    if (r) charts.role = new Chart(r, {
      type: 'doughnut',
      data: { labels: ['Students', 'Faculty', 'Industry', 'Admin'],
        datasets: [{ data: [5, 3, 3, 1], backgroundColor: ['#0F9D92', '#28445F', '#3B82F6', '#F59E0B'] }] },
      options: { responsive: true, maintainAspectRatio: false }
    });
    const c = document.getElementById('adminCategoryChart');
    if (c) charts.adminCat = new Chart(c, {
      type: 'bar',
      data: { labels: ['Web Dev', 'Data Analytics', 'AI', 'Database'],
        datasets: [{ label: 'Count', data: [4, 2, 1, 1], backgroundColor: '#0F9D92' }] },
      options: { responsive: true, maintainAspectRatio: false }
    });
    const a = document.getElementById('appStatusChart');
    if (a) charts.appStatus = new Chart(a, {
      type: 'pie',
      data: { labels: ['Applied', 'Under Review', 'Shortlisted', 'Rejected'],
        datasets: [{ data: [0, 1, 1, 0], backgroundColor: ['#3B82F6', '#F59E0B', '#10B981', '#EF4444'] }] },
      options: { responsive: true, maintainAspectRatio: false }
    });
    const s = document.getElementById('adminSkillChart');
    if (s) charts.adminSkill = new Chart(s, {
      type: 'bar',
      data: { labels: ['JavaScript', 'Python', 'SQL', 'HTML/CSS'],
        datasets: [{ label: 'Demand', data: [42, 38, 30, 26], backgroundColor: '#28445F' }] },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }, 60);
}

function renderActivityLogs(content) {
  content.innerHTML = `
    <h2 class="page-title">Activity Logs</h2>
    <p class="page-subtitle">Recent demonstration events.</p>
    <div class="card">
      ${appData.activityLogs.map(l => `
        <div style="padding:10px 0;border-bottom:1px solid var(--border)">
          <div class="text-small">${escapeHtml(l.action)}</div>
          <div class="text-small text-muted">${escapeHtml(l.time)}</div>
        </div>`).join('')}
    </div>`;
}

/* ============================================================
   18. GLOBAL ACTION HANDLERS (event delegation)
   ============================================================ */
function handleGlobalClick(e) {
  const navEl = e.target.closest('[data-nav]');
  if (navEl) {
    e.preventDefault();
    navigate(navEl.dataset.nav);
    return;
  }

  const dashNav = e.target.closest('[data-nav-dashboard]');
  if (dashNav && currentUser) {
    e.preventDefault();
    currentDashboardPage = dashNav.dataset.navDashboard;
    buildSidebar();
    renderDashboardPage(currentDashboardPage);
    return;
  }

  const actionEl = e.target.closest('[data-action]');
  if (!actionEl) return;

  const action = actionEl.dataset.action;
  const id = actionEl.dataset.id;

  switch (action) {
    case 'view-opp': return showOpportunityDetail(id);
    case 'apply': return applyToOpportunity(id);
    case 'edit-profile': return showToast('Profile editing is simulated in this prototype.', 'info');
    case 'upload-resume': {
      const input = document.getElementById('resumeInput');
      if (input) { input.click(); input.onchange = () => {
        const f = input.files[0];
        if (f) { document.getElementById('resumeFilename').textContent = f.name; showToast('Resume selected (not uploaded).', 'success'); }
      };}
      return;
    }
    case 'save-skills': return saveSkills();
    case 'mark-all-read': return markAllNotificationsRead();
    case 'mark-read': return markNotificationRead(id);
    case 'logout': return logout();
    case 'approve-org': return verifyOrg(id, 'Verified');
    case 'reject-org': return verifyOrg(id, 'Rejected');
    case 'approve-opp': return moderateOpportunity(id, 'Approved');
    case 'reject-opp': return moderateOpportunity(id, 'Rejected');
    case 'express-interest': return showToast('Interest expressed (demo).', 'success');
    case 'save-training': return showToast(`Saved: ${actionEl.dataset.title || 'training'}`, 'success');
    case 'new-collab': return openNewCollabModal();
    case 'new-project': return openNewProjectModal();
    case 'update-progress': return openUpdateProgressModal(id);
    case 'collab-request': return showToast('Collaboration request submitted (demo).', 'success');
    case 'delete-taxonomy': return deleteTaxonomy(id);
    default: return;
  }
}

function showOpportunityDetail(id) {
  const o = getOpportunityById(id);
  if (!o) { showToast('Opportunity not found.', 'error'); return; }
  const canApply = currentUser && currentUser.role === 'student';
  const alreadyApplied = currentUser && currentUser.role === 'student' &&
    appData.applications.some(a => a.oppId === id && a.studentId === currentUser.id);

  openModal(`
    <h3>${escapeHtml(o.title)}</h3>
    <p class="text-small text-muted mb-2">${escapeHtml(o.org)} · ${escapeHtml(o.type)} · ${escapeHtml(o.location)} (${escapeHtml(o.mode)})</p>
    <p class="mb-2">${escapeHtml(o.description)}</p>
    <p class="mb-1"><strong>Responsibilities:</strong> ${escapeHtml(o.responsibilities || '—')}</p>
    <p class="mb-1"><strong>Eligibility:</strong> ${escapeHtml(o.eligibility || '—')}</p>
    <p class="mb-1"><strong>Stipend / Salary:</strong> ${escapeHtml(o.stipend)}</p>
    <p class="mb-2"><strong>Deadline:</strong> ${escapeHtml(o.deadline)} · <strong>Openings:</strong> ${escapeHtml(String(o.openings || 1))}</p>
    <div class="opp-skills mb-2">${(o.skills || []).map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('')}</div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Close</button>
      ${canApply ? (alreadyApplied
        ? `<button class="btn btn-primary" disabled>Already Applied</button>`
        : `<button class="btn btn-primary" onclick="applyToOpportunity('${o.id}');closeModal()">Apply Now</button>`) : ''}
    </div>`);
}

function applyToOpportunity(id) {
  if (!currentUser) { showToast('Please log in to apply.', 'error'); navigate('login'); return; }
  if (currentUser.role !== 'student') { showToast('Only students can apply.', 'error'); return; }

  const o = getOpportunityById(id);
  if (!o) { showToast('Opportunity not found.', 'error'); return; }
  if (o.status !== 'Approved') { showToast('This opportunity is not currently open.', 'error'); return; }

  const exists = appData.applications.some(a => a.oppId === id && a.studentId === currentUser.id);
  if (exists) { showToast('You have already applied to this opportunity.', 'error'); return; }

  const student = getUser(currentUser.id) || { name: currentUser.name, course: '', university: '' };
  const skills = studentSkillLevels();
  const topSkills = Object.keys(skills).slice(0, 3).join(', ');

  appData.applications.push({
    id: uid('APP'), oppId: id, studentId: currentUser.id, studentName: student.name,
    studentEducation: `${student.course || ''}, ${student.university || ''}`.replace(/^, |, $/g, ''),
    studentSkills: topSkills, date: todayISO(), status: 'Applied'
  });
  o.applications = (o.applications || 0) + 1;
  saveData();
  addNotification(currentUser.id, `Application submitted successfully for ${o.title}.`);
  showToast('Application submitted successfully.', 'success');

  if (currentDashboardPage === 'opps' || currentDashboardPage === 'recommended' || currentDashboardPage === 'applications') {
    renderDashboardPage(currentDashboardPage);
  }
}

function saveSkills() {
  const inputs = $$('#skillsList input[data-skill]');
  if (!inputs.length) return;
  const levels = {};
  inputs.forEach(inp => {
    const v = parseInt(inp.value, 10);
    levels[inp.dataset.skill] = isNaN(v) ? 0 : Math.min(100, Math.max(0, v));
  });
  appData.studentSkills[currentUser.id] = levels;
  saveData();
  showToast('Skill levels saved.', 'success');
  renderDashboardPage('skills');
}

function markAllNotificationsRead() {
  appData.notifications.forEach(n => { if (n.userId === currentUser.id) n.read = true; });
  saveData();
  updateNotifBadge();
  showToast('All notifications marked as read.', 'success');
  renderNotificationsPage($('#dashboardContent'));
}

function markNotificationRead(id) {
  const n = appData.notifications.find(x => x.id === id && x.userId === currentUser.id);
  if (!n) return;
  n.read = true;
  saveData();
  updateNotifBadge();
  renderNotificationsPage($('#dashboardContent'));
}

function verifyOrg(id, status) {
  const org = appData.organizations.find(o => o.id === id);
  if (!org) return;
  org.status = status;
  saveData();
  appData.activityLogs.unshift({ id: uid('LOG'), action: `Organization ${status.toLowerCase()}: ${org.name}`, time: nowStamp() });
  saveData();
  addNotification('U-ADM-01', `Organization ${status.toLowerCase()}: ${org.name}.`);
  showToast(`Organization ${status.toLowerCase()}.`, 'success');
  renderOrgVerification($('#dashboardContent'));
}

function moderateOpportunity(id, status) {
  const o = getOpportunityById(id);
  if (!o) return;
  o.status = status;
  saveData();
  appData.activityLogs.unshift({ id: uid('LOG'), action: `Opportunity ${status.toLowerCase()}: ${o.title}`, time: nowStamp() });
  saveData();
  if (o.orgId) addNotification(o.orgId, `Opportunity ${status.toLowerCase()}: ${o.title}.`);
  showToast(`Opportunity ${status.toLowerCase()}.`, 'success');
  renderOppModeration($('#dashboardContent'));
}

function deleteTaxonomy(id) {
  appData.skillTaxonomy = appData.skillTaxonomy.filter(t => t.id !== id);
  saveData();
  showToast('Skill category deleted.', 'success');
  renderTaxonomy($('#dashboardContent'));
}

function openNewCollabModal() {
  openModal(`
    <h3>Submit Collaboration Proposal</h3>
    <form id="collabForm">
      <div class="form-group"><label>Title</label><input type="text" id="collabTitle" required></div>
      <div class="form-group"><label>Description</label><textarea id="collabDesc" required></textarea></div>
      <div class="form-group"><label>Duration</label><input type="text" id="collabDuration" placeholder="6 months"></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>`);
  $('#collabForm').addEventListener('submit', (e) => {
    e.preventDefault();
    appData.collaborations.unshift({
      id: uid('COL'), title: $('#collabTitle').value, org: 'Faculty Proposal',
      facultyId: currentUser.id, facultyName: currentUser.name,
      expertise: '—', skills: [], duration: $('#collabDuration').value || 'TBD',
      type: 'Faculty Proposal', status: 'Open', description: $('#collabDesc').value
    });
    saveData();
    addNotification(currentUser.id, 'Collaboration proposal submitted.');
    showToast('Collaboration proposal submitted.', 'success');
    closeModal();
    renderDashboardPage('collaborations');
  });
}

function openNewProjectModal() {
  openModal(`
    <h3>Create Demo Project</h3>
    <form id="projectForm">
      <div class="form-group"><label>Project title</label><input type="text" id="projTitle" required></div>
      <div class="form-group"><label>Student name</label><input type="text" id="projStudent" required></div>
      <div class="form-group"><label>Category</label><input type="text" id="projCategory" value="Web Development"></div>
      <div class="form-group"><label>Deadline</label><input type="date" id="projDeadline" required></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Create</button>
      </div>
    </form>`);
  $('#projectForm').addEventListener('submit', (e) => {
    e.preventDefault();
    appData.projects.push({
      id: uid('PRJ'), title: $('#projTitle').value, student: $('#projStudent').value,
      category: $('#projCategory').value, progress: 0, deadline: $('#projDeadline').value,
      status: 'Active', facultyId: currentUser.id
    });
    saveData();
    showToast('Project created.', 'success');
    closeModal();
    renderDashboardPage('student-projects');
  });
}

function openUpdateProgressModal(id) {
  const p = appData.projects.find(x => x.id === id);
  if (!p) return;
  openModal(`
    <h3>Update Progress</h3>
    <p class="text-small text-muted mb-2">${escapeHtml(p.title)}</p>
    <div class="form-group"><label>Progress (%)</label><input type="number" id="progressInput" min="0" max="100" value="${p.progress}"></div>
    <div class="modal-actions">
      <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button type="button" class="btn btn-primary" onclick="saveProjectProgress('${p.id}')">Save</button>
    </div>`);
}

function saveProjectProgress(id) {
  const p = appData.projects.find(x => x.id === id);
  if (!p) return;
  const v = parseInt($('#progressInput').value, 10);
  p.progress = isNaN(v) ? p.progress : Math.min(100, Math.max(0, v));
  saveData();
  showToast('Project progress updated.', 'success');
  closeModal();
  renderDashboardPage('student-projects');
}

/* Assessment submit */
function handleAssessmentSubmit(e) {
  e.preventDefault();
  const qs = appData.assessmentQuestions;
  let score = 0;
  qs.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value, 10) === q.answer) score++;
  });
  const pct = Math.round((score / qs.length) * 100);
  const result = $('#assessmentResult');
  if (result) {
    result.innerHTML = `<div class="result-box">
      <div class="score">${score} / ${qs.length}</div>
      <p class="mt-1">Your score: <strong>${pct}%</strong></p>
      <p class="text-small text-muted">${pct >= 60 ? 'Great job! Keep building your skills.' : 'Keep learning and try again.'}</p>
    </div>`;
  }
  addNotification(currentUser.id, `Assessment completed with score ${pct}%.`);
  showToast(`Assessment submitted — ${pct}%`, pct >= 60 ? 'success' : 'info');
  renderDashboardPage('assessment');
}

/* ============================================================
   19. RESPONSIVE MENU HANDLERS
   ============================================================ */
function closeMobileMenus() {
  const mn = $('#mobileNav');
  if (mn) mn.classList.remove('show');
  const sb = $('#sidebar');
  if (sb) sb.classList.remove('open');
}

function initMenuHandlers() {
  const mob = $('#mobileMenuBtn');
  if (mob) mob.addEventListener('click', () => {
    $('#mobileNav')?.classList.toggle('show');
  });

  const menuToggle = $('#menuToggle');
  if (menuToggle) menuToggle.addEventListener('click', () => {
    $('#sidebar')?.classList.add('open');
  });

  const sbClose = $('#sidebarClose');
  if (sbClose) sbClose.addEventListener('click', () => {
    $('#sidebar')?.classList.remove('open');
  });

  const logoutBtn = $('#logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  const bell = $('#notificationBell');
  if (bell) bell.addEventListener('click', () => {
    if (!currentUser) return;
    currentDashboardPage = 'notifications';
    buildSidebar();
    renderDashboardPage('notifications');
  });

  const togglePw = $('#togglePassword');
  if (togglePw) togglePw.addEventListener('click', () => {
    const inp = $('#loginPassword');
    if (!inp) return;
    inp.type = inp.type === 'password' ? 'text' : 'password';
    togglePw.innerHTML = inp.type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
  });
}

/* ============================================================
   20. INITIALIZATION
   ============================================================ */
function init() {
  loadData();
  loadSession();

  // Form handlers
  $('#loginForm')?.addEventListener('submit', handleLogin);
  $('#registerForm')?.addEventListener('submit', handleRegister);

  // Global click delegation for nav + actions
  document.body.addEventListener('click', handleGlobalClick);

  // Assessment submit delegation
  document.body.addEventListener('submit', (e) => {
    if (e.target.id === 'assessmentForm') handleAssessmentSubmit(e);
  });

  // Resume / file input delegation
  document.body.addEventListener('change', (e) => {
    if (e.target.id === 'resumeInput') {
      const f = e.target.files[0];
      const fn = document.getElementById('resumeFilename');
      if (f && fn) fn.textContent = f.name;
    }
  });

  initMenuHandlers();

  // Restore session
  if (currentUser) {
    navigate('dashboard', 'overview');
  } else {
    renderLanding();
    showView('landing');
  }
}

document.addEventListener('DOMContentLoaded', init);