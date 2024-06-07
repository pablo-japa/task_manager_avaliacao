import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Inicio from '../pages/inicio'
import TelaInicial from '../pages/telaInicial'
import CriarTarefa from '../pages/criarTarefa'


//const para criar a função de stackar Telas no navegador
const stack = createStackNavigator();


//função Rotas, para mostrar os componentes navegáveis
export default function Routes() {
    return (
        <stack.Navigator initialRouteName="inicio">

            <stack.Screen name="Inicio" component={Inicio}
                options={{ headerShown: false }} />

            <stack.Screen name="TelaInicial" component={TelaInicial}
                options={{ headerShown: false }} />

            <stack.Screen name="CriarTarefa" component={CriarTarefa}
                options={{ headerShown: false }} />

        </stack.Navigator>


    )
}   