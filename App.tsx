import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ViewAndScrollView } from './ViewAndScrollView.tsx';
import { OnlyScrollView } from './OnlyScrollView.tsx';
import { NormalBehaviour } from './NormalBehaviour.tsx';

const App = () => {
  return (
    <SafeAreaProvider>
      <ViewAndScrollView />
      <OnlyScrollView />
      <NormalBehaviour />
    </SafeAreaProvider>
  );
};

export default App;
