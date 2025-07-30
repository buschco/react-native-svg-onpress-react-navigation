/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const colors = ['blue', 'red'];

function HomeScreen() {
  const [pressed, setPressed] = React.useState<number>(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Svg viewBox={`0 0 ${200} ${200}`}>
        <Rect
          onPress={() => setPressed(p => 1 + p)}
          x={0}
          y={0}
          height={200}
          width={200}
          fill={colors[pressed % 2]}
        />
      </Svg>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <HomeScreen />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
