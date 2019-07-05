import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import WellCome from "./pages/WellCome";
import Menu from "./pages/Menu";
import ImgPicker from "./pages/ImagePicker";
import Camera from "./pages/Camera";
import Location from "./pages/Location";

export default createAppContainer(
  createStackNavigator(
    {
      WellCome,
      Menu,
      ImgPicker,
      Camera,
      Location
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);
