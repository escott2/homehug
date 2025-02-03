import { ColorPickerTool, PaintPalette } from "../../features";
import { ColorContextProvider } from "../../context";
import { Outlet } from "react-router-dom";

function Palette() {
  return (
    <ColorContextProvider>
      <div>
        <h1>Palette</h1>
        {/* <PaintPalette /> */}
        <Outlet />

        {/* <ColorPickerTool /> */}
      </div>
    </ColorContextProvider>
  );
}

export default Palette;
