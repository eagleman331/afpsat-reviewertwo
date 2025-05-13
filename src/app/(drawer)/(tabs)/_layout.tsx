import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '~/src/components/TabBarIcon';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="campground" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="(recruit)"
        options={{
          title: 'Recruit',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="human-handsdown" size={24} color="black" />
          ),
        }}
      />   
    </Tabs>
  );
}
