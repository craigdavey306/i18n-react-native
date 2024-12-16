/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Suspense } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Hello from './src/components/Hello';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Suspense fallback="loading">
        <Hello />
      </Suspense>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
