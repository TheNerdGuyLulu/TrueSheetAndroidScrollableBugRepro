import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Content } from './Content.tsx';

const App = () => {
  return (
    <SafeAreaProvider>
      <Content />
    </SafeAreaProvider>
  );
};

export default App;
