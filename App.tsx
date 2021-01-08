
import 'react-native-gesture-handler';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tab1 from './TabsScreens/Tab1';
import Tab2 from './TabsScreens/Tab2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tab3 from './TabsScreens/Tab3';
import Tab4 from './TabsScreens/Tab4';


// Function to set Tabbar options
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
//Creating Root stack
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <SafeAreaView style = {{height:'100%'}}>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen name="Tab1" component={Tab1} />
          <Tab.Screen name="Tab2" component={Tab2} />
          <Tab.Screen name="Tab3" component={Tab3} />
          <Tab.Screen name="Tab4" component={Tab4} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};



export default App;
