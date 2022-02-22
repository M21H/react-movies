import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import PropsType from 'prop-types';
import Card from './Card';

const propsType = {
  title: PropsType.string,
  content: PropsType.object,
};

class List extends React.PureComponent {
  render() {
    const {title, content} = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({item}) => <Card item={item} />}></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontFamily: 'bolt',
    color: 'black',
    paddingBottom: 20,
  },
});

List.propsType = propsType;

export default List;
