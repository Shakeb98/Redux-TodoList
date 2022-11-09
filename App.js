import * as React from 'react';
import { Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import WorkProject from './src/screens/WorkProject';
import { Provider } from 'react-redux';
import store from './src/redux/store/ToStore';
import AddDataScreen from './src/screens/AddDataScreen';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="WorkProject" component={WorkProject} />
            <Stack.Screen name="AddNewTask" component={AddDataScreen} />
            {/* <Stack.Screen name="TicketBooking" component={TicketBooking} />
          <Stack.Screen name="ColorInput" component={ColorInput} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({})