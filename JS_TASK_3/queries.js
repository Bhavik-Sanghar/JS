const db = require("./db");

function insertApplicant(data, callback) {

  const sql = `
    INSERT INTO applicants
    (first_name, last_name, designation ,address1, address2, email, phone, city, state, zip_code, gender ,relationship_status, dob, notice_period, department, current_ctc, expected_ctc)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  //get last inserted id 
  const lastInsertedIdQuery = `SELECT LAST_INSERT_ID() as id`;

  //add data in education table with last inserted id as foreign key
  const insertEducationQuery = `
    INSERT INTO education
    (applicant_id, course, passing_year, university, result)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.f_name,
      data.l_name,
      data.designation,
      data.address1,
      data.address2,
      data.email,
      data.phone,
      data.city,
      data.state,
      data.zip_code,
      data.gender,
      data.relationship_status,
      data.dob,
      data.notice_period,
      data.department,
      data.current_ctc,
      data.expected_ctc
    ],
    callback
  );

}



module.exports = { insertApplicant };