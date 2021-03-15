import React, { Component } from 'react';
import {
  StatusBar,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheEmpresa = require("../imgs/detalhe_empresa.png");

export default class CenaEmpresa extends Component {
  render() {
    return (
        <View style={{backgroundColor: '#FFF', flex: 1}}>
            <StatusBar
            backgroundColor='#ec7148'
            />
            <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#ec7148" />
            <View style={styles.cabecalho}>
                <Image source={detalheEmpresa} />
                <Text style={styles.txtTitulo}>A Empresa</Text>
            </View>
            <View style={styles.Empresa}>
                <Text style={styles.txtEmpresa}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: "#ec7148",
        marginLeft: 10,
        marginTop: 25,
        fontWeight: 'bold'
    },
    Empresa: {
        marginTop: 20,
        padding: 20
    },
    txtEmpresa:{
        fontSize: 20
    }
})