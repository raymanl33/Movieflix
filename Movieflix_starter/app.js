/*
 Authors:
 Raymond Lee, A01062029
 Your Partner's Name and student #:
*/
const express = require("express");
const fs = require('fs');

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const myname = 'Raymond'

app.get("/", (req, res) => res.render("pages/index", {name: myname, movies: ''}));

app.get("/myForm", (req, res) => res.render("pages/myForm"));

app.post("/myForm", (req, res) => {
  let movieData = req.body;
  console.log(movieData)
  const movieList = movieData['MovieID'].split(', ')
  console.log(movieList)
  res.render("pages/index", { name: myname, movies: movieList});
});

app.get("/myListQueryString", (req, res) => {
  let movie1 = req.query.movie1;
  let movie2 = req.query.movie2;
  const myList = []
  myList.push(movie1, movie2)
  res.render("pages/index", {name: myname, movies: myList });
});

app.get("/search/:movieName", (req, res) => {
  let search = req.params.movieName;
  fs.readFile('movieDescriptions.txt', (err, content) => {
    const movie_chk = content.toString().split('\n')
    for (num in movie_chk) {
      let movieTitle = movie_chk[num].split(':')[0]
      console.log(movieTitle.replace(/\s+/g, ''))
      if (movieTitle.replace(/\s+/g, '') === search) {
        res.render("pages/searchResult", { title: movieTitle, description: movie_chk[num].split(':')[1] });
      } 
    }
    res.render("pages/searchResult", { title: search, description: `Movie ${search} could not be found` });
  })
  
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});