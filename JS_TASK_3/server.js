//backend sever 
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to handle form submission
app.post("/submit", (req, res) => {
  const formData = req.body; // POST data is in body
  console.log("Received form data:", formData);
  res.send("Form data received successfully!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});