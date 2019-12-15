


import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button,  } from 'react-native-elements';


export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.productContainer}>
        
        <View title='Burguer Bom Bar' style={styles.productCardTitle}>
        <Text style={styles.productCard}>Login</Text>
          <Input inputStyle={{ marginBottom:20, marginTop:10}}
            placeholder='  Usuario'
            leftIcon={
              <Icon
                name='address-card'
                size={30}
                color='white'
              />
            }
          />
          
          <Input inputStyle={{ marginBottom:10, marginTop:10}}
            placeholder='  Senha'
            leftIcon={
              <Icon 
                name='key'
                size={30}
                color='white'
              />
            }
          />
          <Button
            icon={<Icon name='check' color='white' size={30} />}
            buttonStyle={{ borderRadius: 15, marginLeft: 30, marginTop:30, marginRight: 30, marginBottom: 30, backgroundColor: "#26252d", }}
            title='  Acessar' onPress={() => this.props.navigation.navigate('Pedidos')} />
        </View>

      </View>

    );

  }
}

const styles = StyleSheet.create({
  productContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#7159C1",
    padding: 0,
    marginBottom: 0,
    
  },
  productCard:{
    fontSize:25,
    textAlign:"center",
    color: "white",
    padding:10
  },
  productCardTitle:{
    backgroundColor: "rgba(25, 24, 31, 0.1)",
    borderRadius:15,
    width:350
  }

});
