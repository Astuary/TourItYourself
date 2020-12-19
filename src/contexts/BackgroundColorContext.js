import { createContext } from "react";

export const backgroundColors = {
  primary: "primary",
  blue: "blue",
  green: "green",
};

export const BackgroundColorContext = createContext({
  color: backgroundColors.z,
  changeColor: (color) => {},
});
