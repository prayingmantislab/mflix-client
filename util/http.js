import axios from "axios";

const OMDB_URL = "http://www.omdbapi.com/";
const OMDB_API_KEY = "b18c7305";







export async function fetchRecMovies() {
  const response = await axios.get(OMDB_URL + "?apikey=" + OMDB_API_KEY + "&s=" + "star wars");
  
  const recMovies = []

  console.log(response.data)

  for (const key in response.data) {
    const movie = {
      id: key,
      title: response.data[key].Title,
      year: response.data[key].Year,
      poster: response.data[key].Poster,
      imdbID: response.data[key].imdbID,
      type : response.data[key].Type
    };
    recMovies.push(movie);
  }

  return recMovies;
}


export async function fetchNewMovies() {
  const response = await axios.get(OMDB_URL + "?apikey=" + OMDB_API_KEY + "&s=" + "star wars");
  
  const newMovies = []

  console.log(response.data)

  for (const key in response.data) {
    const movie = {
      id: key,
      title: response.data[key].Title,
      year: response.data[key].Year,
      poster: response.data[key].Poster,
      imdbID: response.data[key].imdbID,
      type : response.data[key].Type
    };
    newMovies.push(movie);
  }

  return newMovies;
} 