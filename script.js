const ol = document.querySelector("ol");

const favMovies = [
  {
    name: "You've Got Mail",
    year: "1998", 
    director: "Nora Ephron",
    poster: "https://flxt.tmsimg.com/assets/p22186_p_v11_aq.jpg"
  }, 
  {
    name: "Midnight in Paris",
    year: "2011", 
    director: "Woody Allen",
    poster: "https://m.media-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_FMjpg_UX1000_.jpg"
  },
  {  
    name: "High Society",
    year: "1956", 
    director: "Charles Walters",
    poster: "https://thecinemaarchives.com/wp-content/uploads/2019/04/high-society-movie-poster.jpg"
  }
]

const template = favMovies.map(movie => `
  <li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Name: ${movie.director}</p>
    <img style="width: 500px" src="${movie.poster}" />
  </li>
`);

ol.innerHTML = template.join('');