import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import CenaPrincipal from "./src/components/CenaPrincipal"
import CenaClientes from "./src/components/CenaClientes"
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServico from './src/components/CenaServicos';

export default class consultoria extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{id:'principal'}}
        renderScene={(route, navigator) => {
          switch(route.id){
            case 'principal':
              return(<CenaPrincipal navigator={navigator} />)
            case 'cliente':
              return(<CenaClientes navigator={navigator} />)
            case 'contato':
              return(<CenaContatos navigator={navigator} />)
            case 'empresa':
              return(<CenaEmpresa navigator={navigator} />)
            case 'servico':
              return(<CenaServico navigator={navigator} />)
            default:
              return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('consultoria', () => consultoria);
