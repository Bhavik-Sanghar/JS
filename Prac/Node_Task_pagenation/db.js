const mysql = require("mysql2/promise");

async function getData(page, limit, sort_by, sort_flag) {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "students",
  });

  const offset = (page - 1) * limit;

  const query = `SELECT * FROM student_data ORDER BY ? ? limit ? offset ? `;

  if (sort_flag == 0) {
    flag = "ASC";
    const [rows] = await db.query(query, [sort_by, flag, limit, offset]);
    return rows;
  }
  else{
    flag = "DESC";
    const [rows] = await db.query(query, [sort_by, flag, limit, offset]);
    return rows;
  }

  // console.log(rows);

}

async function getTotal() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "students",
  });

  const query = `SELECT COUNT(*) as total FROM student_data`;

  const [rows] = await db.query(query);

  // console.log(rows);

  return rows[0].total;
}

// getData(1,10);

module.exports = { getData, getTotal };
