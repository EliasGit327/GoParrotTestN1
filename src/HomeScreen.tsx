import React from 'react';
import { SafeAreaView, StatusBar, View } from "react-native";
import { connect, Provider, useDispatch, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components/native";
import { ThemeStore } from "../stores/theme-store/theme-store";

const Text = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  margin: 32px 0;
  background-color: ${props => props.theme.PRIMARY_BUTTON_COLOR};
  border-color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  padding: 16px 32px;
  border-radius: 6px;
`;

const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.PRIMARY_BUTTON_TEXT_COLOR};;
`;

const HomeScreen = (props: any) => {
  const theme = useSelector((state: any) => state.theme);
  return (
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={theme.STATUS_BAR_STYLE}/>
        <Container>
          <Text>{theme.PRIMARY_BACKGROUND_COLOR}</Text>
          <Text>HomeScreen works!</Text>
          <Button onPress={() => {
            ThemeStore.dispatch({ type: 'CHANGE_THEME' })
          }}>
            <ButtonText>Change theme</ButtonText>
          </Button>
        </Container>
      </ThemeProvider>
  );
};

export default HomeScreen;

//
// const mapStateToProps = (state: any) => {
//   return {
//     posts: state.theme
//   }
// }
// export default connect(mapStateToProps)(HomeScreen)

