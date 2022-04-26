import React from 'react'
import Users from './Users';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hearing from './Hearing';
import Activity from './Activity';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const SettingsStack = () => {
  return(
    <Stack.Navigator initialRouteName='Settings'>
      <Stack.Screen name ='Settings' component={Settings} />
      <Stack.Screen name ='Hearing' component={Hearing}  />
      <Stack.Screen name ='Activity' component={Activity}  />


    </Stack.Navigator>
  )
}
const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Users' component={Users} />
        <Tab.Screen name='Settings' component={SettingsStack} />

      </Tab.Navigator>
    </NavigationContainer>
    
  );
};
export default App