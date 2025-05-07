import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        return <Ionicons name="home" size={size} color={color} />;
      }
    })}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
    </Tabs>
  );
}
