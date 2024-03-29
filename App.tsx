// Imports for App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PayslipsList from './PayslipsList';
import PayslipDetails from './PayslipDetails';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    /** Native navigation stack for navigations */
    <NavigationContainer>
      <Stack.Navigator
        /** Homepage */
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={PayslipsList}
          options={{title: 'Payslips List'}}
        />
        <Stack.Screen
          name="Profile"
          component={PayslipDetails}
          options={{title: 'Payslip Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
