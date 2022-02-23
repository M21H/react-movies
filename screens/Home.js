import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  getDocumentaryMovies,
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
} from '../service/service';
import {SliderBox} from 'react-native-image-slider-box';

import List from '../components/List';
import Error from '../components/Error';

const dimensions = Dimensions.get('screen');

const Home = ({navigation}) => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaryMovies, setDocumentaryMovies] = useState();
  const [popularTv, setPopularTv] = useState();

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    return await Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            );
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
          setLoaded(true);
        },
      )
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <>
      {loaded && !error && (
        <ScrollView>
          {moviesImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={moviesImages}
                autoPlay={true}
                circleLoop={true}
                sliderBoxHeight={dimensions.height / 1.5}
                dotStyle={styles.sliderStyle}
              />
            </View>
          )}
          {popularMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular Movies"
                content={popularMovies}
              />
            </View>
          )}
          {popularTv && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular TV Shows"
                content={popularTv}
              />
            </View>
          )}
          {familyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Family Movies"
                content={familyMovies}
              />
            </View>
          )}
          {documentaryMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Documentary Movies"
                content={documentaryMovies}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator />}
      {error && <Error />}
    </>
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
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
