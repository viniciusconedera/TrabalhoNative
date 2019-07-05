import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Menu({ navigation }) {
  return (
    <Container>
      <Logo source={require("../images/logoNative.png")} />
      <Icons>
        <Icon
          name="home"
          style={firstIconStyle}
          size={50}
          color="#444380"
          onPress={() => navigation.navigate("WellCome")}
        />
        <Icon
          name="camera"
          style={{ margin: 12 }}
          size={40}
          color="#444380"
          onPress={() => navigation.navigate("Camera")}
        />
        <Icon
          name="image"
          style={{ margin: 12 }}
          size={40}
          color="#444380"
          onPress={() => navigation.navigate("ImgPicker")}
        />
        <Icon
          name="image"
          style={{ margin: 12 }}
          size={40}
          color="#444380"
          onPress={() => navigation.navigate("Location")}
        />
      </Icons>
    </Container>
  );
}

const firstIconStyle = {
  marginTop: 5,
  marginLeft: 12,
  marginRight: 12
};

const Container = styled.View`
  flex: 1;
  background-color: #444380;
`;

const Logo = styled.Image`
  margin-bottom: 20px;
  width: 100%;
  max-height: 120px;
`;

const Icons = styled.View`
  flex-direction: row;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #d9d6f5;
`;
