import {Directory, Filesystem} from '@capacitor/filesystem';
import React, {useCallback} from 'react';
import {Button, Image, Text, View} from 'react-native';

/** Function to format date to MMM DD, YYYY */
const formatToMMMDDYYYY = (date: string | number | Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const PayslipDetails = ({route}) => {
  /** Code for download payslip
   * Code needs some final touches
   */
  const downloadPayslip = useCallback(async () => {
    // const path = route.params.file;
    const url = 'https://images.app.goo.gl/YakPNGDP7Mp6JJGz7';
    const options: DownloadFileOptions = {
      url,
      directory: Directory.Data,
      path: `${route.params.file}`,
      progress: true,
    };
    const result = await Filesystem.downloadFile(options);
    console.log('Download result:', result);
  }, [route.params.file]);
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}>
      <Image
        source={require('./assets/profile.png')}
        style={{width: 100, height: 100, borderRadius: 50, marginBottom: 16}}
      />
      <Text
        style={{
          fontSize: 18,
          marginBottom: 16,
          textAlign: 'center',
          color: '#333',
          fontWeight: 'bold',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 10,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        Period: {formatToMMMDDYYYY(route.params.fromDate)} -{' '}
        {formatToMMMDDYYYY(route.params.toDate)}
      </Text>
      <Text
        style={{
          fontSize: 18,
          marginBottom: 16,
          textAlign: 'center',
          color: '#333',
          fontWeight: 'bold',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 10,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        Filename: {route.params.file}
      </Text>

      <Button
        title="Download Payslip"
        onPress={downloadPayslip}
        color="#3498db"
      />
    </View>
  );
};

export default PayslipDetails;
