import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FloatingAction } from "react-native-floating-action";
import HomeScreen from './src/screens/HomeScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import ReportsScreen from './src/screens/ReportsScreen';
import SettingsScreen from './src/screens/SettingsScreen';


const HomeTab = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home',
    }
  }
);

const TransactionsTab = createStackNavigator(
  {
    Transactions: TransactionsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Transactions',
    }
  }
);

const ReportsTab = createStackNavigator(
  {
    Reports: ReportsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Reports',
    }
  }
);

const SettingsTab = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Settings',
    }
  }
);


const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab,
    Transactions: TransactionsTab,
    Reports: ReportsTab,
    Settings: SettingsTab,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const homeIcon = <Icon name="home" size={20} color="#900" />;
        const transactionsIcon = <Icon name="exchange-alt" size={20} color="#900" />;
        const reportsIcon = <Icon name="chart-line" size={20} color="#900" />;
        const settingsIcon = <Icon name="cog" size={20} color="#900" />;

        if (routeName === 'Home') {
          return homeIcon;
        } else if (routeName === 'Transactions'){
          return transactionsIcon;
        } else if (routeName === 'Reports'){
          return reportsIcon;
        } else {
          return settingsIcon;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);


export default createAppContainer(MainApp);
