import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {getUpcomingMovies} from '../service/service';
import {SliderBox} from 'react-native-image-slider-box';

const {height} = Dimensions.get('screen');

const Home = () => {
  const [moviesImages, setMoviesImages] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      const moviesImagesArray = [];
      movies.forEach(movie => {
        moviesImagesArray.push(
          `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        );
      });
      setMoviesImages(moviesImagesArray);
    });
  }, []);

  return (
    <View style={styles.sliderContainer}>
      <SliderBox
        images={moviesImages}
        autoPlay={true}
        circleLoop={true}
        sliderBoxHeight={height / 1.5}
        dotStyle={styles.sliderStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
});

export default Home;
