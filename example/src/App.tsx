/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import VisibilityAwareFlatList, {
  type VisibilityAwareFlatListRef,
} from 'react-native-visibility-aware-list';
const items = [
  'https://images.unsplash.com/photo-1592388607385-d2e38a371661?w=900',
  'https://images.unsplash.com/photo-1546975490-a79abdd54533?w=900',
  'https://images.unsplash.com/photo-1636915739119-1ef2fe0b87d2?w=900',
  'https://images.unsplash.com/photo-1536385318585-f6c37dffc3a7?w=900',
  'https://images.unsplash.com/photo-1573666083884-1d1c2f6b5cf6?w=900',
  'https://images.unsplash.com/photo-1634907287642-c682daafdc9b?w=900',
  'https://images.unsplash.com/photo-1635323333422-eeefc9a71281?w=900',
  'https://images.unsplash.com/photo-1632999860796-407f45372996?w=900',
  'https://images.unsplash.com/photo-1634293656518-eb142baef080?w=900',
  'https://i.imgur.com/t9ltkrk.jpg', // dont mess with him
];

export default function App() {
  const ref = React.useRef<VisibilityAwareFlatListRef>(null);
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <VisibilityAwareFlatList
        nestedScrollEnabled
        onViewportItemsChanged={(a) => console.warn(a)}
        data={items
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)}
        nestedViewportKey="0"
        renderItem={({ item, index }) => {
          if (index === 1) {
            return (
              <VisibilityAwareFlatList
                nestedScrollEnabled
                onViewportItemsChanged={(a) => console.warn(a)}
                horizontal
                ref={ref}
                data={items
                  .map((value) => ({ value, sort: Math.random() }))
                  .sort((a, b) => a.sort - b.sort)
                  .map(({ value }) => value)}
                nestedViewportKey="1"
                renderItem={({ item, index }) => {
                  if (index === 1 || index === 2) {
                    return (
                      <VisibilityAwareFlatList
                        nestedScrollEnabled
                        onViewportItemsChanged={(a) => console.warn(a)}
                        style={{
                          height: width / 2,
                          width: width / 4,
                          overflow: 'hidden',
                        }}
                        ref={ref}
                        nestedViewportKey="2"
                        data={items
                          .map((value) => ({ value, sort: Math.random() }))
                          .sort((a, b) => a.sort - b.sort)
                          .map(({ value }) => value)}
                        renderItem={({ item }) => {
                          return (
                            <Image
                              style={{
                                width: width / 4,
                                height: width / 4,
                              }}
                              source={{ uri: item }}
                              resizeMode="cover"
                            />
                          );
                        }}
                      />
                    );
                  }

                  return (
                    <Image
                      style={{
                        width: width / 2,
                        height: width / 2,
                      }}
                      source={{ uri: item }}
                      resizeMode="cover"
                    />
                  );
                }}
              />
            );
          }

          return (
            <Image
              style={{
                width: width,
                height: width,
              }}
              source={{ uri: item }}
              resizeMode="cover"
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
