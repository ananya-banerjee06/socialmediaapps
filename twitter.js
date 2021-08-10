import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Twitter extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> <Image
        style={styles.imageIcon}
          source={{
            uri:'https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg'
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
