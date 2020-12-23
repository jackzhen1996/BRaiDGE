import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [time,setTime] = useState(0)

  useEffect(() => {
    fetch('http://192.168.86.59:5000/').then(res => res.json()).then(data => {
      setTime(data.time);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>The time is : {time}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
