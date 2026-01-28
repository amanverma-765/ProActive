const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(process.cwd(), 'proactive.db');
const db = new Database(dbPath);

const user = db.prepare("SELECT * FROM users WHERE email = ?").get("script@example.com");
console.log("User Verification:", user ? "PASS" : "FAIL", user ? user.email : "");

const msg = db.prepare("SELECT * FROM contact_messages WHERE email = ?").get("script@test.com");
console.log("Contact Verification:", msg ? "PASS" : "FAIL", msg ? msg.message : "");
