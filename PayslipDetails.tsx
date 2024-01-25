import {Directory, Filesystem} from '@capacitor/filesystem';
import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';

const PayslipDetails = ({navigation, route}) => {
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
  }, []);
  return (
    <View>
      <Text>
        Period: {route.params.fromDate.toLocaleDateString()} -{' '}
        {route.params.toDate.toLocaleDateString()}
        {route.params.file}
      </Text>
      <Button title="Download Payslip" onPress={downloadPayslip} />
    </View>
  );
};

export default PayslipDetails;

