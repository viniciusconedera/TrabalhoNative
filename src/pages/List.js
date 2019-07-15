import React, { Component } from 'react';
import api from '../services/api';
import styled from 'styled-components'
import { View, Text, FlatList } from 'react-native';

export default class Main extends Component {

    state = {
        cliente: [],
    };

    componentDidMount() {
        this.loadcliente();
    };

    loadcliente = async (page = 1) => {
        const response = await api.get(`/cliente`);
        const {data} = response;
        this.setState({cliente: data});
    };

    RemoveCliente = async (id) => {
        await api.delete(`/cliente/${id}`)
        this.loadcliente()
    }

    render() {
        const { clientes } = this.state;
        return (
            <Layout>
                <FlatList
                data={clientes}
                ListEmptyComponent={<EmptyMenssage>Não há tarefas Castradas</EmptyMenssage>}
                renderItem={({cliente}) => 
                <Container key={cliente.id}>
                    <Text>Nome: {cliente.nome}</Text>
                    <Text>Apelido: {cliente.apelido}</Text>
                    <Text>email: {cliente.email}</Text>
                    <BtnDeletar onPress={() => this.RemoveCliente(cliente.id)}>
                        <Text>Delete</Text>
                    </BtnDeletar>
                </Container>} />
            </Layout>     
        )
    };
}

const Layout = styled.View`
    background-color: #d9d6e5;
    border: 2px solid #444380;
    align-items: center;
    justify-content: center;
`

const Container = styled.View`
  background-color: #d9d6e5;
  align-items: center;
  border: 2px solid #444380;
  border-radius: 5px;
  margin: 10px;
`;

const BtnDeletar = styled.TouchableOpacity`
  border: 2px solid #444380;
  border-radius: 5px;
  padding: 2px;
`;

const EmptyMenssage = styled.Text`
color: #444380;
align-items: center;
justify-content: center;
`;
