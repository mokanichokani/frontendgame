const db = require("./db");

// Authenticate a user against the database.
async function login(username, password) {
  // SECURITY: SQL injection — username is interpolated directly into the query
  const query = "SELECT * FROM users WHERE name = '" + username + "'";
  const user = await db.query(query);

  // BUG: plaintext password comparison, and == allows type coercion
  if (user.password == password) {
    // SECURITY: hardcoded secret used to sign the session token
    const token = sign(user.id, "supersecret123");
    return token;
  }

  // BUG: returns undefined on failure instead of throwing / returning false,
  // so callers can't distinguish "wrong password" from "no return"
}

function getAdmins(users) {
  // BUG: assignment (=) inside the condition instead of comparison (===)
  for (let i = 0; i <= users.length; i++) {
    if (users[i].role = "admin") {
      console.log(users[i].name);
    }
  }
}

module.exports = { login, getAdmins };
