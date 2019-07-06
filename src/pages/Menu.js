import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Menu({ navigation }) {
  return (
    <Container>
      <Logo source={require("../images/logoNative.png")} />
      <Icons1>
        <Icon
          name="home"
          style={firstIconStyle}
          size={50}
          color="#444380"
          onPress={() => navigation.navigate("WellCome")}
        />
        <Icon
          name="camera"
          style={outersIconsStyle}
          size={40}
          color="#444380"
          onPress={() => navigation.navigate("Cadastro")}
        />
        <Icon
          name="image"
          style={outersIconsStyle}
          size={40}
          color="#444380"
          onPress={() => navigation.navigate("List")}
        />
      </Icons1>
      <Icons2>
        <Icon
          name="home"
          style={firstIconStyle}
          size={50}
          color="#444380"
          onPress={() => navigation.navigate("ImgPicker")}
        />
        <Icon
          name="camera"
          style={outersIconsStyle}
          size={40}
          color="#444380"
          onPress={() => navigation.navigate("Camera")}
        />
        <Icon
          name="image"
          style={outersIconsStyle}
          size={40}
          color="#444380"
          onPress={() => navigation.navigate("Location")}
        />
      </Icons2>
    </Container>
  );
}

const firstIconStyle = {
  marginTop: 5,
  marginLeft: 20,
  marginRight: 20
};

const outersIconsStyle ={
  marginTop: 12,
  marginLeft: 30,
  marginRight: 20
} 

const Container = styled.View`
  background-color: #444380;
`;

const Logo = styled.Image`
  margin-bottom: 20px;
  width: 100%;
  max-height: 120px;
`;

const Icons1 = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px;
  max-width: 100%;
  height: 100%;
  background-color: #d9d6f5;
`;

const Icons2 = styled.View`
  flex: 2;
  flex-direction: row;
  padding: 20px;
  max-width: 100%;
  height: 100%;
  background-color: #d9d6f5;
`;
