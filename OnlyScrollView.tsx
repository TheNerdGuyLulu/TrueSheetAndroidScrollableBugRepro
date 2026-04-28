import React, { useRef, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { TrueSheet } from '@lodev09/react-native-true-sheet';

export function OnlyScrollView() {
  const sheet = useRef<TrueSheet>(null);

  const [scrollable, setScrollable] = useState(false);

  const onPress = () => {
    setTimeout(() => setScrollable(true), 2000);
    sheet.current?.present();
  };

  const onDismiss = () => setScrollable(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title={'Open sheet (only ScrollView)'} onPress={onPress} />
      <TrueSheet
        onDidDismiss={onDismiss}
        scrollable={scrollable}
        ref={sheet}
        detents={[1]}
        cornerRadius={24}
      >
        <ScrollView>
          {Array.from({ length: 100 }).map((_, i) => (
            <Text key={i}>ScrollView {i + 1}</Text>
          ))}
        </ScrollView>
      </TrueSheet>
    </View>
  );
};
