import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    rating: 9.3,
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  },
  {
    id: 2,
    title: 'The Godfather',
    year: 1972,
    genre: 'Crime',
    rating: 9.2,
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  },
  // ... other movies
];

const newMovies = [
  {
    id: 3,
    title: 'Dune',
    year: 2021,
    genre: 'Drama',
    rating: 9.3,
    description:
      'The story of paul muadib and his family, who are thrust into a galaxy-spanning adventure when the tyrannical emperor shaddam iv attempts to seize control of the desert planet arrakis.'
  },
  {
    id: 4,
    title: 'Everything everywhere all at once',
    year: 2022,
    genre: 'Action',
    rating: 9.2,
    description:
      'a surialistic movie about the connection between a mother and her daughter fighting in an multiverse battle.'
  },
  // ... other movies
];

const MovieListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ fontSize: 14 }}>{item.year}</Text>
        <Text style={{ fontSize: 14 }}>{item.genre}</Text>
      </View>
    </TouchableOpacity>
  );
};

const MovieDetails = ({ item }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{item.title}</Text>
      <Text style={{ fontSize: 14, marginBottom: 10 }}>{item.year}</Text>
      <Text style={{ fontSize: 14, marginBottom: 10 }}>{item.genre}</Text>
      <Text style={{ fontSize: 14 }}>{item.description}</Text>
      <Text style={{ fontSize: 14, marginTop: 10 }}>Rating: {item.rating}</Text>
    </View>
  );
};

const MoviesScreen = () => {
  const [selectedMovie, setSelectedMovie] = useState({
    id: 1,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    rating: 9.3,
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  });

  const handleMoviePress = (item) => {
    setSelectedMovie(item);
  };

  const renderItem = ({ item }) => {
    return <MovieListItem item={item} onPress={() => handleMoviePress(item)} />;
  };

  const renderDetails = () => {
    if (!selectedMovie) {
      return null;
    }
    return <MovieDetails item={selectedMovie} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={movies} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      {renderDetails()}
      <FlatList data={newMovies} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default MoviesScreen;
