import styled from "styled-components";
import { ColorPickerTool } from "../../features/ColorPickerTool";
import { ColorContextProvider } from "../../context";

const List = styled.ul`
  // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;

  & li {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    margin: 10px 10px 0 0;
  }
`;

function Palette() {
  return (
    <ColorContextProvider>
      <div>
        <h1>Palette</h1>
        <h2>Paint</h2>
        <List>
          <li>Benjamine Moore Dove</li>
          <li>Benjamine Moore Dove</li>
          <li>Benjamine Moore Dove</li>
          <li>Benjamine Moore Dove</li>
          <li>Benjamine Moore Dove</li>
        </List>
        <ColorPickerTool />
      </div>
    </ColorContextProvider>
  );
}

export default Palette;
