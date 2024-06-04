import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Doofi</Text>
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
