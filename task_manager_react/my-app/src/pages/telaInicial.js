import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, TextInput } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';

const TelaInicial = ({ navigation }) => {
    const [tarefasPendentes, setTarefasPendentes] = useState([]);
    const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

    // Função para carregar as tarefas
    const carregarTarefas = async () => {
        try {
            const response = await fetch('http://localhost/task_manager_php/src/api/get/getTasks.php');
            const data = await response.json();
            
            console.log('Dados recebidos:', data);
            
            if (data && Array.isArray(data)) {
                const { tarefasPendentes, tarefasConcluidas } = data[0]; // Verifique a estrutura dos dados recebidos
                console.log('Tarefas pendentes:', tarefasPendentes);
                console.log('Tarefas concluídas:', tarefasConcluidas);
                setTarefasPendentes(tarefasPendentes || []);
                setTarefasConcluidas(tarefasConcluidas || []);
            }
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
        }
    };

    // Chamar a função para carregar as tarefas quando o componente for montado
    useEffect(() => {
        carregarTarefas();
    }, []);

    // Função para marcar uma tarefa como concluída
    const concluirTarefa = (id) => {
        // Implemente sua lógica aqui
    };

    // Função para editar uma tarefa
    const editarTarefa = (id, novoTexto, tipo) => {
        // Implemente sua lógica aqui
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.headerContainer}>
                    <Text style={styles.txtHeader}>RealLink Digital+Ia</Text>
                </View>

                <View style={styles.divConteudo}>
                    <Text style={styles.titulo}>Tasks Manager</Text>

                    <View style={styles.tarefasPendentes}>
                        <Text style={styles.subtitulo}>Pendentes</Text>
                        {tarefasPendentes.map(tarefa => (
                            <View key={tarefa.id} style={styles.tarefa}>
                                <TextInput
                                    style={styles.textoTarefa}
                                    value={tarefa.texto} // Certifique-se de que os dados possuem uma chave 'texto'
                                    onChangeText={(novoTexto) => editarTarefa(tarefa.id, novoTexto, 'pendente')}
                                />
                                <View style={styles.icones}>
                                    <Pressable>
                                        <IconAnt name="infocirlceo" size={20} color="#000" style={styles.icon} />
                                    </Pressable>
                                    <Pressable>
                                        <IconAnt name="edit" size={20} color="#000" style={styles.icon} />
                                    </Pressable>
                                    <Pressable>
                                        <IconAnt name="delete" size={20} color="#FF0000" style={styles.icon} />
                                    </Pressable>
                                </View>
                                <Pressable style={styles.btnConcluir} onPress={() => concluirTarefa(tarefa.id)}>
                                    <Text>Concluir</Text>
                                </Pressable>
                            </View>
                        ))}
                    </View>

                    <View style={styles.tarefasConcluidas}>
                        <Text style={styles.subtitulo}>Completas</Text>
                        {tarefasConcluidas.map(tarefa => (
                            <View key={tarefa.id} style={styles.tarefa}>
                                <TextInput
                                    style={styles.textoTarefa}
                                    value={tarefa.texto} // Certifique-se de que os dados possuem uma chave 'texto'
                                    onChangeText={(novoTexto) => editarTarefa(tarefa.id, novoTexto, 'concluida')}
                                />
                                <View style={styles.icones}>
                                    <Pressable>
                                        <IconAnt name="infocirlceo" size={20} color="#000" style={styles.icon} />
                                    </Pressable>
                                    <Pressable>
                                        <IconAnt name="edit" size={20} color="#000" style={styles.icon} />
                                    </Pressable>
                                    <Pressable>
                                        <IconAnt name="delete" size={20} color="#FF0000" style={styles.icon} />
                                    </Pressable>
                                </View>
                            </View>
                        ))}
                    </View>

                    <Pressable style={styles.btnAdicionar} onPress={() => navigation.navigate('CriarTarefa')}>
                        <IconAnt name="plus" size={20} color="#000" />
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
        marginTop: 80,
        fontSize: 30,
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    tarefa: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        paddingVertical: 10,
    },
    textoTarefa: {
        height: 35,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingHorizontal: 10,
    },
    icones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 120,
    },
    icon: {
        marginHorizontal: 5,
    },
    btnConcluir: {
        marginLeft: 10,
        padding: 5,
        backgroundColor: '#00FF00',
        borderRadius: 5,
    },
    tarefasPendentes: {
        marginBottom: 30,
        alignSelf: 'flex-start',
        width: '100%',
        paddingHorizontal: 20
    },
    tarefasConcluidas: {
        marginTop: 30,
        alignSelf: 'flex-start',
        width: '100%',
        paddingHorizontal: 20,
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
});

export default TelaInicial;

