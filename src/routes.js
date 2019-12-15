
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './pages/login.js';
import UsuariosCadastrado from './pages/usuariosCadastrado.js';
// import Index from './pages/index.js';

import CadastroUsuario from './pages/cadastroUsuario.js';
Icon.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
    CadastroUsuario: {
      screen: CadastroUsuario,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="lock" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="lock" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    U: {
      screen: UsuariosCadastrado,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="lock" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: '#7159c1',
    },
  },
);

export default createAppContainer(mainNavigation);