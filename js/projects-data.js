// Project data. To add a project, copy one object, change its fields and add it to the list.
// Fields left as null or [] are not shown on the page.
window.PROJECTS = [
  {
    id: "etala-v2",
    name: "e-TALA V2",
    subtitle: "Incident Reporting and Fire & Rescue Operations Management System",
    type: "Academic project",
    status: "In development",
    summary: "A web application for Barangay San Juan Fire & Rescue in Cainta, Rizal. It handles incident reports, responder assignments, equipment, vehicles and operational reports in one system.",
    purpose: "Fire and rescue teams need one place to record incidents, see who is handling them, and track the equipment and vehicles they use. This project was built for my Web Development course to replace scattered records with a single database-backed system.",
    role: "I developed the application: the PHP backend, the MySQL database, the web pages and the JavaScript that updates them. I am also continuing to fix and improve it.",
    features: [
      "Separate Admin and Responder logins with role-based access",
      "Incident reporting and management, including photos and follow-up updates",
      "Incident assignments and incident transfers between responders",
      "Today's Live Operations feed that refreshes through AJAX and JSON",
      "Admin dashboard with statistics from the database and an incident calendar",
      "Equipment inventory, equipment requests and a stock transaction history",
      "Vehicle records, fuel logs and maintenance tracking",
      "Reports and analytics with date filters and CSV export",
      "Emergency directory, notifications and a weather lookup"
    ],
    stack: {
      "Languages": ["HTML5", "CSS3", "JavaScript", "PHP 8", "SQL"],
      "Techniques": ["AJAX", "JSON", "PDO prepared statements", "CSRF protection", "Password hashing"],
      "Database": ["MySQL / MariaDB", "phpMyAdmin"],
      "Tools": ["Visual Studio Code", "XAMPP (Apache)"]
    },
    process: [
      "Listed the main tasks of the Fire & Rescue team: reporting, assigning, handing over, and tracking equipment and vehicles.",
      "Designed the etala_v2 database with related tables for users, incidents, assignments, transfers, equipment and vehicles.",
      "Built the PHP pages and the AJAX endpoints that return JSON.",
      "Added login, role checks, CSRF tokens and prepared statements to protect the data.",
      "Reviewed the project for errors and long pages, and started improving navigation, search and pagination."
    ],
    testing: "The project is developed and run locally on XAMPP with MySQL managed in phpMyAdmin. It is still a development build. Formal test cases and a public deployment are not done yet.",
    images: [],
    repo: null,
    demo: null
  },
  {
    "id": "pdts",
    "name": "PUP Document Tracking System (PDTS)",
    "subtitle": "Web application prototype for routing and monitoring internal documents",
    "type": "Team project",
    "status": "In development",
    "summary": "A team-built web application for managing, securing and monitoring internal document routing at the PUP Open University System registrar. Staff log submissions, update their status and send email notifications to applicants.",
    "purpose": "Registrar offices handle many documents from many applicants. This system gives staff one place to record each submission, follow its history and notify the applicant.",
    "role": "Full-stack development contributor. I worked on coding, maintenance, database integration, testing and deployment as part of the team.",
    "features": [
      "Secure login and account creation for registrar staff",
      "Dashboard with applicant and submission counts and recent submissions",
      "Document submissions list with search and status filters, and a status update for each document",
      "Applicant pre-registration and tracking lookup",
      "Email notifications with automation rules, templates and test sending through the Resend API",
      "Reports and filters, audit logs and system settings"
    ],
    "stack": {
      "Languages": [
        "Java",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "Framework": [
        "Spring Boot"
      ],
      "Database": [
        "Supabase (PostgreSQL)",
        "MySQL"
      ],
      "Services": [
        "Resend API (email)"
      ],
      "Hosting": [
        "Render"
      ]
    },
    "testing": "The team deployed the application on Render. Development is still ongoing.",
    "images": [
      {
        "src": "images/projects/pdts-1.jpg",
        "alt": "PDTS registrar dashboard with applicant counts, recent document submissions and upcoming deadlines"
      },
      {
        "src": "images/projects/pdts-2.jpg",
        "alt": "PDTS document submissions table with search, status filters and a status menu for each row. Student names are blurred.",
        "caption": "Student names are blurred for privacy."
      },
      {
        "src": "images/projects/pdts-3.jpg",
        "alt": "PDTS email notifications page with automation rules for registration and document events"
      }
    ],
    "repo": null,
    "demo": null
  },
  {
    "id": "pdts-v2",
    "name": "PDTS v2",
    "subtitle": "Document Tracking and Submission System",
    "type": "Academic prototype",
    "status": "Prototype",
    "summary": "A student system proposal that helps registrar staff at the PUP Open University System record document submissions, check requirements and keep audit records. Applicants can look up the status of their documents with a tracking number.",
    "purpose": "Registrar staff need to know which requirements a student has already submitted and which are still missing, and students need a way to check their status without calling the office.",
    "role": "Student web developer. I built the prototype as a responsive web application.",
    "features": [
      "Purpose-based requirement checklists, for example admission or graduation",
      "Student information form with delivery method and remarks, plus an email to the student after saving",
      "Public tracking page where a tracking number shows status by submission, with student details hidden",
      "Role-based access for Registrar Officers and Head Admins",
      "Audit logs and admin settings",
      "Server connection settings for running the app on a local network"
    ],
    "stack": {
      "Languages": [
        "TypeScript",
        "JavaScript"
      ],
      "Frontend": [
        "React",
        "Tailwind CSS"
      ],
      "Backend": [
        "Node.js",
        "Express"
      ],
      "Database": [
        "PostgreSQL"
      ]
    },
    "testing": null,
    "images": [
      {
        "src": "images/projects/pdts-v2-1.jpg",
        "alt": "PDTS v2 registrar screen for quick admission document entry with a requirements checklist"
      },
      {
        "src": "images/projects/pdts-v2-3.jpg",
        "alt": "PDTS v2 tracking page showing document status for each submission batch"
      },
      {
        "src": "images/projects/pdts-v2-2.jpg",
        "alt": "PDTS v2 mobile sign-in screen for registrar staff"
      },
      {
        "src": "images/projects/pdts-v2-4.jpg",
        "alt": "PDTS v2 document entry form and checklist on a phone"
      }
    ],
    "repo": null,
    "demo": null
  },
  {
    "id": "pupass",
    "name": "PUPass",
    "subtitle": "Student Appointment and Queue Management System",
    "type": "Academic prototype",
    "status": "Prototype",
    "summary": "A web-based prototype for booking student appointments and managing office queues at PUP. Students book a slot and follow their queue number, and administrators manage the queue.",
    "purpose": "Students often wait in long lines at school offices. The project explores booking a time slot ahead and showing the live queue position instead.",
    "role": "Web developer and project contributor.",
    "features": [
      "Student and admin entry points",
      "Appointment booking for offices such as Registrar, Cashier, Library, Guidance, Student Affairs and Scholarship",
      "Student queue monitor with queue number, position and estimated wait",
      "Admin dashboard with counts for waiting, serving and completed appointments",
      "Admin filters by office, date, queue view and search by student ID, name or queue number",
      "Feedback form, technical error reports and a dark mode switch",
      "Firebase for sign-in and real-time data"
    ],
    "stack": {
      "Languages": [
        "HTML5",
        "CSS3",
        "JavaScript"
      ],
      "Framework": [
        "Bootstrap"
      ],
      "Database": [
        "Firebase"
      ],
      "Tools": [
        "Git",
        "GitHub"
      ],
      "Hosting": [
        "GitHub Pages"
      ]
    },
    "testing": "Version control with Git and GitHub, and deployment on GitHub Pages.",
    "images": [
      {
        "src": "images/projects/pupass-1.jpg",
        "alt": "PUPass student home screen with services and a live office queue monitor"
      },
      {
        "src": "images/projects/pupass-2.jpg",
        "alt": "PUPass start screen with Continue as Student and Continue as Admin"
      },
      {
        "src": "images/projects/pupass-3.jpg",
        "alt": "PUPass admin dashboard with appointment counts and queue filters"
      }
    ],
    "repo": null,
    "demo": null
  },
  {
    "id": "trustcart",
    "name": "TrustCart",
    "subtitle": "E-commerce marketplace web application",
    "type": "Team prototype",
    "status": "Prototype",
    "summary": "An e-commerce marketplace prototype built around trust, transparency and buyer protection, with separate buyer, seller and admin workflows.",
    "purpose": "Online buyers often cannot tell which sellers to trust. TrustCart is designed around seller trust and buyer protection.",
    "role": "Web developer and project contributor on a development team. I worked on coding, maintenance and technical implementation, and helped with troubleshooting, testing and features for the buyer, seller and admin workflows.",
    "features": [
      "Buyer, seller and admin workflows",
      "Database functionality built on PostgreSQL and Supabase",
      "Application deployed on Render"
    ],
    "stack": {
      "Languages": [
        "JavaScript"
      ],
      "Database": [
        "PostgreSQL",
        "Supabase"
      ],
      "Hosting": [
        "Render"
      ]
    },
    "testing": "The images below are overview graphics for the prototype, not screenshots of the running application, and they show sample figures. Deployment is on Render.",
    "images": [
      {
        "src": "images/projects/trustcart-1.jpg",
        "alt": "TrustCart prototype overview graphic showing the buyer, seller and admin sides",
        "caption": "Overview graphic for the prototype. It is not a screenshot of the running application and uses sample figures."
      },
      {
        "src": "images/projects/trustcart-2.jpg",
        "alt": "TrustCart buyer side overview graphic",
        "caption": "Overview graphic for the prototype. It is not a screenshot of the running application and uses sample figures."
      },
      {
        "src": "images/projects/trustcart-3.jpg",
        "alt": "TrustCart seller side overview graphic",
        "caption": "Overview graphic for the prototype. It is not a screenshot of the running application and uses sample figures."
      },
      {
        "src": "images/projects/trustcart-4.jpg",
        "alt": "TrustCart admin side overview graphic",
        "caption": "Overview graphic for the prototype. It is not a screenshot of the running application and uses sample figures."
      }
    ],
    "repo": null,
    "demo": null
  },
  {
    "id": "aralloop-campus",
    "name": "AralLoop Campus",
    "subtitle": "Student productivity and collaboration web app",
    "type": "Academic prototype",
    "status": "Prototype",
    "summary": "A mobile-friendly web app that brings study planning, flashcards, quizzes, focus sessions and group project tools into one place for students.",
    "purpose": "Students keep their schedules, reviewers and group work in different apps. This prototype puts them in one organized workflow.",
    "role": "Web developer (student prototype). I focused on responsive design, easy navigation, rule-based study recommendations and an organized workflow for students and group projects.",
    "features": [
      "Academic planning and study prioritization",
      "Reviewers, flashcards and quizzes",
      "Focus sessions and scheduling",
      "Project management for group work",
      "Study mind maps and a coding workspace",
      "Works as a Progressive Web App using local storage"
    ],
    "stack": {
      "Languages": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "Type": [
        "Progressive Web App"
      ],
      "Storage": [
        "Browser local storage"
      ]
    },
    "testing": null,
    "images": [
      {
        "src": "images/projects/aralloop-1.jpg",
        "alt": "AralLoop Campus overview graphic with a laptop showing the dashboard, study planner, mind map, coding workspace and project board",
        "caption": "Overview graphic for the prototype. It is not a screenshot of the running application."
      }
    ],
    "repo": null,
    "demo": null
  }

// Template for a new project. Copy it above the closing "];" (and remove the // marks), then fill it in.
// Use only facts you can stand behind. Leave out anything that does not apply.
//  ,{
//    id: "short-name-with-dashes",
//    name: "Project title",
//    subtitle: "One-line description of what it is",
//    type: "Prototype",                 // Academic project, Personal project, Prototype or Professional project
//    status: "Completed",               // for example Completed, In development, Prototype
//    summary: "Two or three sentences on what it is and who it is for.",
//    purpose: "The problem it solves or the goal of the project.",
//    role: "What you personally did.",
//    features: ["Feature one", "Feature two"],
//    stack: { "Languages": ["HTML5", "CSS3"], "Tools": ["Visual Studio Code"] },
//    process: ["Step one", "Step two"],
//    testing: "How it was checked and where it is hosted, if it is.",
//    images: [{ src: "images/projects/name-1.jpg", alt: "What the screenshot shows", caption: "Optional caption" }],
//    repo: null,                        // GitHub link, or null
//    demo: null                         // live demo link, or null
//  }
];
