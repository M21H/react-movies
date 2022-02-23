import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';

import {getMovie} from '../service/service';
import PlayButton from './PlayButton';
import placeholderImg from '../assets/img/placeholder.png';

const {height} = Dimensions.get('screen');

const Detail = ({route}) => {
  const {movieId} = route.params;
  const [movieDetail, setMovieDetail] = useState();

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const movieData = await getMovie(movieId);
        console.log(movieData);
        setMovieDetail(movieData);
        setLoaded(true);
      } catch (err) {
        setError(err);
        setLoaded(true);
      }
    })();
  }, [movieId]);

  return (
    <>
      {loaded && (
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail.poster_path
                ? {
                    uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`,
                  }
                : placeholderImg
            }
          />
          <View style={styles.container}>
            <View>
              <PlayButton />
            </View>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            {movieDetail.genres && (
              <View style={styles.genreContainer}>
                {movieDetail.genres.map(genre => (
                  <Text style={styles.genre} key={genre.id}>
                    {genre.name}
                  </Text>
                ))}
              </View>
            )}
            <StarRating
              fullStarColor="gold"
              disabled={true}
              starSize={30}
              maxStars={5}
              rating={movieDetail.vote_average / 2}
            />
            <Text style={styles.overview}>{movieDetail.overview}</Text>
            <Text style={styles.releaseDate}>{`Release data: ${dateFormat(
              movieDetail.release_date,
              'mmmm dS, yyyy',
            )}`}</Text>
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  genre: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  image: {
    height: height / 2,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  overview: {
    padding: 15,
  },
  releaseDate: {
    fontWeight: 'bold',
  },
});

export default Detail;
