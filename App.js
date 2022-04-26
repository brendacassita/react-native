import { View, Text, SafeAreaView,StyleSheet } from "react-native"
import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = ()=>{
  const [users, setUsers] = useState([])
  useEffect(()=>{
     getUsers()
  },[])
  const getUsers = async()=>{
  // fetch('https://reqres.in/api/users?page=2')
  //  .then(r => r.json())
  //  .then(d => console.log('d here:', setUsers(d.data)))
  //  .catch(err=> console.log(err))
    try{
      let res = await axios.get('https://reqres.in/api/users?page=2')
      console.log('res', res)
      setUsers(res.data.data)
     }catch(err){
      console.log('err', err)
    }
    // axios.get('')
    // .then(res=>{ res.data.data is users})
    // .catch(err=>console.log(err))
  }

  

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text>{JSON.stringify(users)}</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container:{
     display:'flex',
     flex:1,
     justifyContent:'center',
     borderColor:'red',
     borderWidth: 3,
   }
})

export default App