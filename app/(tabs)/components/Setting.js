import React,{useState} from 'react';
import { View, StyleSheet, Text,Button,TouchableOpacity} from 'react-native';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';

const Settings = () => {
   


  return (
    <PaperProvider >
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      {/* Settings Options */}
      <View style={styles.options}>
        <Text style={styles.option}>Notification Preferences</Text>
        <Text style={styles.option}>Theme Settings</Text>
        <Text style={styles.option}>Language Settings</Text>
        {/* Add more settings options here */}
      </View>

      
      {/* Save or Apply Changes Button */}
      <View style={styles.buttonContainer}>
        <Button title="Save Changes" onPress={() => {}} />
      </View>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  options: {
    marginBottom: 24,
  },
  option: {
    fontSize: 18,
    marginBottom: 16,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default Settings;
