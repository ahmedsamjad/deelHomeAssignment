import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PayslipsList from './PayslipsList';
import PayslipDetails from './PayslipDetails';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={PayslipsList}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={PayslipDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
