import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import PropsType from 'prop-types';

import placeholderImg from '../assets/img/placeholder.png';

const propsType = {
  item: PropsType.object,
};

class Card extends React.PureComponent {
  render() {
    const {item, navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Detail', {movieId: item.id})}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={
            item.poster_path
              ? {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}
              : placeholderImg
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    top: 10,
    width: 100,
    textAlign: 'center',
  },
});

Card.propsType = propsType;

export default Card;
