import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#042326',
        flex: 1,
        alignItems: 'center'
    },
    boxImage:{
        marginTop: '20%',
        alignItems: 'center',
    },
    boxText01:{
        alignItems: 'center',
        marginTop: '5%'
    },
    texto01:{
        color: '#00FF00',
        fontSize: 25,
        fontWeight: 'bold'
    },
    boxTexto02:{
        alignItems: 'center',
        marginTop: 20
    },
    texto02:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    texto03:{
        color: '#fff',
        marginTop: 10,
        fontSize: 15
    },
    boxBt:{
        marginTop: '10%',
        width: '75%'
    },
    boxTouch:{
        borderWidth: 1,
        borderColor: '#0CF25D',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 10
    },
    textoBt:{
        color: '#0CF25D',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default styles;