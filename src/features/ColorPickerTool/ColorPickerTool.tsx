import { useMemo, useContext } from "react";
import ColorPicker from "@rc-component/color-picker";
import "@rc-component/color-picker/assets/index.css";
import { ColorContext } from "../../context";
import styled from "styled-components";

export const toHexFormat = (value?: string) =>
  value?.replace(/[^0-9a-fA-F#]/g, "").slice(0, 9) || "";

const Container = styled.div<{ $color: string }>`
  background-color: ${(props) => props.$color};
`;

function ColorPickerTool() {
  const { colorValue, setColorValue } = useContext(ColorContext);
  console.log(colorValue);

  const color = useMemo(
    () =>
      typeof colorValue === "string"
        ? colorValue
        : colorValue.a < 1
        ? colorValue.toHexString()
        : colorValue.toHexString(),
    [colorValue]
  );

  return (
    <>
      <ColorPicker
        value={colorValue}
        onChange={setColorValue}
        panelRender={(panel) => (
          <>
            {panel}
            <input
              value={color}
              onChange={(e) => {
                const originValue = e.target.value;
                setColorValue(toHexFormat(originValue));
              }}
            />
            <p>test</p>
          </>
        )}
      />
      <p>{color}</p>
      <Container $color={color}>{color}</Container>
    </>
  );
}

export default ColorPickerTool;
