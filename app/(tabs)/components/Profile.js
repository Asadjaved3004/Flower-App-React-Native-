import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity ,Image} from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };

  const handleChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

 
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, marginBottom: 10 }}
        />
      )}
      <Button title="Choose Image" onPress={handleChooseImage} />
        <Text style={styles.name}>Asad javed</Text>
        <Text style={styles.email}>Software Engineer</Text>
        <Text style={styles.email}>asadjaved3004@gmail.com</Text>
      </View>

      {/* Details Section */}
      <View style={styles.details}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.bio}>
          Results-driven professional with 3+ years of combined expertise in
          the software industry and academia. Proven ability to excel in diverse
          roles, contributing to the development of innovative software
          solutions while also delivering impactful contributions in academic
        </Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton} onPress={() => { }}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
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
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  details: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
  },
  editButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Profile;
