const db = require("./db_connection");

function insertApplicant(data, callback) {

  const sql = `
    INSERT INTO applicants
    (first_name, last_name, designation ,address1, address2, email, phone, city, state, zip_code, gender ,relationship_status, dob, notice_period, department, current_ctc, expected_ctc)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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