import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

const App = () => {
  return (
    <View style={styles.container}>
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
      <StatusBar style="auto" />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
