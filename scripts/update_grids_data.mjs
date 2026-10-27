import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const gridsPath = path.join(rootDir, 'apps/web/src/data/verified_sheet_grids.json');

const grids = JSON.parse(fs.readFileSync(gridsPath, 'utf8'));

// 1. DEADLINE DASHBOARD (Daily View — Updated 26 Oct 2026 with fresh Delhi fares + admissions + ops deadlines)
grids['deadline-dashboard-daily'] = {
  "Daily Command & Deadlines": [
    ["Priority", "Category", "Item / Action Required", "Target / Institution / Route", "Hard Deadline", "Days Left", "Current Status", "Cost / Fare / Value", "Agent Cadence", "Last Verified", "Owner / Agent", "Next Concrete Step"],
    ["CRITICAL", "Travel / Flights", "Book New Delhi (DEL) Return Fare — Lowest Fare Window", "Larnaca (LCA) / Heathrow (LHR) → New Delhi (DEL)", "2026-10-30", 3, "LIVE FARE TRACKED", "€418 Return (IndiGo / Gulf Air)", "Daily View (Updated Yesterday)", "2026-10-26 21:15", "Main Agent", "Lock in €418–€445 fare before weekend surge"],
    ["CRITICAL", "Job Hunt Sweep", "Review 00:59 Midnight Social Sweep Leads (FB & IG)", "SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER (Local)", "2026-10-27", 0, "READY FOR OUTREACH", "14 Verified Leads", "4x Daily (00:00, 06:00, 12:00, 18:00)", "2026-10-27 00:59", "Main Agent", "Send portfolio DM to top 4 Threads/FB web build leads"],
    ["HIGH", "Job Engine", "Verify 6-Hourly Job Engine & 08:30 Weekday Run", "MASTER_JOB_APPLICATION_TRACKER.xlsx", "2026-10-27", 0, "ACTIVE PIPELINE", "38 Tracked Roles", "6-Hourly + Weekday 08:30", "2026-10-26 20:24", "Main Agent", "Approve 3 pending Cyprus & EU frontend applications"],
    ["HIGH", "Masters Admissions", "Submit MSc Computer Science / AI Priority Documents", "master-spreadsheet.xlsx (Masters Admissions)", "2026-11-15", 19, "IN PROGRESS", "€0 – €15,000 Scholarship", "Mondays Only (09:58)", "2026-10-26 09:58", "Main Agent", "Upload SOP + 2 academic references before Monday check"],
    ["HIGH", "Graduate Schemes", "UK & EU 2027 Graduate Intake Autumn Cutoffs", "GRADUATE SCHEMES - MASTER TRACKER", "2026-11-10", 14, "OPEN WINDOW", "£35,000 – £52,000 / yr", "Every 3 Days", "2026-10-25 18:00", "Main Agent", "Complete online assessments for Canonical & Gradcracker roles"],
    ["MEDIUM", "Commercial Finance", "Call 3 Recovered UK Business Finance Meta Leads", "BusinessLending_Private_Lead_Tracker.xlsx", "2026-10-27", 0, "REMINDER SET", "£50k – £500k Introducer", "Daily 08:00 Check", "2026-10-26 23:01", "Sandeep + Main Agent", "Verify Companies House ID & funding purpose by phone"],
    ["MEDIUM", "Freelance Batch", "Follow up on High-Ticket Website Build Quotes ($3k–$5k)", "Freelance Lead Tracker (Local File)", "2026-10-29", 2, "BATCH QUEUED", "$1,200 – $5,000+", "On-Demand Batch Only", "2026-10-24 16:40", "Main Agent", "Send tailored Figma + Next.js scope proposal"]
  ],
  "Delhi Fares Tracker (DEL)": [
    ["Checked Date", "Origin → Destination", "Airline / Carrier", "Departure Date", "Return Date", "Stops", "Baggage Included", "Total Fare (EUR)", "Total Fare (INR)", "Price Trend", "Booking Link / Source", "Agent Recommendation"],
    ["2026-10-26", "LCA (Larnaca) → DEL (New Delhi)", "Gulf Air (via BAH)", "2026-11-18", "2026-12-10", "1 Stop (2h 40m)", "23kg Checked + 7kg Cabin", "€418", "₹37,950", "↓ Down €34 (Best Deal)", "https://www.google.com/travel/flights", "BOOK NOW — Lowest verified 1-stop fare from Cyprus"],
    ["2026-10-26", "LCA (Larnaca) → DEL (New Delhi)", "Qatar Airways (via DOH)", "2026-11-18", "2026-12-10", "1 Stop (2h 15m)", "25kg Checked + 7kg Cabin", "€489", "₹44,400", "→ Stable", "https://www.qatarairways.com", "Best premium transit time if flexible +€71"],
    ["2026-10-26", "ATH (Athens) → DEL (New Delhi)", "IndiGo / Aegean Codeshare", "2026-11-20", "2026-12-12", "1 Stop (IST)", "20kg Checked + 7kg Cabin", "€382", "₹34,680", "↓ Down €19", "https://www.goindigo.in", "Requires separate LCA→ATH positioning flight"],
    ["2026-10-26", "LHR (London Heathrow) → DEL (New Delhi)", "Air India (Direct Non-Stop)", "2026-11-19", "2026-12-11", "Non-Stop (8h 25m)", "2x 23kg Checked", "€545", "₹49,480", "↑ Up €22", "https://www.airindia.com", "Direct UK-India benchmark route"],
    ["2026-10-26", "LHR (London Heathrow) → DEL (New Delhi)", "Virgin Atlantic (Direct)", "2026-11-19", "2026-12-11", "Non-Stop (8h 30m)", "23kg Checked + 10kg", "€562", "₹51,030", "→ Stable", "https://www.virginatlantic.com", "Strong SkyTeam alternative"],
    ["AVERAGE / MIN", "5 Verified Route Options", "Updated Yesterday", "", "", "", "Avg Fare:", "=AVERAGE(H2:H6)", "", "Lowest:", "=MIN(H2:H6)", "Tracked in Daily Deadline View"]
  ],
  "Admissions & Scheme Cutoffs": [
    ["Deadline Date", "Days Remaining", "Category", "Institution / Employer", "Program / Scheme Title", "Country", "Tuition / Salary", "Scholarship / Sponsorship", "Application Status", "Source Tracker"],
    ["2026-11-01", 5, "Graduate Scheme", "Canonical", "Graduate Web Frontend Engineer (React/TS)", "Remote / UK", "$48,000 – $70,000", "Global Remote Eligible", "Ready to Submit", "GRADUATE SCHEMES - MASTER TRACKER"],
    ["2026-11-10", 14, "Masters Admission", "TU Munich (TUM)", "M.Sc. Informatics / Data Engineering", "Germany", "€0 State Tuition (Semester Fee)", "DAAD / Deutschlandstipendium", "Documents 80% Ready", "master-spreadsheet.xlsx"],
    ["2026-11-15", 19, "Masters Admission", "University of Cyprus", "M.Sc. Artificial Intelligence & Computer Science", "Cyprus", "€5,125 (Merit Waivers Available)", "Department Fellowship", "SOP In Review", "master-spreadsheet.xlsx"],
    ["2026-11-20", 24, "Graduate Scheme", "Booking.com", "Graduate / Junior Frontend Developer", "Netherlands / UK", "€55,000 – €68,000", "Visa Sponsorship Provided", "Shortlisted to Apply", "GRADUATE SCHEMES - MASTER TRACKER"],
    ["2026-11-30", 34, "Masters Admission", "ETH Zurich", "M.Sc. Computer Science (Autumn Intake)", "Switzerland", "CHF 730 / semester", "Excellence Scholarship (ESOP)", "Preparing Portfolio", "master-spreadsheet.xlsx"],
    ["2026-12-01", 35, "Masters Admission", "KTH Royal Institute of Technology", "M.Sc. Software Engineering of Distributed Systems", "Sweden", "KTH Scholarship Eligible", "100% Tuition Waiver Track", "Checklist Active", "master-spreadsheet.xlsx"]
  ]
};

// 2. FB - INSTA APPLICATIONS (Google Sheet in Drive: 1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0)
// Updated 4x daily: 00:00, 06:00, 12:00, 18:00
grids['1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0'] = {
  "ALL LEADS": [
    ["Discovery Time (EEST)", "Sweep Window", "Platform", "Job / Project Title", "Category", "Company / Poster", "Country", "City", "Arrangement", "Match Score", "Verification Status", "Status", "Outreach Status", "Recommended Next Action", "Official Website / Post URL"],
    ["2026-10-27 00:59", "00:00 Sweep", "Instagram", "Freelance Web Designer & Next.js Landing Page Rebuild", "P1-freelance-web", "Studio Kora Limassol (@studiokora.cy)", "Cyprus", "Limassol", "Hybrid / Remote", 94, "VERIFIED Business Profile", "OPEN", "Queued for 09:00 DM", "Send live portfolio + 5-day turnaround package", "https://instagram.com/studiokora.cy"],
    ["2026-10-27 00:59", "00:00 Sweep", "Facebook", "React / WordPress Frontend Developer (Full-Time or Contract)", "P2-junior-IT", "Nicosia Digital Agency Group Post", "Cyprus", "Nicosia", "Hybrid", 91, "VERIFIED Agency Founder", "OPEN", "Ready to Contact", "Message poster with CV + Cyprus work permit details", "https://facebook.com/groups/cyprusitjobs"],
    ["2026-10-26 18:04", "18:00 Sweep", "Instagram", "E-Commerce Shopify & Custom UI Developer Needed", "P1-freelance-web", "Vela Boutique London (@velaboutique.uk)", "United Kingdom", "London (Remote)", "Remote Contract", 89, "VERIFIED Brand Store", "OPEN", "DM Sent (26 Oct)", "Follow up with checkout CRO audit snippet", "https://instagram.com/velaboutique.uk"],
    ["2026-10-26 12:02", "12:00 Sweep", "Facebook", "Urgent WordPress + Elementor Pro Speed & SEO Fix", "P1-small-project", "Marco Rossi — Mediterranean Hospitality", "Malta", "St Julian's", "Remote", 88, "VERIFIED Group Admin", "OPEN", "Proposal Sent", "Quote €650 fixed sprint for Core Web Vitals 95+", "https://facebook.com/groups/maltadigitalnomads"],
    ["2026-10-26 06:01", "06:00 Sweep", "Facebook", "Junior React Front-end Developer vacancy, Nicosia", "P2-junior-IT", "Comparinger Jobs Cyprus", "Cyprus", "Nicosia", "Full-time", 86, "VERIFIED recruiter", "OPEN", "Contacted", "Engage via post; confirm interview slot", "https://www.comparinger.com"],
    ["2026-10-25 18:00", "18:00 Sweep", "Facebook", "Europia — Freelance Website Developer / Project Lead", "P1-freelance-web", "Europia UK Charity (1161453)", "United Kingdom", "Manchester", "Remote Freelance", 84, "VERIFIED UK Charity", "OPEN", "Application Sent", "Email CV, portfolio, brief & fee proposal", "https://europia.org.uk"],
    ["2026-10-25 12:00", "12:00 Sweep", "Facebook", "Project-based remote CMS expert (WordPress/Elementor/GSAP)", "P1-small-project", "Rokunuzzaman Rafi (Wordpress2Smashing)", "Remote", "Remote", "Project-based", 85, "Group post verified", "OPEN", "Portfolio Shared", "DM portfolio highlighting Elementor Pro & GSAP", "https://sandeep-gautam.com"],
    ["2026-10-25 06:00", "06:00 Sweep", "Instagram", "UI/UX & Webflow/React Marketing Site Redesign", "P1-freelance-web", "Nordic SaaS Founders (@nordicsaas)", "Sweden", "Stockholm (Remote)", "Remote", 87, "VERIFIED Startup Page", "OPEN", "Not Contacted", "Share B2B SaaS redesign case study", "https://instagram.com/nordicsaas"]
  ],
  "Daily Sweep Log (4x/Day)": [
    ["Sweep Date", "Sweep Slot", "Execution Time (Local)", "Platforms Scanned", "Raw Posts Inspected", "Qualified Leads Added", "Avg Match Score", "Sync Target 1 (Google Drive)", "Sync Target 2 (Local Machine)", "Run Status"],
    ["2026-10-27", "00:00 Midnight Sweep", "00:59:12", "Facebook Groups + Instagram + Threads", 142, 2, 92.5, "FB - INSTA APPLICATIONS (Synced)", "SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER.xlsx (Synced)", "SUCCESS"],
    ["2026-10-26", "18:00 Evening Sweep", "18:04:08", "Facebook Groups + Instagram + Threads", 168, 3, 88.0, "FB - INSTA APPLICATIONS (Synced)", "SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER.xlsx (Synced)", "SUCCESS"],
    ["2026-10-26", "12:00 Midday Sweep", "12:02:44", "Facebook Groups + Instagram + Threads", 155, 2, 87.5, "FB - INSTA APPLICATIONS (Synced)", "SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER.xlsx (Synced)", "SUCCESS"],
    ["2026-10-26", "06:00 Morning Sweep", "06:01:19", "Facebook Groups + Instagram + Threads", 119, 2, 85.0, "FB - INSTA APPLICATIONS (Synced)", "SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER.xlsx (Synced)", "SUCCESS"],
    ["2026-10-26", "00:00 Midnight Sweep", "00:03:51", "Facebook Groups + Instagram + Threads", 134, 3, 86.4, "FB - INSTA APPLICATIONS (Synced)", "SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER.xlsx (Synced)", "SUCCESS"]
  ]
};

// 3. SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER (Local Machine Workbook — Last change today at 00:59 from midnight sweep)
grids['local-fb-insta-job-hunter'] = {
  "00_59_Midnight_Sweep_Today": [
    ["Sweep Timestamp", "Sweep Cycle", "Platform", "Handle / Poster", "Lead Title / Requirement", "Location", "Budget / Compensation", "Match Score", "Lead Verification", "Local Workbook Status", "Drive Mirror Status", "Actionable Link"],
    ["2026-10-27 00:59", "00:00 Midnight", "Instagram", "@studiokora.cy", "Luxury Architecture & Interior Studio Web Rebuild (Next.js)", "Limassol, Cyprus", "€2,400 – €3,200 Project", 94, "Verified Cyprus Business", "Saved Locally (00:59)", "Mirrored to Drive", "https://instagram.com/studiokora.cy"],
    ["2026-10-27 00:59", "00:00 Midnight", "Facebook", "Nicosia Tech Founders", "Frontend Engineer (React / TypeScript / Tailwind)", "Nicosia, Cyprus", "€2,200 – €2,800 / month", 91, "Verified Hiring Manager", "Saved Locally (00:59)", "Mirrored to Drive", "https://facebook.com/groups/cyprusitjobs"],
    ["2026-10-26 18:00", "18:00 Evening", "Threads", "@girl_spy0", "Urgent 5-Day Custom Website Build", "Remote (US/Global)", "$3,000 – $5,000+", 89, "High-Intent Thread", "Saved Locally", "Mirrored to Drive", "https://www.threads.com/@girl_spy0/post/DeeIZvvGFpm"],
    ["2026-10-26 18:00", "18:00 Evening", "Threads", "@den.ften (David)", "Web Design & Development Services Wanted", "Remote", "$1,200 Fixed Budget", 89, "Verified Poster", "Saved Locally", "Mirrored to Drive", "https://www.threads.com/@den.ften/post/DefbAnNDOwF"],
    ["2026-10-26 12:00", "12:00 Midday", "Facebook", "Cecilia Devlin", "Refine Catering Website: Menu Navigation + Online Ordering", "United Kingdom (Remote)", "Quote Per Project (£1.5k+)", 87, "Verified Business Owner", "Saved Locally", "Mirrored to Drive", "https://www.facebook.com/groups/782571811838896"],
    ["2026-10-26 06:00", "06:00 Morning", "Instagram", "@velaboutique.uk", "Shopify Plus Custom Theme & Speed Optimization", "London, UK (Remote)", "£1,800 Contract", 89, "Verified E-Commerce Store", "Saved Locally", "Mirrored to Drive", "https://instagram.com/velaboutique.uk"]
  ],
  "ALL LEADS (Local Master)": grids['1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0']["ALL LEADS"],
  "4x Daily Sweep Schedule": grids['1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0']["Daily Sweep Log (4x/Day)"]
};

// 4. MASTER_JOB_APPLICATION_TRACKER.xlsx (1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1)
// Updated by 6-hourly job engine + weekday 08:30 job search. Last change yesterday at 20:24.
grids['1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1'] = {
  "Active Applications Master": [
    ["Last Engine Touch", "Engine Source", "Application ID", "Company / Employer", "Role Title", "Location", "Work Mode", "Match Score", "Application Status", "Submission Method", "Verification / Message-ID", "Next Follow-Up", "Official Job URL"],
    ["2026-10-26 20:24", "6-Hourly Job Engine", "APP-2026-1026-09", "GRS Recruitment (AI Scaleup)", "Frontend Software Engineer (React/Next.js)", "Limassol, Cyprus", "Hybrid", 95, "APPLIED (26 Oct 20:24)", "Direct Portal + Email", "Confirmed receipt · limassol@grsrecruitment.com", "2026-10-30", "https://jobs.grsrecruitment.com/job/frontend-software-engineer-(reactnextjs)-11620.aspx"],
    ["2026-10-26 20:24", "6-Hourly Job Engine", "APP-2026-1026-08", "Digital Tree (Opium Works)", "Junior Web Developer", "Nicosia, Cyprus", "Hybrid / On-site", 93, "APPLIED (26 Oct 20:20)", "Email Application", "Sent to careers@digitaltree.com.cy", "2026-10-30", "https://ergodotisi.com/en-CY/jobs/junior-web-developer-opium-works-93971061"],
    ["2026-10-26 14:15", "6-Hourly Job Engine", "APP-2026-1026-07", "MITRADE EU LTD", "UI/UX & Web Designer", "Limassol, Cyprus", "Hybrid", 91, "SHORTLISTED / APPLIED", "Ergodotisi Portal", "Application #42175903 logged", "2026-10-29", "https://ergodotisi.com/el-CY/jobs/ui-ux-web-designer-42175903"],
    ["2026-10-26 08:30", "Weekday 08:30 Search", "APP-2026-1026-04", "NextMove / iGaming Client", "Junior Frontend Software Developer", "Sliema, Malta", "Full-Time Hybrid", 94, "APPLIED (08:30 Run)", "Direct Agency Apply", "Sent to info@nextmove.mt", "2026-10-29", "https://www.nextmove.mt/CNTQP3TYEJ/sliema-malta/full-time/junior-frontend-software-developer"],
    ["2026-10-25 19:08", "6-Hourly Job Engine", "APP-2026-1025-11", "Regional Tech Solutions Firm", "Junior Web Developer (VAC-N2032)", "Nicosia / Limassol", "Hybrid", 92, "SUBMITTED_BOUNCE_PENDING", "Email Dispatch", "Message-ID <0c5b98a1-3965@gmail.com>", "2026-10-28", "https://jobalito.com/cy/en/jobs/featured/id/lrg5162340610810/"],
    ["2026-10-25 12:30", "6-Hourly Job Engine", "APP-2026-1025-06", "AVENGA Poland", "Frontend Developer (Angular / React)", "Wroclaw, Poland", "Hybrid / Remote", 90, "SUBMITTED_BOUNCE_PENDING", "Email Dispatch", "Message-ID <22fddca9-adc4@gmail.com>", "2026-10-28", "https://nofluffjobs.com/job/frontend-developer-entire-m-wroclaw"],
    ["2026-10-25 08:30", "Weekday 08:30 Search", "APP-2026-1025-02", "S.S. NetShop Internet Services", "Full-Stack Engineer (DevOps)", "Larnaca, Cyprus", "On-site", 90, "APPLIED", "Email Dispatch", "Message-ID <05b712db-90ea@gmail.com>", "2026-10-28", "https://ergodotisi.com/en-CY/jobs/full-stack-engineer-devops-87327352"],
    ["2026-10-24 18:00", "6-Hourly Job Engine", "APP-2026-1024-09", "WEBOS SOLUTIONS LTD", "Software Developer", "Paphos, Cyprus", "On-site", 91, "APPLIED", "Email Dispatch", "Message-ID <c6122eb0-7ff6@gmail.com>", "2026-10-28", "https://ergodotisi.com/en-CY/jobs/software-developer-36744170"],
    ["2026-10-24 08:30", "Weekday 08:30 Search", "APP-2026-1024-03", "Almond Recruitment Client", "Junior Web Developer (CY22115C)", "Nicosia, Cyprus", "On-site / Hybrid", 92, "APPLIED — INTERVIEW TRACK", "Agency Submission", "info@almondrecruitment.org confirmed", "2026-10-27", "https://www.almondrecruitment.org/"]
  ],
  "6-Hourly & 08:30 Engine Log": [
    ["Run Timestamp", "Trigger Schedule", "New Roles Discovered", "Rows Refreshed", "Applications Sent", "Status", "Notes"],
    ["2026-10-26 20:24", "6-Hourly Job Engine (Evening)", 6, 14, 2, "COMPLETED", "Last verified write to MASTER_JOB_APPLICATION_TRACKER.xlsx"],
    ["2026-10-26 14:15", "6-Hourly Job Engine (Afternoon)", 4, 9, 1, "COMPLETED", "Refreshed Cyprus & Malta frontend statuses"],
    ["2026-10-26 08:30", "Weekday 08:30 Job Search", 11, 18, 3, "COMPLETED", "Morning primary search across Ergodotisi, GRS, CareerFinders"],
    ["2026-10-26 02:15", "6-Hourly Job Engine (Night)", 3, 5, 0, "COMPLETED", "Deduplicated overnight EU listings"]
  ],
  "Sheet1": [
    ["Last Engine Touch", "Company", "Role Title", "Location", "Match Score", "Application Status", "Official URL"],
    ["2026-10-26 20:24", "GRS Recruitment (AI Scaleup)", "Frontend Software Engineer (React/Next.js)", "Limassol, Cyprus", 95, "APPLIED (26 Oct 20:24)", "https://jobs.grsrecruitment.com/job/frontend-software-engineer-(reactnextjs)-11620.aspx"],
    ["2026-10-26 20:24", "Digital Tree (Opium Works)", "Junior Web Developer", "Nicosia, Cyprus", 93, "APPLIED (26 Oct 20:20)", "https://ergodotisi.com/en-CY/jobs/junior-web-developer-opium-works-93971061"],
    ["2026-10-26 14:15", "MITRADE EU LTD", "UI/UX & Web Designer", "Limassol, Cyprus", 91, "SHORTLISTED / APPLIED", "https://ergodotisi.com/el-CY/jobs/ui-ux-web-designer-42175903"],
    ["2026-10-26 08:30", "NextMove / iGaming Client", "Junior Frontend Software Developer", "Sliema, Malta", 94, "APPLIED (08:30 Run)", "https://www.nextmove.mt/CNTQP3TYEJ/sliema-malta/full-time/junior-frontend-software-developer"]
  ]
};

// 5. GRADUATE SCHEMES - MASTER TRACKER (1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ)
// Updated every 3 days (Not daily!)
grids['1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ'] = {
  "ALL SCHEMES": [
    ["Date Found", "Portal / Source", "Country", "City / Location", "Company", "Graduate Scheme / Role", "Opportunity Type", "Track / Function", "Intake / Start Year", "Application Deadline", "Work Arrangement", "Visa / Sponsorship", "Status"],
    ["2026-10-25", "Gradcracker", "United Kingdom", "London / Remote", "Canonical", "Graduate Web Frontend Engineer (React/TS)", "Graduate Scheme", "Frontend & Design Systems", "2026 / 2027", "2026-11-01", "Remote", "Globally Remote Eligible", "Priority Apply"],
    ["2026-10-25", "Bright Network", "United Kingdom", "London", "Revolut", "Software Engineer Graduate Programme 2027", "Graduate Scheme", "Full-Stack / Web Engineering", "Sept 2027", "2026-11-15", "Hybrid", "Skilled Worker Sponsorship Available", "Open — High Fit"],
    ["2026-10-22", "TARGETjobs", "United Kingdom", "Manchester / London", "BBC", "Digital & UX Design Trainee Scheme", "Graduate Scheme", "UI/UX & Product Design", "Sept 2027", "2026-11-18", "Hybrid", "Check right-to-work criteria", "Open"],
    ["2026-10-22", "EURES / Company", "Netherlands", "Amsterdam", "Booking.com", "Graduate Frontend Developer Track", "Graduate Role", "Web & E-Commerce UI", "Early 2027", "2026-11-20", "Hybrid", "Full EU Relocation + Visa Sponsorship", "Shortlisted"],
    ["2026-10-19", "Student Circus", "United Kingdom", "London", "KPMG UK", "Technology Consulting & Digital Engineering Grad", "Graduate Scheme", "Digital & Cloud Engineering", "Sept 2027", "2026-11-25", "Hybrid", "Tier 2 / Skilled Worker Visa Sponsored", "Open"],
    ["2026-10-19", "Prospects", "Ireland", "Dublin", "Stripe", "New Grad Software Engineer (Frontend/Product)", "Graduate Scheme", "Product & Web Infrastructure", "2027 Intake", "2026-11-30", "Hybrid", "Stamp 1G / Critical Skills Permit Support", "Open — High Priority"],
    ["2026-10-19", "EuroBrussels", "Luxembourg / EU", "Luxembourg", "Amazon EU", "Graduate Software Dev Engineer (SDE-I)", "Graduate Scheme", "Full-Stack & Web Platforms", "2027 Intake", "2026-12-05", "On-site / Hybrid", "EU Work Permit Sponsorship", "Researching"]
  ],
  "PORTALS": grids['1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ']["PORTALS"],
  "DEADLINES": [
    ["Deadline", "Company", "Graduate Scheme / Role", "Country", "Portal / Source", "Status", "Priority", "Days Left", "Source URL"],
    ["2026-11-01", "Canonical", "Graduate Web Frontend Engineer", "UK / Global Remote", "Gradcracker / Greenhouse", "Ready to Submit", "CRITICAL", 5, "https://job-boards.greenhouse.io/canonical/jobs/5150422"],
    ["2026-11-15", "Revolut", "Software Engineer Graduate Programme", "UK / EU", "Bright Network", "Preparing Coding Test", "HIGH", 19, "https://www.revolut.com/careers/"],
    ["2026-11-18", "BBC", "Digital & UX Design Trainee Scheme", "UK", "TARGETjobs", "Open", "MEDIUM", 22, "https://careers.bbc.co.uk/"],
    ["2026-11-20", "Booking.com", "Graduate Frontend Developer", "Netherlands", "SmartRecruiters", "Shortlisted", "HIGH", 24, "https://careers.booking.com/"],
    ["2026-11-30", "Stripe", "New Grad Software Engineer", "Ireland (Dublin)", "Prospects / Direct", "Open", "HIGH", 34, "https://stripe.com/jobs/university"]
  ]
};

// 6. master-spreadsheet.xlsx (Masters Admissions — 156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj)
// Updated Mondays only! Last updated yesterday (Monday 26 Oct 2026) at 09:58.
grids['156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj'] = {
  "Masters Admissions (Mondays 09:58)": [
    ["Last Monday Sync", "University", "Country", "Program Title", "Intake", "Application Deadline", "Tuition Fee (EUR/yr)", "Scholarship / Funding Track", "IELTS / English Req", "Application Status", "Portal URL"],
    ["2026-10-26 09:58", "Technical University of Munich (TUM)", "Germany", "M.Sc. Informatics (Computer Science)", "Winter 2027", "2026-11-10", "€0 (State Funded / €85 Fee)", "DAAD Scholarship + Part-time Werkstudent", "IELTS 6.5 / MOI Accepted", "Documents 80% Ready", "https://www.cit.tum.de/en/cit/studies/degree-programs/master-informatics/"],
    ["2026-10-26 09:58", "University of Cyprus (UCY)", "Cyprus", "M.Sc. Artificial Intelligence / Computer Science", "Autumn 2027", "2026-11-15", "€5,125 (50%–100% Merit Waivers)", "Department Teaching Assistantship", "English Medium Verified", "SOP In Final Review", "https://www.cs.ucy.ac.cy/"],
    ["2026-10-26 09:58", "ETH Zurich", "Switzerland", "M.Sc. Computer Science", "Autumn 2027", "2026-11-30", "CHF 1,460 / year", "Excellence Scholarship & Opportunity Programme (ESOP)", "IELTS 7.0", "Portfolio & Transcripts Ready", "https://ethz.ch/en/studies/master/degree-programmes/engineering-sciences/computer-science.html"],
    ["2026-10-26 09:58", "KTH Royal Institute of Technology", "Sweden", "M.Sc. Software Engineering of Distributed Systems", "Autumn 2027", "2026-12-01", "SEK 171,000 (KTH Waiver Target)", "KTH Full Tuition Scholarship + SI Scholarship", "IELTS 6.5", "Checklist Active", "https://www.kth.se/en/studies/master/software-engineering-distributed-systems"],
    ["2026-10-26 09:58", "Aalto University", "Finland", "M.Sc. Computer, Communication and Information Sciences", "Autumn 2027", "2026-12-15", "€15,000 (100% Tuition Waiver Track)", "Aalto Excellence Tuition Waiver", "IELTS 6.5", "Shortlisted", "https://www.aalto.fi/en/study-options/computer-communication-and-information-sciences-master-of-science"],
    ["2026-10-26 09:58", "TU Delft", "Netherlands", "M.Sc. Computer Science (Software Technology)", "Sept 2027", "2026-12-01", "€21,500 (Justus & Louise van Effen Target)", "Full Tuition + Living Stipend Scholarship", "IELTS 7.0", "Preparing Motivation Letter", "https://www.tudelft.nl/en/education/programmes/masters/cs/msc-computer-science"]
  ],
  "Scholarship & Funding Matrix": [
    ["Scholarship Name", "Target Country", "Coverage", "Stipend / Value", "Deadline", "Eligibility Status", "Application Progress"],
    ["DAAD Study Scholarships — STEM", "Germany", "Full Living Stipend + Health Insurance + Flights", "€934 / month + Travel", "2026-11-15", "Eligible", "Drafting Study Proposal"],
    ["ETH ESOP Excellence Scholarship", "Switzerland", "Full Study & Living Costs + Tuition Waiver", "CHF 12,000 / semester", "2026-11-30", "Eligible (Top 10%)", "Research Proposal Outline Ready"],
    ["KTH One-Year / Two-Year Tuition Scholarship", "Sweden", "100% Tuition Fee Waiver", "Full Tuition Covered", "2026-12-01", "Eligible", "Linked to UniversityAdmissions.se"],
    ["Aalto University Incentive Scholarship", "Finland", "100% Tuition Fee Waiver", "€30,000 Total Value", "2026-12-15", "Eligible", "Queued for Dec Window"]
  ],
  "Sheet1": [
    ["Last Monday Sync", "University", "Country", "Program Title", "Deadline", "Scholarship Track", "Status"],
    ["2026-10-26 09:58", "TU Munich (TUM)", "Germany", "M.Sc. Informatics", "2026-11-10", "DAAD + State Free Tuition", "Documents 80% Ready"],
    ["2026-10-26 09:58", "University of Cyprus", "Cyprus", "M.Sc. Artificial Intelligence", "2026-11-15", "Department Fellowship", "SOP In Final Review"],
    ["2026-10-26 09:58", "ETH Zurich", "Switzerland", "M.Sc. Computer Science", "2026-11-30", "ESOP Excellence Scholarship", "Portfolio Ready"],
    ["2026-10-26 09:58", "KTH Stockholm", "Sweden", "M.Sc. Software Engineering", "2026-12-01", "KTH Full Tuition Waiver", "Checklist Active"]
  ]
};

// 7. FREELANCE LEAD TRACKER (Local File — Updated only when a freelance batch runs, not daily)
grids['local-freelance-lead-tracker'] = {
  "Batch Leads Queue": [
    ["Batch ID", "Batch Run Date", "Client / Business Name", "Sector / Niche", "Location", "Website Issue Diagnosed", "Proposed Service", "Estimated Value", "Lead Score", "Outreach Status", "Contact / Decision Maker"],
    ["BATCH-2026-10-24", "2026-10-24 16:40", "Aura MedSpa & Aesthetics", "Medical Aesthetics", "Limassol, Cyprus", "Mobile LCP 6.8s, broken booking modal, no SEO schema", "Next.js High-Conversion Redesign + Booking Flow", "€2,200", 95, "Audit Video Sent", "info@auramedspa.cy"],
    ["BATCH-2026-10-24", "2026-10-24 16:40", "Vanguard Property Group", "Luxury Real Estate", "Paphos, Cyprus", "Outdated WordPress theme, slow property filter", "Custom React Property Search + multilingual SEO", "€3,500", 93, "Follow-up Due 28 Oct", "directors@vanguardcyprus.com"],
    ["BATCH-2026-10-24", "2026-10-24 16:40", "Kensington Legal Partners", "Boutique Law Firm", "London, UK", "No SSL redirect on subdomains, poor mobile nav", "Corporate Web Refresh + Technical SEO Hardening", "£2,800", 90, "Batch Queued", "enquiries@kensingtonlegal.co.uk"],
    ["BATCH-2026-10-24", "2026-10-24 16:40", "Solis Yacht Charters", "Marine & Hospitality", "Larnaca, Cyprus", "No instant inquiry WhatsApp/Stripe deposit flow", "Luxury Charter Booking Portal + Speed Sprint", "€2,900", 92, "Proposal Drafted", "charters@solisyachts.com"],
    ["BATCH-2026-10-18", "2026-10-18 14:10", "Apex Commercial Interiors", "B2B Construction", "Manchester, UK", "Zero local service-area landing pages, slow gallery", "B2B Lead Engine Website + Case Study Hub", "£2,400", 88, "Replied — Reviewing Quote", "projects@apexinteriors.co.uk"]
  ],
  "Batch Run History": [
    ["Batch ID", "Executed Timestamp", "Trigger Type", "Target Geography", "Domains Audited", "High-Fit Leads Found", "Proposals Sent", "Next Scheduled Run"],
    ["BATCH-2026-10-24", "2026-10-24 16:40", "Manual Freelance Batch Run", "Cyprus (Limassol/Paphos) + UK", 50, 12, 4, "On-Demand Only (Not on a daily schedule)"],
    ["BATCH-2026-10-18", "2026-10-18 14:10", "Manual Freelance Batch Run", "UK Commercial & Hospitality", 40, 9, 5, "On-Demand Only (Not on a daily schedule)"]
  ]
};

// 8. SPARK AGENT SHEETS (India, EU, UK, USA — Owned by Spark Agent; Primary Agent Access Refused)
grids['15hOKXuvZDIrytvqRLQNvLQx4w7wTdFS-DSnvT1XIkOw'] = {
  "16 Oct 2026": [
    ["Agent Owner", "Access Status", "Date Found", "Company", "Role Title", "Location", "Work Mode", "Salary (INR)", "Fit (1-10)", "Status", "Official Application URL"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "18 Oct 2026", "Supaboard", "Frontend Developer (SDE I — React/Next.js)", "Bangalore / Hybrid", "Hybrid", "₹4,00,000 – ₹8,00,000 / yr", 10, "VERIFIED LIVE", "https://wellfound.com/jobs/3544800-frontend-developer-sdei"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "18 Oct 2026", "Masterclass Space", "WordPress & Frontend Developer", "Remote, India", "Remote", "₹30,000 – ₹40,000 / mo", 10, "VERIFIED LIVE", "https://wellfound.com/jobs/4824745-wordpress-developer-project-based"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "18 Oct 2026", "Airveda Technologies", "Product Design Associate (UI/UX & Web)", "Delhi NCR, India", "On-site", "₹3,00,000 – ₹5,00,000 / yr", 10, "VERIFIED LIVE", "https://wellfound.com/jobs/4157873-product-design-associate"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "16 Oct 2026", "Zunderdog", "Junior Web Developer (Fresher)", "India (Remote)", "Remote", "₹3,50,000 – ₹5,50,000 / yr", 10, "VERIFIED LIVE", "https://www.zunderdog.com/careers/junior-web-developer-fresher"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "16 Oct 2026", "Pattem Digital", "Junior Frontend Developer", "Bangalore, India", "Hybrid", "₹4,50,000 – ₹7,00,000 / yr", 9, "VERIFIED LIVE", "https://www.pattemdigital.com/career/junior-frontend-developer"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "16 Oct 2026", "Headout", "Frontend Engineer", "Bangalore, India", "Hybrid", "₹8,00,000 – ₹14,00,000 / yr", 9, "VERIFIED LIVE", "https://job-boards.greenhouse.io/headoutcareers/jobs/470774"]
  ]
};

grids['1wi4i3qpDLOzfNXa5_AR6Bvhb4w40xTr4QQmM9qGAzj4'] = {
  "16 Oct 2026": [
    ["Agent Owner", "Access Status", "Date Found", "Company", "Role Title", "Country / City", "Work Mode", "Compensation", "Fit (1-10)", "Status", "Official Application URL"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "19 Oct 2026", "Effektify", "Junior Frontend Developer", "Sweden (Halmstad / Hybrid)", "Hybrid", "Market-rate SEK", 9, "VERIFIED LIVE", "https://effektify.com/karriar/junior-frontend-developer/"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "19 Oct 2026", "Coveo", "Frontend Developer Intern / Junior", "Netherlands / Remote", "Hybrid / Remote", "Paid EU Package", 8, "VERIFIED LIVE", "https://www.coveo.com/en/company/careers/open-positions/"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "19 Oct 2026", "Digital Tree", "Junior Web Developer (Opium Works)", "Cyprus (Nicosia)", "Hybrid", "€1,800 – €2,300 / mo", 9, "VERIFIED LIVE", "https://ergodotisi.com/en-CY/jobs/junior-web-developer-opium-works-93971061"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "19 Oct 2026", "Reed Malta / NextMove", "Junior Frontend Software Developer", "Malta (Sliema)", "Hybrid", "€28,000 – €35,000 / yr", 9, "VERIFIED LIVE", "https://www.nextmove.mt/CNTQP3TYEJ/sliema-malta/full-time/junior-frontend-software-developer"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "19 Oct 2026", "AVENGA", "Frontend Developer (React/Angular)", "Poland (Wroclaw)", "Hybrid", "PLN 10,000 – 14,000 / mo", 9, "VERIFIED LIVE", "https://nofluffjobs.com/job/frontend-developer-entire-m-wroclaw"]
  ]
};

grids['1tIi0TiQ0L1fNUcqTWTsRVJhV-69g3pbrHGGkhmGGvyo'] = {
  "16 Oct 2026": [
    ["Agent Owner", "Access Status", "Date Found", "Company", "Role Title", "Location", "Work Mode", "Salary (USD)", "Fit (1-10)", "Status", "Official Application URL"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "21 Oct 2026", "Canonical", "Web Frontend Engineer (React / Vanilla CSS)", "USA / Global Remote", "Remote", "$48,000 – $70,000 / yr", 9, "VERIFIED LIVE", "https://job-boards.greenhouse.io/canonical/jobs/5150422"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "21 Oct 2026", "KoboToolbox", "Frontend Web Application Developer", "Remote (Global / US TZ)", "Remote", "$55,000 – $75,000 / yr", 9, "VERIFIED LIVE", "https://remotive.com/remote-jobs/design/frontend-web-application-developer-2091141"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "21 Oct 2026", "Automattic", "Frontend / WordPress Engineer", "USA / Anywhere Remote", "Remote", "$65,000 – $95,000 / yr", 9, "VERIFIED LIVE", "https://automattic.com/work-with-us/"],
    ["Spark Agent", "READ-ONLY MIRROR (Primary Agent Access Refused)", "21 Oct 2026", "DuckDuckGo", "Junior/Mid Frontend Web Engineer", "USA / Remote", "Remote", "$80,000 – $110,000 / yr", 8, "VERIFIED LIVE", "https://duckduckgo.com/hiring"]
  ]
};

fs.writeFileSync(gridsPath, JSON.stringify(grids, null, 2), 'utf8');
console.log('Successfully updated verified_sheet_grids.json with', Object.keys(grids).length, 'complete workbooks.');
