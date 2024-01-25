/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, Button, View, FlatList, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  const [payslips] = useState<Payslip[]>([
    {
      id: '1',
      fromDate: new Date('2023-01-01'),
      toDate: new Date('2023-01-31'),
      file: 'payslip1.pdf',
    },
    {
      id: '2',
      fromDate: new Date('2023-01-01'),
      toDate: new Date('2023-01-31'),
      file: 'payslip2.pdf',
    },
    {
      id: '3',
      fromDate: new Date('2023-01-01'),
      toDate: new Date('2023-01-31'),
      file: 'payslip3.pdf',
    },
    {
      id: '4',
      fromDate: new Date('2023-01-01'),
      toDate: new Date('2023-01-31'),
      file: 'payslip4.pdf',
    },
    {
      id: '5',
      fromDate: new Date('2023-01-01'),
      toDate: new Date('2023-01-31'),
      file: 'payslip5.pdf',
    },
  ]);
  const handlePayslipClick = (payslip: any) => {
    navigation.navigate('Profile', payslip);
  };
  return (
    <View>
      {/* <Text>{payslips[0].fromDate.toLocaleDateString()}</Text> */}
      <Text>{payslips[0].fromDate.toLocaleDateString()}</Text>
      <Text>{payslips[0].toDate.toLocaleDateString()}</Text>
      <Text>{payslips[0].file}</Text>
      <FlatList
        data={payslips}
        renderItem={({item: payslip}) => (
          <TouchableOpacity onPress={() => handlePayslipClick(payslip)}>
            <Text>{`${payslip.fromDate.toLocaleDateString()} - ${payslip.toDate.toLocaleDateString()}`}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane', place: 'lahore'})
        }
      />
    </View>
  );
};
const ProfileScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>
        Period: {route.params.fromDate.toLocaleDateString()} -{' '}
        {route.params.toDate.toLocaleDateString()}
        {route.params.file}
      </Text>
      <Button title="Download Payslip" onPress={() => {}} />
    </View>
  );

};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
