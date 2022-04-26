import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

const Settings = () => {
  const navigation = useNavigation()
  const handlePress = () => {
    console.log('pressed')
  }




  return(
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Settings(BROWSE KNOCKOFF)</Text>
    <Button title='Activity' onPress={()=>navigation.navigate('Activity')}/>
    <Button title='Hearing' onPress={()=>navigation.navigate('Hearing')}/>

  </View>
  )
};

export default Settings