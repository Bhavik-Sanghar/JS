const express = require("express");
const { getData, getTotal } = require("./db");
const PORT = 3552;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let sort_by = req.query.sort_by || "id";
  let sort_flag = parseInt(req.query.sort_flag) || 0;

  let limit = 10;
  let total_rec = await getTotal();

  let total_page = Math.floor(total_rec / limit);

  let data = {
    current_page: page,
    total_page: total_page,
    sort_by : sort_by,
    sort_flag : sort_flag
  };
  console.log(data);
  let student_data = await getData(page, limit , sort_by , sort_flag);
  console.log(student_data);
  res.render("index", { data, student_data });
});

app.listen(PORT, () => {
  console.log(`Serever is Live at http://localhost:${PORT}`);
});
