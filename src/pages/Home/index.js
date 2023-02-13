import React, { useState } from "react";
import { View, Text, Modal, Image, TextInput, KeyboardAvoidingView, Pressable, Keyboard, TouchableOpacity } from "react-native";

import styles from "./styles";
import ComponenteModal from "../ComponenteModal";


const Home = () => {

    const [ modalVisible, setModalVisible ] = useState(false)
    const [ alcool, setAlcool ] = useState(null);
    const [ gasolina, setGasolina ] = useState(null);
    const [ valorA, setValorA ] = useState(null);
    const [ valorG, setValorG ] = useState(null);
    const [ compensa, setCompensa ] = useState(null);

    const vals = [alcool, gasolina, compensa];


    const converteValores = () => {
        const virgulaAlcool = alcool.replace(",", ".");
        const virgulaGasolina = gasolina.replace(",", ".");
        
        const formatadoA = parseFloat(virgulaAlcool);
        const formatadoG = parseFloat(virgulaGasolina);

        setAlcool(formatadoA);
        setGasolina(formatadoG);
    }

    const chamarModal = () => {
        if(alcool !== null && alcool !== '' && gasolina !== null && gasolina!== ''){
            setModalVisible(!modalVisible);
            alcool / gasolina <= 0.7 ? setCompensa('alcool') : setCompensa('gasolina');
        }else {
            alert('Complete todos os campos');
        }
    }

    
    return(
        <KeyboardAvoidingView style={styles.container} behavior="position">
            <Pressable onPress={ ()=> Keyboard.dismiss() }>
                

                <View style={styles.boxImg}>
                    <Image
                        source={ require('../../images/logo.png') }
                        style={styles.img}
                    />
                </View>


                <View style={styles.boxText01}>
                    <Text style={styles.text01}>
                        Qual melhor opção?
                    </Text>
                </View>


                <View style={styles.boxInputAlcool}>
                    <Text style={styles.textoInputs}>
                        Álcool (preço por litro):
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        onChangeText={ valor => { setAlcool(valor); setValorA(valor)} }
                        value={valorA}
                    />
                </View>


                <View style={styles.boxGasolina}>
                    <Text style={styles.textoInputs}>
                        Gasolina (preço por litro):
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        onChangeText={ valor => { setGasolina(valor); setValorG(valor)} } 
                        value={valorG}
                    />
                </View>

                <TouchableOpacity
                    style={styles.boxBt}
                    onPress={() => {
                        converteValores();
                        chamarModal();
                    }}
                >
                    <Text style={styles.textoBt}>
                        Calcular
                    </Text>
                </TouchableOpacity>


            </Pressable>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <ComponenteModal
                    fechar={ ()=> {
                        setModalVisible(!modalVisible);
                        setValorA('');
                        setValorG('');
                    }}
                    valores={vals}
                />
            </Modal>
        </KeyboardAvoidingView>
    );
}

export default Home;