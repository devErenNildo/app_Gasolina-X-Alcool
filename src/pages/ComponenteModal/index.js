import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const ComponenteModal = (props) => {

    console.log(props.valores);

    return(
        <View style={styles.container}>


            <View style={styles.boxImage}>
                <Image
                    source={ require('../../images/gas.png') }
                />
            </View>


            <View style={styles.boxText01}>
                <Text style={styles.texto01}>
                    Compensa usar {props.valores[2]}
                </Text>
            </View>


            <View style={styles.boxTexto02}>
                <Text style={styles.texto02}>
                    Com os preços:
                </Text>
                <Text style={styles.texto03}>
                    Álcool: R$ {props.valores[0]}
                </Text>
                <Text style={styles.texto03}>
                    Gasolina: R$ {props.valores[1]}
                </Text>
            </View>


            <View style={styles.boxBt}>
                <TouchableOpacity
                    style={styles.boxTouch}
                    onPress={props.fechar}
                >
                    <Text style={styles.textoBt}>
                        Calcular novamente
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default ComponenteModal;