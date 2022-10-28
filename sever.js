const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "Hollayemi",
    backend: true,
    age: 22,
    bio: "My name is Ganiyu Olasunkanmi,male by gender and fair in complexion.Loves cooking with Node.js and express framework",
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${5000}...`);
});
