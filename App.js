import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import Twitter from "./screens/twitter";
import Instagram from "./screens/instagram";
import Facebook from "./screens/facebook";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Twitter: { screen: Twitter },
  Instagram: { screen: Instagram },
  Facebook: { screen: Facebook }
});

const AppContainer = createAppContainer(TabNavigator);