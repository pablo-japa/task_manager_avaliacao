import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';

// desenvolvido para web
const Inicio = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.txtHeader}>RealLink Digital+Ia</Text>
            </View>
            <IconAnt name='layout' size={120} color={'#000'}/>
            <Text style={styles.titulo}>Task Manager</Text>
            <Pressable style={styles.btnIniciar} onPress={() => {navigation.navigate('TelaInicial')}}>
                <Text style={styles.txtPressable}>Iniciar</Text>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer:{
        backgroundColor:'#2685BF',
        width: '100%',
        height:60,
        justifyContent:'center',
        position: 'absolute',
        top: '0',
    },
    txtHeader:{
        fontSize:25,
        marginLeft:20,
    }, 
    titulo: {
        fontSize:50,

    },
    btnIniciar:{
        marginTop: 80,
        backgroundColor:'#2685BF',
        height: 45,
        width: 100,
        borderRadius: 10,
        justifyContent:'center',
        alignItems: 'center'
    },
    txtPressable:{
        fontSize:20,
    },
})

export default Inicio;