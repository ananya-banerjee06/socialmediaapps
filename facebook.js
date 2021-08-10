import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

export default class Facebook extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> <Image
        style={styles.imageIcon}
          source={{
            uri:'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'
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
