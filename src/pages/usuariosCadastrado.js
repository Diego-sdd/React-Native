
import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TextInput, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, } from 'react-native-elements';


export default class HelloWorldApp extends Component {

  static navigationOptions =
    {
      title: 'MainActivity',
    };

  constructor(props) {

    super(props)
    this.state = {
      nm_usuario: '',
      cd_senha: '',
    }
  }

  InsertStudentRecordsToServer = () => {

    fetch('http://www.otherlevel.com.br/react/insert.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        nm_usuario: this.state.nm_usuario,
        cd_senha: this.state.cd_senha,

      })

    }).then((response) => response.json())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });

  }

  GoTo_Show_StudentList_Activity_Function = () => {
    this.props.navigation.navigate('Second');

  }

  render() {
    return (

    
        <View style={styles.MainContainer}>

<View title='Burguer Bom Bar' style={styles.productCardTitle}>
<Text style={styles.productCard}>Cadastro Usuarios</Text>

          <Input inputStyle={{ marginBottom: 20, marginTop: 10 }}
            placeholder='  Usuario'
            onChangeText={TextInputValue => this.setState({ nm_usuario: TextInputValue })}

            underlineColorAndroid='transparent'
            leftIcon={
              <Icon
                name='address-card'
                size={30}
                color='white'
              />
            }
          />

          <Input inputStyle={{ marginBottom: 20, marginTop: 10 }}
            placeholder='  Senha'
            onChangeText={TextInputValue => this.setState({ cd_senha: TextInputValue })}

            underlineColorAndroid='transparent'
            leftIcon={
              <Icon
                name='address-card'
                size={30}
                color='white'
              />
            }
          />

          <Button
            icon={<Icon name='check' color='white' size={30} />}
            buttonStyle={{ borderRadius: 15, marginLeft: 30, marginTop: 30, marginRight: 30, marginBottom: 30, backgroundColor: "#26252d", }}
            title='  Cadastrar' onPress={() => this.props.navigation.navigate('Pedidos')}
            activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} />

{/* 
          <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_StudentList_Activity_Function} >
            <Text style={styles.TextStyle}> SHOW ALL INSERTED STUDENT RECORDS IN LISTVIEW </Text>
          </TouchableOpacity> */}


        </View></View>
     
    );
  }
}


const styles = StyleSheet.create({

  MainContainer: {
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

