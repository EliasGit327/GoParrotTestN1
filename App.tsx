import React from 'react';
import HomeScreen from "./src/HomeScreen";
import { Provider } from 'react-redux';
import { ThemeStore } from "./stores/theme-store/theme-store";
import { StatusBar } from "react-native";
import { Text } from 'react-native';
import { ThemeProvider } from "styled-components/native";

const App = () => {

  return (
    <Provider store={ThemeStore}>
      <HomeScreen/>
    </Provider>
  )};
export default App;
