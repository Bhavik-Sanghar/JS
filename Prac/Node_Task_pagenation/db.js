const mysql = require('mysql2/promise'); 

async function getData(page , limit) {

const db = await mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "students"
});


    const offset = (page - 1) * limit;

    const query = `SELECT * FROM student_data limit ? offset ? `;

    const [rows] = await db.query(query , [limit , offset]);

    // console.log(rows);

    return rows;
}

async function getTotal() {

const db = await mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "students"
});


    const query = `SELECT COUNT(*) as total FROM student_data`;

    const [rows] = await db.query(query);

    // console.log(rows);

    return rows[0].total;
}

// getData(1,10);

module.exports = {getData , getTotal}