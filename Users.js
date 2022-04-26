import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      let res = await axios.get('https://reqres.in/api/users?page=2');
      console.log('res', res);
      setUsers(res.data.data);
    } catch (err) {
      console.log('err', err);
    }
    // with Fetch .then.catch syntax
    // fetch('https://reqres.in/api/users?page=2')
    //  .then(r => r.json())
    //  .then(d => console.log('d here:', setUsers(d.data)))
    //  .catch(err=> console.log(err))
    // axios.get('')
    // .then(res=>{ res.data.data is users})
    // .catch(err=>console.log(err))
  };

  const renderUsers = ()=>{
    return users.map((user)=>{
      return(
        <View key={user.id}>
          <Text>{user.email}</Text>
        </View>
      )
    })
  }

  return (
      <View style={styles.container}>
        <Text style={styles.header}>Users</Text>
        <View>
          {renderUsers()}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 3,
  },
  header:{
    fontSize:24
  }
});

export default Users;