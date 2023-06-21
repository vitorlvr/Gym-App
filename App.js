import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe a tela Start
import Start from './screens/Start';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Plan from './screens/Plan';
import Cardpayment from './screens/Cardpayment';
import Final from './screens/Final';
import Gender from './screens/Gender';
import Schedule from './screens/Schedule';
import ChooseTrain from './screens/ChooseTrain';
import Train from './screens/Train';
import Goals from './screens/Goals';
import Goalwin from './screens/Goalwin';
import Profile from './screens/Profile';

// Crie um stack navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ChooseTrain"
          component={ChooseTrain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Plan"
          component={Plan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Train"
          component={Train}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cardpayment"
          component={Cardpayment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Final"
          component={Final}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Goals"
          component={Goals}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Goalwin"
          component={Goalwin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;