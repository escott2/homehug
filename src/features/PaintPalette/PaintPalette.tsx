import * as S from "./PaintPalette.styles";
import { PaintSwatch } from "./components";
import { PaintSwatchData } from "./types";

const testData: PaintSwatchData[] = [
  {
    id: 1,
    color: "#544645",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 2,
    color: "#544649",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 3,
    color: "#544653",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 4,
    color: "#544662",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 5,
    color: "#544645",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 6,
    color: "#544649",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 7,
    color: "#544653",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 8,
    color: "#544662",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 9,
    color: "#544645",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 10,
    color: "#544649",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 11,
    color: "#544653",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
  {
    id: 12,
    color: "#544662",
    brand: "Benjamin Moore",
    name: "White Dove",
    spare: { hasSpare: true, location: "Basement" },
    locationPainted: ["Living Room", "Kitchen"],
  },
];

function PaintPalette() {
  return (
    <>
      <h2>Paint</h2>
      <S.List>
        {testData.map((item) => (
          <PaintSwatch paintData={item} key={item.id} />
        ))}

        <li>
          <button>Add color</button>
        </li>
      </S.List>
    </>
  );
}

export default PaintPalette;
