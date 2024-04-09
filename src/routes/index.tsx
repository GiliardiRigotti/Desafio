import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './tab.routes';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export function Routes() {
  const { top } = useSafeAreaInsets()
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: top
      }}
    >
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}