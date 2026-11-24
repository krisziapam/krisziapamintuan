// Project data for the portfolio. Everything on the Home, Projects, project detail and matrix
// sections comes from this file. To add a project, copy an object below and change its fields.
// Fields that are empty ([] or null) are not shown. "matrix" feeds the technology table.
// "tags" feed the filter buttons on the Projects page (php, mysql, java, postgresql, react, firebase, javascript).
window.PROJECTS = [
 {
  "id": "etala-v2",
  "name": "e-TALA V2",
  "subtitle": "Incident Reporting and Fire & Rescue Operations Management System",
  "type": "Academic project",
  "status": "In development",
  "featured": true,
  "tags": [
   "php",
   "mysql"
  ],
  "summary": "A web application for Barangay San Juan Fire & Rescue in Cainta, Rizal. It records incidents, responder assignments, equipment, vehicles and operational reports in one database-backed system.",
  "purpose": "Fire and rescue teams need one place to record incidents, see who is handling them, and track the equipment and vehicles they use. I built this for my Web Development course to replace scattered records with a single system.",
  "role": "I developed the application: the PHP backend, the MySQL database, the web pages and the JavaScript that updates them. I am continuing to fix and improve it.",
  "features": [
   "Separate Administrator and Responder accounts with role-based access",
   "Incident reporting and management, with photos, a map location and follow-up updates",
   "Incident assignments and incident transfers (handover) between responders",
   "Today's Live Operations feed that refreshes every 15 seconds through AJAX and JSON",
   "Admin dashboard with counts from the database, an incident calendar, trends and a weather forecast",
   "Equipment inventory, equipment requests and returns, and a stock transaction history",
   "Vehicle registry, fuel logs with approval, and maintenance tracking",
   "Reports and analytics with date filters, CSV and XML export, and an audit log",
   "Emergency directory and in-app notifications"
  ],
  "stack": {
   "Languages": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP 8",
    "SQL"
   ],
   "Techniques": [
    "AJAX",
    "JSON",
    "PDO prepared statements",
    "CSRF tokens",
    "Password hashing",
    "Role-based access"
   ],
   "Libraries and services": [
    "Leaflet with OpenStreetMap tiles",
    "Open-Meteo weather API"
   ],
   "Database": [
    "MySQL / MariaDB"
   ],
   "Development tools": [
    "Visual Studio Code",
    "XAMPP (Apache)",
    "phpMyAdmin"
   ]
  },
  "matrix": {
   "frontend": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Leaflet"
   ],
   "backend": [
    "PHP 8 (PDO)"
   ],
   "database": [
    "MySQL / MariaDB",
    "phpMyAdmin"
   ],
   "environment": [
    "VS Code",
    "XAMPP",
    "Apache"
   ],
   "hosting": [
    "Local (XAMPP)"
   ]
  },
  "architecture": {
   "src": "images/etala/architecture.svg",
   "alt": "Architecture diagram: the browser sends requests to Apache and PHP, which use shared include files and a PDO connection to the etala_v2 MySQL database and an uploads folder.",
   "caption": "Request flow and project structure, drawn from the project files.",
   "w": 1100
  },
  "database": {
   "overview": {
    "src": "images/etala/erd-overview.svg",
    "alt": "Simplified database overview of e-TALA V2 showing 24 tables grouped into vehicles and fuel, incident reports, report details, equipment and inventory, and users and operations."
   },
   "detailed": {
    "src": "images/etala/erd-detailed.svg",
    "alt": "Detailed entity relationship diagram of the e-TALA V2 database with every column of the 24 tables and their foreign keys."
   },
   "note": "Drawn from database/schema.sql: 24 tables and 41 foreign keys between them. Two tables that belonged to a feature I removed are left out. A foreign key to the user table is written on the row (for example reported_by → user) instead of being drawn, because almost every table has one.",
   "tables": {
    "ambulance_details": [
     "report_id",
     "destination",
     "patient_condition"
    ],
    "directory_entry": [
     "entry_id",
     "entry_type",
     "name",
     "phone",
     "address_text",
     "notes",
     "visible_to_responders",
     "created_by",
     "updated_at"
    ],
    "equipment": [
     "equipment_id",
     "name",
     "category",
     "kind",
     "quantity",
     "low_stock_at",
     "location_text",
     "condition_text",
     "created_at"
    ],
    "equipment_request": [
     "request_id",
     "equipment_id",
     "requested_by",
     "quantity",
     "reason",
     "status",
     "reviewed_by",
     "created_at",
     "reviewed_at"
    ],
    "equipment_return": [
     "return_id",
     "request_id",
     "requested_by",
     "quantity",
     "status",
     "notes",
     "reviewed_by",
     "created_at",
     "reviewed_at"
    ],
    "fire_details": [
     "report_id",
     "affected_structures",
     "alarm_level"
    ],
    "follow_up": [
     "followup_id",
     "report_id",
     "user_id",
     "update_type",
     "update_datetime",
     "details",
     "created_at"
    ],
    "fuel_approval": [
     "fuel_id",
     "status",
     "approved_by",
     "reviewed_at",
     "receipt_path"
    ],
    "fuel_log": [
     "fuel_id",
     "vehicle_id",
     "recorded_by",
     "liters",
     "price_per_liter",
     "odometer_km",
     "station",
     "fueled_at",
     "notes",
     "created_at"
    ],
    "image": [
     "image_id",
     "report_id",
     "file_path",
     "uploaded_by",
     "uploaded_at"
    ],
    "incident_assignment": [
     "report_id",
     "assigned_user_id",
     "assigned_at"
    ],
    "incident_report": [
     "report_id",
     "incident_number",
     "incident_datetime",
     "status",
     "reported_by",
     "type_id",
     "location_id",
     "vehicle_id",
     "driver_id",
     "narrative",
     "created_at",
     "updated_at",
     "deleted_at"
    ],
    "incident_transfer": [
     "transfer_id",
     "report_id",
     "from_user_id",
     "to_user_id",
     "reason",
     "handover_notes",
     "status",
     "created_at",
     "responded_at"
    ],
    "incident_type": [
     "type_id",
     "name",
     "category",
     "needs_follow_up",
     "status"
    ],
    "inventory_transaction": [
     "transaction_id",
     "equipment_id",
     "user_id",
     "request_id",
     "change_qty",
     "reason",
     "created_at"
    ],
    "location": [
     "location_id",
     "address",
     "landmark",
     "latitude",
     "longitude"
    ],
    "maintenance_detail": [
     "maintenance_id",
     "cost_php",
     "service_date",
     "next_service_date",
     "resolution_notes"
    ],
    "notification_read": [
     "user_id",
     "event_id",
     "read_at"
    ],
    "operational_event": [
     "event_id",
     "actor_id",
     "event_type",
     "title",
     "details",
     "report_id",
     "backup_id",
     "created_at"
    ],
    "report_crew": [
     "report_id",
     "user_id"
    ],
    "user": [
     "user_id",
     "role",
     "position",
     "first_name",
     "last_name",
     "username",
     "password_hash",
     "birthday",
     "contact_number",
     "email",
     "status",
     "created_at"
    ],
    "vehicle": [
     "vehicle_id",
     "unit_name",
     "vehicle_type",
     "plate_number",
     "status"
    ],
    "vehicle_assignment": [
     "assignment_id",
     "vehicle_id",
     "assigned_user_id",
     "assigned_by",
     "assigned_at",
     "returned_at"
    ],
    "vehicle_maintenance": [
     "maintenance_id",
     "vehicle_id",
     "recorded_by",
     "issue_text",
     "status",
     "created_at"
    ]
   }
  },
  "permissions": {
   "rows": [
    [
     "Sign in with a personal account",
     "Yes",
     "Yes"
    ],
    [
     "File a new incident report",
     "Yes",
     "Yes"
    ],
    [
     "Edit an incident report",
     "Any report",
     "Reports they filed"
    ],
    [
     "Delete a duplicate report",
     "Yes",
     "No"
    ],
    [
     "Add follow-up updates to a report",
     "Any report",
     "Reports they filed"
    ],
    [
     "Incident calendar",
     "All incidents",
     "Incidents they filed or are assigned to"
    ],
    [
     "Incident transfers",
     "See and manage all",
     "Request, accept, reject or cancel their own"
    ],
    [
     "Equipment inventory",
     "Manage items, approve or reject requests and returns",
     "Request and return equipment, see their own requests"
    ],
    [
     "Vehicles, fuel and maintenance",
     "Register vehicles, change status, record fuel, resolve maintenance, assign drivers",
     "View only"
    ],
    [
     "Fuel receipts",
     "View",
     "No access"
    ],
    [
     "Emergency directory",
     "Add, edit and delete every entry",
     "View entries marked visible to responders"
    ],
    [
     "Reports, analytics and CSV/XML export",
     "Yes",
     "No"
    ],
    [
     "Audit log and user management",
     "Yes",
     "No"
    ]
   ],
   "note": "Taken from the role checks in the PHP source (require_admin() and the per-page checks on the user's role)."
  },
  "code": {
   "file": "includes/auth.php (excerpt)",
   "lang": "php",
   "text": "// Put this at the top of an admin-only page.\nfunction require_admin(): array\n{\n    $user = require_login();\n    if ($user['role'] !== 'admin') {\n        http_response_code(403);\n        exit('This page is for admins only.');\n    }\n    return $user;\n}\n\n// Returns the user on success, or null if the login is wrong.\nfunction attempt_login(string $username, string $password): ?array\n{\n    $user = find_user_by_username($username);\n    // Even for an unknown username we check a dummy hash,\n    // so the answer does not reveal which usernames exist.\n    $hash = $user['password_hash'] ?? '$2y$10$...';\n    $ok   = password_verify($password, $hash);\n    if (!$user || !$ok || $user['status'] !== 'active') {\n        return null;\n    }\n    session_regenerate_id(true);\n    $_SESSION['user_id'] = (int) $user['user_id'];\n    return $user;\n}\n\n// CSRF protection: every form carries a secret token only our site knows.\nfunction csrf_token(): string\n{\n    if (empty($_SESSION['csrf'])) {\n        $_SESSION['csrf'] = bin2hex(random_bytes(32));\n    }\n    return $_SESSION['csrf'];\n}\n\nfunction csrf_ok(): bool\n{\n    return isset($_POST['csrf'], $_SESSION['csrf']) && hash_equals($_SESSION['csrf'], $_POST['csrf']);\n}",
   "explain": [
    "require_admin() sits at the top of every administrator page. A signed-in user who is not an admin gets a 403 response and the page stops.",
    "attempt_login() checks the password with password_verify(). For an unknown username it still checks a dummy hash, so the response does not reveal which usernames exist. After a successful login it creates a new session ID.",
    "csrf_token() makes one random token per session and csrf_field() puts it in every form. csrf_ok() compares the submitted token with hash_equals(), so a form posted from another website is rejected."
   ]
  },
  "gallery": [
   {
    "src": "images/etala/dashboard-overview.jpg",
    "alt": "e-TALA administrator dashboard with counts for reports today, ongoing incidents and incidents this month, the incident activity calendar and a weather forecast for Cainta",
    "caption": "Administrator dashboard: summary counts, incident calendar and weather forecast."
   },
   {
    "src": "images/etala/dashboard-trends.jpg",
    "alt": "e-TALA incident trends chart by day and a bar chart of incident types for the month",
    "caption": "Incident trends and incident types for the selected month."
   },
   {
    "src": "images/etala/dashboard-incidents.jpg",
    "alt": "e-TALA list of ongoing incidents and a table of recent incident reports with their status",
    "caption": "Ongoing incidents and recent reports. Names in the Filed by column are blurred."
   }
  ],
  "troubleshooting": {
   "intro": "After a code update the site returned HTTP 500 and later HTTP 404. Before changing any file I reviewed the project structure, includes, redirects, configuration and the database schema.",
   "findings": [
    "Every redirect and link is built from the base_url setting, so the folder in the browser address must match it exactly. A different folder name or an extra nested folder gives a 404.",
    "includes/config.php started with a blank line before the PHP tag. That line is sent to the browser before the session starts, which can break sessions and redirects on servers without output buffering.",
    "The database connection function handled connection failures, but other query errors were not caught. A query that did not match the real schema could end as a 500."
   ]
  },
  "deployment": "Runs locally on XAMPP (Apache, PHP, MySQL). The project includes a deployment guide for PHP hosting on InfinityFree. GitHub Pages cannot run PHP, so it is not used for this project.",
  "repo": null,
  "demo": null
 },
 {
  "id": "pdts",
  "name": "PUP Document Tracking System (PDTS)",
  "subtitle": "Web application prototype for routing and monitoring internal documents",
  "type": "Team project",
  "status": "In development",
  "featured": true,
  "tags": [
   "java",
   "postgresql",
   "mysql"
  ],
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
  "matrix": {
   "frontend": [
    "HTML",
    "CSS",
    "JavaScript"
   ],
   "backend": [
    "Java",
    "Spring Boot",
    "Resend API"
   ],
   "database": [
    "Supabase (PostgreSQL)",
    "MySQL"
   ],
   "environment": [],
   "hosting": [
    "Render"
   ]
  },
  "testing": "Testing was part of my contribution to the team.",
  "deployment": "The team deployed the application on Render. Development is still ongoing.",
  "gallery": [
   {
    "src": "images/projects/pdts-1.jpg",
    "alt": "PDTS registrar dashboard with applicant counts, recent document submissions and upcoming deadlines"
   },
   {
    "src": "images/projects/pdts-2.jpg",
    "alt": "PDTS document submissions table with search, status filters and a status menu for each row",
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
  "id": "pupass",
  "name": "PUPass",
  "subtitle": "Student Appointment and Queue Management System",
  "type": "Academic prototype",
  "status": "Prototype",
  "featured": true,
  "tags": [
   "firebase"
  ],
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
   "Development tools": [
    "Git",
    "GitHub"
   ],
   "Hosting": [
    "GitHub Pages"
   ]
  },
  "matrix": {
   "frontend": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap"
   ],
   "backend": [
    "Firebase (authentication)"
   ],
   "database": [
    "Firebase (real-time data)"
   ],
   "environment": [
    "Git",
    "GitHub"
   ],
   "hosting": [
    "GitHub Pages"
   ]
  },
  "deployment": "Version control with Git and GitHub, and deployment on GitHub Pages.",
  "gallery": [
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
  "id": "pdts-v2",
  "name": "PDTS v2",
  "subtitle": "Document Tracking and Submission System",
  "type": "Academic prototype",
  "status": "Prototype",
  "tags": [
   "react",
   "postgresql"
  ],
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
  "matrix": {
   "frontend": [
    "React",
    "TypeScript",
    "Tailwind CSS"
   ],
   "backend": [
    "Node.js",
    "Express"
   ],
   "database": [
    "PostgreSQL"
   ],
   "environment": [],
   "hosting": []
  },
  "gallery": [
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
  "id": "trustcart",
  "name": "TrustCart",
  "subtitle": "E-commerce marketplace web application",
  "type": "Team prototype",
  "status": "Prototype",
  "tags": [
   "postgresql"
  ],
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
  "matrix": {
   "frontend": [
    "JavaScript"
   ],
   "backend": [],
   "database": [
    "PostgreSQL",
    "Supabase"
   ],
   "environment": [],
   "hosting": [
    "Render"
   ]
  },
  "testing": "I helped with troubleshooting, system maintenance and testing.",
  "deployment": "Deployed on Render.",
  "imageNote": "The images below are overview graphics for the prototype, not screenshots of the running application, and they show sample figures.",
  "gallery": [
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
  "tags": [
   "javascript"
  ],
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
  "matrix": {
   "frontend": [
    "HTML",
    "CSS",
    "JavaScript",
    "PWA"
   ],
   "backend": [],
   "database": [
    "Browser local storage"
   ],
   "environment": [],
   "hosting": []
  },
  "imageNote": "The image below is an overview graphic for the prototype, not a screenshot of the running application.",
  "gallery": [
   {
    "src": "images/projects/aralloop-1.jpg",
    "alt": "AralLoop Campus overview graphic with a laptop showing the dashboard, study planner, mind map, coding workspace and project board",
    "caption": "Overview graphic for the prototype. It is not a screenshot of the running application."
   }
  ],
  "repo": null,
  "demo": null
 }
];
