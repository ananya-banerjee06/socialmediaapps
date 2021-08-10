import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Instagram extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> <Image
        style={styles.imageIcon}
          source={{
            uri:'https://static01.nyt.com/images/2016/05/11/us/12xp-instagram/12xp-instagram-videoSixteenByNineJumbo1600-v2.jpg'
          }}
        />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 0,
  }
});
