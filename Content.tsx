import React, { useRef, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { TrueSheet } from '@lodev09/react-native-true-sheet';

export function Content() {
  const sheet = useRef<TrueSheet>(null);

  const [scrollable, setScrollable] = useState(false);

  const onPress = () => {
    setTimeout(() => setScrollable(true), 2000);
    sheet.current?.present();
  };

  const onDismiss = () => setScrollable(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title={'Open sheet'} onPress={onPress} />
      <TrueSheet
        onDidDismiss={onDismiss}
        scrollable={scrollable}
        ref={sheet}
        detents={[1]}
        cornerRadius={24}
      >
        {scrollable ? (
          <ScrollView>
            {Array.from({ length: 100 }).map((_, i) => (
              <Text key={i}>ScrollView {i + 1}</Text>
            ))}
          </ScrollView>
        ) : (
          <View>
            {Array.from({ length: 100 }).map((_, i) => (
              <Text key={i}>View {i + 1}</Text>
            ))}
          </View>
        )}
      </TrueSheet>
    </View>
  );
};
