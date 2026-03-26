const db = require("./db_connection");

async function insertApplicant(data, callback) {

  const sql = `
    INSERT INTO applicants
    (first_name, last_name, designation ,address1, address2, email, phone, city, state, zip_code, gender ,relationship_status, dob, notice_period, department, current_ctc, expected_ctc)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // {
//   f_name: 'Bhavik',
//   l_name: 'Sanghar',
//   designation: 'Software Dev',
//   address_1: 'jgjgjhg',
//   email: 'afaeds@gmil.cim',
//   address_2: '',
//   phone: '1234567890',
//   city: 'Ahm',
//   gender: 'male',
//   state: 'gujrat',
//   relationship_status: 'single',
//   zip_code: '454544',
//   dob: '2003-04-22',
//   education: [
//     {
//       course: 'SSC',
//       year: '2018',
//       university: 'GSEB',
//       result: '55.22'
//     },
//     {
//       course: 'HSC',
//       year: '2020',
//       university: 'GSEB',
//       result: '77.69'
//     }
//   ],
//   work: [
//     {
//       company: 'esparkBiz',
//       from: '2026-01-27',
//       to: '2026-03-13',
//       package: '3',
//       reason: 'Nothing',
//       ref_contact: '4568791320',
//       ref_name: 'none'
//     }
//   ],
//   languages: {
//     hindi: { selected: 'on', read: 'on', write: 'on', speak: 'on' },
//     english: { selected: 'on', read: 'on', speak: 'on' },
//     gujarati: { selected: 'on', read: 'on', write: 'on', speak: 'on' }
//   },
//   technologies: {
//     java: { selected: 'JAVA', level: 'Intermediate' },
//     sql: { selected: 'SQL', level: 'Expert' },
//     node: { selected: 'Node', level: 'Intermediate' }
//   },
//   ref_name_1: 'manthan',
//   ref_con_1: '1234567890',
//   ref_rel_1: 'bro',
//   ref_name_2: 'jay',
//   ref_con_2: '9874561230',
//   ref_rel_2: 'bro2',
//   preferd_location: 'city_1',
//   notice_period: '90',
//   dept: 'dev',
//   current_CTC: '5',
//   expacted_CTC: '55'
// }

  try{
    const [res] = await db.query(sql,[
      data.f_name,
      data.l_name,
      data.designation,
      data.address_1,
      data.address_2,
      data.email,
      data.phone,
      data.city,
      data.state,
      data.zip_code,
      data.gender,
      data.relationship_status,
      data.dob,
      data.notice_period,
      data.dept,
      data.current_CTC,
      data.expacted_CTC
    ])

    let last_id = res.inserId
    console.log(`last id is ${last_id}`);
  }
  catch(err){
    console.log(err);
  }
}




module.exports = { insertApplicant };