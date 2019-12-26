import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ScrollView, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })

  function handleChange (key, value) {
    setFields({...fields, [key]: value})
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={ require('./sample.png')} />
      </View>
      <KeyboardAvoidingView behavior='padding'>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange('email', text)}
          placeholder='email' />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFields({...fields, password: text})}
          placeholder='password' />
      </KeyboardAvoidingView>
      <View style={styles.login}>
        <TouchableHighlight
          underlayColor='red'
          onPress={() => console.log('preessss', fields)}>
          <View style={styles.button}>
            <Text>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  login: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  input: {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'blue',
    borderRadius: 5,
    padding: 10
  },
  logo: {
    width: 100,
    height: 100
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  button: {
    padding: 10,
    width: '80%',
    backgroundColor: 'pink',
    marginHorizontal: '10%'
  }
});
