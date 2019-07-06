import React, { Component } from "react";
import api from "../services/api";
import styled from "styled-components";
import { Alert } from "react-native";

export default class Cadastro extends Component {
  state = {
    nome: "",
    apelido: "",
    email: "",
    senha: "",
    ativo: true
  };

  enviar = () => {
    api.post("/cliente", this.state).then(function(response) {
      //Alert.alert(`Clietne ${this.state.nome} Salvo`);
    });
  };

  render() {
    return (
      <Conteiner>
        <Title>Informações Pessoais</Title>
        <Label>Nome</Label>
        <Input onChangeText={text => this.setState({ nome: text })} />
        <Label>Apelido</Label>
        <Input onChangeText={text => this.setState({ apelido: text })} />
        <Label>E-mail</Label>
        <Input onChangeText={text => this.setState({ email: text })} />
        <Label>Senha</Label>
        <Input onChangeText={text => this.setState({ senha: text })} />
        <BtnEnviar onPress={() => this.enviar()}>
          <BtnLabel>Entrar</BtnLabel>
        </BtnEnviar>
      </Conteiner>
    );
  }
}

const Conteiner = styled.View`
  flex: 1;
  background-color: #d9d6e5;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 10px;
  color: #444380;
`;

const Label = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #444380;
`;

const Input = styled.TextInput`
  width: 90%;
  border: 2px solid #444380;
  border-radius: 5px;
  padding: 5px;
`;

const BtnEnviar = styled.TouchableOpacity`
  margin-top: 30px;
  border: 2px solid #444380;
  border-radius: 5px;
  padding: 10px;
`;

const BtnLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #444380;
`;
