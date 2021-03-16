import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import BarraNavegacao from './BarraNavegacao'

const logo = require("../imgs/logo.png");
const menuCliente = require("../imgs/menu_cliente.png");
const menuContato = require("../imgs/menu_contato.png");
const menuEmpresa = require("../imgs/menu_empresa.png");
const menuServico = require("../imgs/menu_servico.png");

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View style={{backgroundColor: '#FFF', flex: 1}}>
            <StatusBar
              backgroundColor='#CCC'
            />
            <BarraNavegacao />
            <View style={styles.logo}>
              <Image source={logo} />
            </View>
            <View style={styles.menu}>
              <View style={styles.menuGroup}>
                <TouchableHighlight underlayColor={'#b9c941'} activeOpacity={0.3} onPress={()=>this.props.navigator.push({id:'cliente'})}>
                  <Image style={styles.image} source={menuCliente} />
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'#61bd8c'} activeOpacity={0.3} onPress={()=> this.props.navigator.push({id:'contato'})}>
                  <Image style={styles.image} source={menuContato} />
                </TouchableHighlight>
              </View>
              <View style={styles.menuGroup}>
                <TouchableHighlight underlayColor={'#ec7148'} activeOpacity={0.3} onPress={()=> this.props.navigator.push({id:'empresa'})}>
                  <Image style={styles.image} source={menuEmpresa} />
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'#19d1c8'} activeOpacity={0.3} onPress={()=> this.props.navigator.push({id:'servico'})}>
                  <Image style={styles.image} source={menuServico} />
                </TouchableHighlight>
              </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  logo:{
    margin: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: "center"
  },
  menuGroup: {
    flexDirection: 'row',
    
  },
  image: {
    margin: 15
  }
})