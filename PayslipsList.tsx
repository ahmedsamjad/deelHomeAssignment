import React, {useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';

const PayslipsList = ({navigation}) => {
  const [payslips] = useState<Payslip[]>([
    {
      id: '1',
      fromDate: new Date('2023-01-01'),
      toDate: new Date('2023-01-31'),
      file: 'payslip1.pdf',
    },
    {
      id: '2',
      fromDate: new Date('2023-02-01'),
      toDate: new Date('2023-02-28'),
      file: 'payslip2.pdf',
    },
    {
      id: '3',
      fromDate: new Date('2023-03-01'),
      toDate: new Date('2023-03-31'),
      file: 'payslip3.pdf',
    },
    {
      id: '4',
      fromDate: new Date('2023-04-01'),
      toDate: new Date('2023-04-30'),
      file: 'payslip4.pdf',
    },
    {
      id: '5',
      fromDate: new Date('2023-05-01'),
      toDate: new Date('2023-05-31'),
      file: 'payslip5.pdf',
    },
  ]);
  const handlePayslipClick = (payslip: any) => {
    navigation.navigate('Profile', payslip);
  };
  return (
    <View>
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

export default PayslipsList;
