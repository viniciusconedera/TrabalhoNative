import React from "react";
import styled from "styled-components";

export default function App({ navigation }) {
  return (
    <Container>
      <Logo source={require("../images/logoNative.png")} />
      <WellCome>Bem Vindo</WellCome>
      <BtnEntrar onPress={() => navigation.navigate("Menu")}>
        <WellCome>Entrar</WellCome>
      </BtnEntrar>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #d9d6e5;
  align-items: center;
`;

const Logo = styled.Image`
  width: 100%;
  max-height: 300px;
`;

const WellCome = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #444380;
`;

const InputName = styled.TextInput`
  margin-top: 15px;
  border: 2px solid #444380;
  min-width: 200px;
  padding: 1px;
`;

const BtnEntrar = styled.TouchableOpacity`
  margin-top: 15px;
  border: 2px solid #444380;
  border-radius: 5px;
  padding: 5px;
`;
