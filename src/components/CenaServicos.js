import React, { Component } from 'react';
import {
  StatusBar,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheServicos = require("../imgs/detalhe_servico.png");

export default class CenaServicos extends Component {
  render() {
    return (
        <View style={{backgroundColor: '#FFF', flex: 1}}>
            <StatusBar
            backgroundColor='#19d1c8'
            />
            <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#19d1c8" />
            <View style={styles.cabecalho}>
                <Image source={detalheServicos} />
                <Text style={styles.txtTitulo}>Nossos Servicos</Text>
            </View>
            <View style={styles.Servicos}>
                <Text style={styles.txtContato}>Serviço1: </Text>
                <Text style={styles.txtContato}>Serviço2: </Text>
                <Text style={styles.txtContato}>Serviço3: </Text>
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
        color: "#19d1c8",
        marginLeft: 10,
        marginTop: 25,
        fontWeight: 'bold'
    },
    Servicos: {
        marginTop: 20,
        padding: 20
    },
    txtContato:{
        fontSize: 20
    }
})