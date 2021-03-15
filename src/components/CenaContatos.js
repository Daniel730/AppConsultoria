import React, { Component } from 'react';
import {
  StatusBar,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheContatos = require("../imgs/detalhe_contato.png");

export default class CenaContatos extends Component {
  render() {
    return (
        <View style={{backgroundColor: '#FFF', flex: 1}}>
            <StatusBar
            backgroundColor='#61bd8c'
            />
            <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#61bd8c" />
            <View style={styles.cabecalho}>
                <Image source={detalheContatos} />
                <Text style={styles.txtTitulo}>Contatos</Text>
            </View>
            <View style={styles.contatos}>
                <Text style={styles.txtContato}>Tel: </Text>
                <Text style={styles.txtContato}>Cel: </Text>
                <Text style={styles.txtContato}>Email: </Text>
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
        color: "#61bd8c",
        marginLeft: 10,
        marginTop: 25,
        fontWeight: 'bold'
    },
    contatos: {
        marginTop: 20,
        padding: 20
    },
    txtContato:{
        fontSize: 20
    }
})