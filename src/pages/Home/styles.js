import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#042326'
    },
    boxImg:{
        alignItems: 'center',
        marginTop: '20%',
    },
    boxText01:{
        alignItems: 'center',
        marginTop: '5%'
    },
    text01:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    boxInputAlcool:{
        marginHorizontal: 25,
        marginTop: 40
    },
    textoInputs:{
        color: '#fff',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    input:{
        backgroundColor: '#fff',
        height: 45,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },
    boxGasolina:{
        marginHorizontal: 25,
        marginTop: 10
    },
    boxBt:{
        backgroundColor: '#0CF25D',
        marginHorizontal: 25,
        marginTop: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textoBt:{
        color: '#034159',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default styles;