const express = require("express");
const { insertApplicant } = require("./query");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {

  const formData = req.body;

  console.log(formData);

  insertApplicant(formData, (err, result) => {

    if (err) {
      console.error(err);
      return res.send("Database error");
    }

    res.send("Data stored successfully");
  });

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});