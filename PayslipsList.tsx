import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

const PayslipsList = ({navigation}) => {
  /** Mock data using states */
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
    {
      id: '6',
      fromDate: new Date('2023-05-01'),
      toDate: new Date('2023-05-31'),
      file: 'payslip6.pdf',
    },
  ]);
  /** Navigation from list view to detials page */
  const handlePayslipClick = (payslip: any) => {
    navigation.navigate('Profile', payslip);
  };
  return (
    <View style={{flex: 1, padding: 16, backgroundColor: '#f5f5f5'}}>
      <FlatList
        data={payslips}
        renderItem={({item: payslip}) => (
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              paddingVertical: 12,
              backgroundColor: '#fff',
              borderRadius: 8,
              marginBottom: 8,
            }}
            onPress={() => handlePayslipClick(payslip)}>
            <Text style={{fontSize: 16, color: '#333'}}>
              {`${payslip.fromDate.toLocaleDateString()} - ${payslip.toDate.toLocaleDateString()}`}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default PayslipsList;
