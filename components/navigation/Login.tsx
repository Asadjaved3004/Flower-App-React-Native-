import { Image, StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';

import { Avatar, TextInput, Button, Appbar } from 'react-native-paper';

export  function Login() {

  return (

    <View style={styles.container}>

      <Avatar.Image size={180} style={styles.Avator} source={{ uri: 'data:image/png;base64,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' }} />

      <TextInput style={{ marginTop: 25 }}
        mode="outlined"
        label="Enter Email Address"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput style={{ marginTop: 25 }}
        label="Enter Password"
        secureTextEntry={true}
        right={<TextInput.Icon icon="eye" />}
      />
      <View style={{ marginTop: 20 }}>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Login
        </Button>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <Text style={{ marginRight: 5 }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => console.log('Sign up pressed')}>
            <Text style={{ color: 'blue' }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    alignContent: 'center',
    justifyContent: 'center',

  },
  Avator: {
    alignItems: 'center',
    marginLeft: 100,
    marginTop: 90,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // or 'cover', 'stretch', 'center'
    borderRadius: 10, // if you want rounded corners
    borderWidth: 2, // if you want a border
    borderColor: 'black', // color of the border
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
