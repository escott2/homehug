import { createContext, useState } from "react";
import { Color } from "@rc-component/color-picker";

interface ColorContextValue {
  colorValue: Color | string;
  setColorValue: (newColor: Color | string) => void;
}

const defaultContextValue: ColorContextValue = {
  colorValue: "#ffffff",
  setColorValue: () => {},
};

export const ColorContext =
  createContext<ColorContextValue>(defaultContextValue);

interface ColorContextProviderProps {
  children: React.ReactNode;
}

export default function ColorContextProvider({
  children,
}: ColorContextProviderProps) {
  const [colorValue, setColorValue] = useState<Color | string>("#ffffff");

  const ctxValue = {
    colorValue,
    setColorValue,
  };

  return (
    <ColorContext.Provider value={ctxValue}>{children}</ColorContext.Provider>
  );
}
