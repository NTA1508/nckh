import { useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      setTimeout(async () => {
        const user = await AsyncStorage.getItem('loggedInUser');
        if (user) {
          router.replace('/(tabs)/home');
        } else {
          router.replace('/login');
        }
      }, 2000);
    };
    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Smart Home App</Text>
      <ActivityIndicator size="large" color="#007bff" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });