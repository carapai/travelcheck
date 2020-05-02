import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Icon, Footer, Text} from 'native-base';

//Screens Available
import Home from './screens/Home';
import Scans from './screens/Scans';
import Details from './screens/Details';
import Settings from './screens/Settings';
import AddCheckpoint from './screens/AddCheckpoint';
import ScanPassport from './screens/documents/ScanPassport';
import ScanIdentityCard from './screens/documents/ScanIdentityCard';
import ScanBoardingPass from './screens/documents/ScanBoardingPass';
import Checkpoints from './screens/Checkpoints';
import Routes from './screens/Routes';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home'

  switch (routeName) {
    case 'Home':
      return 'Home'
    case 'Scans':
      return 'Scanned TravelPasses'
      case 'Stops':
            return 'All Checkpoints (Stops)'
    case 'Others':
      return 'Other options'
  }
}

const MainTabNavigator = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#101010',
          style: {
            backgroundColor: '#ffd700'
          }
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName
            if (route.name == 'Home') {
              iconName = 'qr-scanner'
            } else if (route.name == 'Scans') {
              iconName = 'ios-person'
            }
            else if (route.name == 'Settings') {
              iconName = 'ios-settings'
            }
            return <Icon name={iconName} color={color} size={size} />
          }
        })}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Scans' component={Scans} />
        <Tab.Screen name='Stops' component={Checkpoints} />
        <Tab.Screen name='Others' component={Settings} />
      </Tab.Navigator>
    )
}


const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Home'
          component={MainTabNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route)
          })}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={({ route }) => ({
            title: route.params.params.scan_id
          })}
        />
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{ title: 'Others Options' }}
        />
        <Stack.Screen
          name='AddCheckpoint'
          component={AddCheckpoint}
          options={({ route }) => ({
              title: 'Add Checkpoint'
            })}
        />

        <Stack.Screen
                  name='ScanPassport'
                  component={ScanPassport}
                  options={({ route }) => ({
                      title: 'Scan Passport'
                    })}
                />
        <Stack.Screen
              name='ScanIdentityCard'
              component={ScanIdentityCard}
              options={({ route }) => ({
                  title: 'Scan Identity Card'
                })}
            />
        <Stack.Screen
              name='ScanBoardingPass'
              component={ScanBoardingPass}
              options={({ route }) => ({
                  title: 'Scan Boardingpass'
                })}
            />
        <Stack.Screen
              name='Routes'
              component={Routes}
              options={({ route }) => ({
                  title: 'View Map Routes'
                })}
            />
      </Stack.Navigator>
      <Footer style={{height: 30, backgroundColor: '#ffd700', alignItems: 'center'}}>
        <Text>Designed by HISP Uganda</Text>
      </Footer>
    </NavigationContainer>
  )
}

export default MainStackNavigator