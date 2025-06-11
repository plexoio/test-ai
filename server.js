const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from 'public/site'
app.use(express.static(path.join(__dirname, "public/site")));

// Fallback route for single-page apps or 404s
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/site", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
