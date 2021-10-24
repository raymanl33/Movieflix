/*
 Authors:
 Raymond Lee, A01062029
 Your Partner's Name and student #:
*/
const express = require("express");

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const MESSAGES = { SUCCESS: "This movie exist in the database!", FAILURE: "This movie does not exist in the databse!"};

app.get("/", (req, res) => res.render("pages/index"));

app.get("/myForm", (req, res) => res.render("pages/myForm"));

app.post("/myForm", (req, res) => {
  let movieData = req.body;
  const movieList = movieData['MovieID'].split(', ')
  console.log(movieList)
  res.render("pages/index", { movies: movieList});
});

app.get("/myListQueryString", (req, res) => {
  // Add your implementation here
});

app.get("/search/:movieName", (req, res) => {
  // Add your implementation here
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});