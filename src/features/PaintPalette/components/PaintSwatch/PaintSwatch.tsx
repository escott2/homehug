import * as S from "./PaintSwatch.styles";
import { PaintSwatchData } from "../../types";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PaintSwatchProps {
  paintData: PaintSwatchData;
}

function PaintSwatch({ paintData }: PaintSwatchProps) {
  const { color, name, brand, id } = paintData;
  const [displayFront, setDisplayFront] = useState(true);

  const toggleSwatch = () => {
    setDisplayFront(!displayFront);
  };

  return (
    <S.ListItem $paintColor={color} onClick={toggleSwatch}>
      {displayFront ? (
        <S.FrontSwatchContainer $paintColor={color}></S.FrontSwatchContainer>
      ) : (
        <S.BackSwatchContainer $paintColor={color}>
          <h3>{name}</h3>
          <p>{brand}</p>
          <Link to={`/palette/swatch/${id}`}>View Details</Link>
        </S.BackSwatchContainer>
      )}
    </S.ListItem>
  );
}

export default PaintSwatch;
