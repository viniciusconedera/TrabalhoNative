import React, { Component } from 'react';
import api from '../services/api';
import styled from 'styled-components'

import { View, Text } from 'react-native';

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

    render() {
        const { cliente } = this.state;
        return (
            <View>
                {cliente.map(cliente => (
                    <Container key={cliente.id}>
                        <Text>Nome: {cliente.nome}</Text>
                        <Text>Apelido: {cliente.apelido}</Text>
                        <Text>email: {cliente.email}</Text>
                    </Container>
                ))}
            </View>            
        )
    };
}

const Container = styled.View`
  background-color: #d9d6e5;
  align-items: center;
  border: 2px solid #444380;
  border-radius: 5px;
  margin: 10px;
`;
