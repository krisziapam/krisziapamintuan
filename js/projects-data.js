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
  }
];
