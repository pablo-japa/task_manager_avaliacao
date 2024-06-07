import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Alert } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';

const CriarTarefa = ({ navigation }) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    // Função para adicionar uma nova tarefa
    const adicionarTarefa = async () => {
        try {
            const response = await fetch('http://localhost/task_manager_php/src/api/post/createTask.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: titulo,
                    description: descricao
                }),
            });
            if (response.status === 201) {
                // Tarefa criada com sucesso
                console.log('Tarefa criada com sucesso!');
                // Redirecionar para a tela anterior
                navigation.goBack();
            } else {
                // Tratar erro ao criar tarefa
                console.error('Erro ao criar tarefa:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.headerContainer}>
                    <Text style={styles.txtHeader}>RealLink Digital+Ia</Text>
                </View>

                <View style={styles.divConteudo}>
                    <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                        <IconAnt name="left" size={20} color="#000" />
                    </Pressable>
                    <Text style={styles.titulo}>Criar Nova Tarefa</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Título da Tarefa"
                        value={titulo}
                        onChangeText={setTitulo}
                    />

                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Descrição da Tarefa"
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Pressable style={styles.btnAdicionar} onPress={adicionarTarefa}>
                        <Text style={styles.txtAdicionar}>Adicionar Tarefa</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        height: '100%',
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divConteudo: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#D9D9D9',
        height: '100%',
        width: '80%',
        marginTop: 220,
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    headerContainer: {
        backgroundColor: '#2685BF',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
    },
    txtHeader: {
        fontSize: 25,
        marginLeft: 20,
    },
    titulo: {
        marginTop: 20,
        fontSize: 30,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '100%',
    },
    textArea: {
        height: 100,
    },
    btnAdicionar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#2685BF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
    },
    txtAdicionar: {
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
});

export default CriarTarefa;
