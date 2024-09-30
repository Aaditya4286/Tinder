import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SwipeableCardStack from './src/SwipeableCardStack';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Heart, Chat, User } from './helper/ImageAssets';

const Tab = createMaterialTopTabNavigator();

function PlaceholderScreen({ text }) {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderText}>{text}</Text>
    </View>
  );
}

function TabBarIcon({ icon }) {
  return <Image source={icon} style={styles.icon} />;
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          let icon;

          if (route.name === 'Heart') {
            icon = Heart;
          } else if (route.name === 'Chat') {
            icon = Chat;
          } else if (route.name === 'User') {
            icon = User;
          }

          return {
            tabBarIcon: () => <TabBarIcon icon={icon} />,
            tabBarLabel: '', 
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
              backgroundColor: 'red',
              height: 3,
              width: 16,
              marginLeft: '15%',
            },
          };
        }}
      >
        <Tab.Screen name="Heart" component={SwipeableCardStack} />
        <Tab.Screen name="Chat" component={PlaceholderScreen} initialParams={{ text: 'Chat Screen' }} />
        <Tab.Screen name="User" component={PlaceholderScreen} initialParams={{ text: 'User Screen' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default App;
