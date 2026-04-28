import React, { useRef } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { TrueSheet } from '@lodev09/react-native-true-sheet';

export function NormalBehaviour() {
  const sheet = useRef<TrueSheet>(null);

  const onPress = () => {
    sheet.current?.present();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title={'Open sheet (normal ScrollView behaviour)'}
        onPress={onPress}
      />
      <TrueSheet scrollable={true} ref={sheet} detents={[1]} cornerRadius={24}>
        <ScrollView>
          {Array.from({ length: 100 }).map((_, i) => (
            <Text key={i}>ScrollView {i + 1}</Text>
          ))}
        </ScrollView>
      </TrueSheet>
    </View>
  );
};
