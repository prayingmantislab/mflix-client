import Category from '../models/category';
import Movie from '../models/movie';

export const CATEGORIES = [
  new Category('c1', 'Recommended'),
  new Category('c2', 'New'),
];


export const MOVIES = [
  new Movie(
    'm1',
    ['c1'],
    'The Shawshank Redemption',
    '1994',
    'tt0111161',
    'movie',
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  ),
  new Movie(
    'm2',
    ['c1'],
    'The Godfather',
    '1972',
    'tt0068646',
    'movie',
    "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  ),
  new Movie(
    'm3',
    ['c1','c2'],
    'Dune',
    '2021',
    'tt1160419',
    'movie',
    "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  ),
  new Movie(
    'm4',
    ['c1'],
    'The Dark Knight',
    '2008',
    'tt0468569',
    'movie',
    "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  ),
  new Movie(
    'm5',
    ['c2'],
    'Minions: The Rise of Gru',
    '2022',
    'tt5113044',
    'movie',
    "https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_SX300.jpg",
  ),
  new Movie(
    'm6',
    ['c1','c2'],
    "House of the Dragon",
    '2022',
    "tt11198330",
    'series',
    "https://m.media-amazon.com/images/M/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
  ),
  new Movie(
    'm7',
    ['c1','c2'],
    'Better Call Saul',
    '2015-2022',
    'tt3032476',
    'series',
    'https://m.media-amazon.com/images/M/MV5BMTMxOGM0NzItM2E0OS00YWYzLWEzNzUtODUzZTBjM2I4MTZkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg',
  ),
];
