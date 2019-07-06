import React from 'react';
import api from '../../../services/api';
import styled from 'styled-components'
import { Alert } from 'react-native'

export default class cadastroCliente {

    state = {
        nome: "",
        apelido: "",
        email: "",
        senha: "",
        ativo: true
    };

    enviar = () => {
        api.post('/cliente', this.state)
        .then(function(response){
            Alert.alert(`Clietne ${this.state.nome} Salvo`);
        }); 
    }

    render() {
        return (
                <Conteiner>
                    <Title>Informações Pessoais</Title>
                    <Label>Nome</Label>
                    <Input onChangeText={(text) => this.setState({nome: text})} />
                    <Label>Apelido</Label>
                    <Input onChangeText={(text) => this.setState({apelido: text})}/>
                    <Label>E-mail</Label>
                    <Input onChangeText={(text) => this.setState({email: text})}/>
                    <Label>Senha</Label>
                    <Input onChangeText={(text) => this.setState({senha: text})}/>
                    <BtnEnviar onPress={this.enviar}>
                        <Label>Entrar</Label>
                    </BtnEnviar>
                </Conteiner>
        )
    }
}

const Conteiner = styled.View`
  flex: 1;
  background-color: #d9d6e5;
  align-items: center;
`
const Label = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #444380;
`
const Imput = styled.TextInput`
    margin-top: 15px;
    border: 2px solid #444380;
    border-radius: 5px;
    padding: 5px;
`
const BtnEnviar = styled.TouchableOpacity`
  margin-top: 15px;
  border: 2px solid #444380;
  border-radius: 5px;
  padding: 5px;
`;