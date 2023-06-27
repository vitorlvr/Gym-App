import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = React.useState('Train');

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
    setActiveScreen(screenName);
  };

  const getIconName = (screenName) => {
    switch (screenName) {
      case 'Train':
        return 'home';
      case 'Goals':
        return 'time-outline';
      case 'Profile':
        return 'person';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => handleNavigation('Train')}
        >
          <Ionicons
            name={getIconName('Train')}
            size={24}
            color={activeScreen === 'Train' ? 'blue' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => handleNavigation('Goals')}
        >
          <Ionicons
            name={getIconName('Goals')}
            size={24}
            color={activeScreen === 'Goals' ? 'blue' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => handleNavigation('Profile')}
        >
          <Ionicons
            name={getIconName('Profile')}
            size={24}
            color={activeScreen === 'Profile' ? 'blue' : 'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 96,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Navbar;