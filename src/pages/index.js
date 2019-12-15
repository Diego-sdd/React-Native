
import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TextInput, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  Button,  } from 'react-native-elements';




export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.btn}>
                    <View style={styles.iconbtn}>
                    <View style={{width:130}}>
                        <Button buttonStyle={{ backgroundColor: "rgba(25, 24, 31, 0.0)", }} 
                        icon={<Icon
                            name="heartbeat"
                            size={30}
                            color="white"
                        />
                        }
                        />
                        </View>
                        
                        
                        <View style={{width:130}}>
                        <Button buttonStyle={{ backgroundColor: "rgba(25, 24, 31, 0.0)", }} icon={<Icon
                            name="glass"
                            size={30}
                            color="white"
                        />
                        }
                        />
                        </View>

                        <View style={{width:130}}>
                        <Button buttonStyle={{ backgroundColor: "rgba(25, 24, 31, 0.0)", }} icon={<Icon
                            name="arrow-right"
                            size={30}
                            color="white"
                        />
                        }
                        />
                        </View>


                    </View>

                </View>
                <View style={styles.cadastro}>
                    <Text style={styles.titulo}>Pedidos</Text>



                </View>
            </View>

        );

    }
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 25,
        textAlign: "center",
        marginTop: 50,
        marginBottom: 50,
    },
    cadastro: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "rgba(25, 24, 31, 0.2)",
        borderRadius: 15,
        marginTop: 50,
    },
    body: {
        flex: 1,
        backgroundColor: "#7159C1",
        padding: 0,
        marginBottom: 0,
    },
    btn: {
        backgroundColor: "rgba(25, 24, 31, 0.8)",
        height: 60,
        padding: 15
    },
    iconbtn: {
        flex: 1,
        flexDirection: 'row'
    },
   

});

