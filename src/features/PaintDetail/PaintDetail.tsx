import { useParams } from "react-router-dom";

const testPaintDetailData = {
  id: 11,
  color: "#544653",
  brand: "Benjamin Moore",
  name: "White Dove",
  spare: { hasSpare: true, location: "Basement" },
  locationPainted: ["Living Room", "Kitchen"],
};

function PaintDetail() {
  let params = useParams();
  console.log(testPaintDetailData.spare.hasSpare);

  // When backend is availabe, fetch paint detail with id.
  // Add options to edit and delete

  return (
    <div>
      <h2>Paint Detail</h2>
      <h3>Name</h3>
      <p>{testPaintDetailData.name}</p>
      <h3>Brand</h3>
      <p>{testPaintDetailData.brand}</p>
      <h3>What's painted</h3>
      {testPaintDetailData.locationPainted.map((location) => (
        <p>{location}</p>
      ))}
      <h3>Do you have extra paint?</h3>
      <p>{testPaintDetailData.spare.hasSpare ? "yes" : "no"}</p>
      {testPaintDetailData.spare.hasSpare &&
        testPaintDetailData.spare.location && (
          <>
            <h3>Paint storage location</h3>
            <p>{testPaintDetailData.spare.location}</p>
          </>
        )}
      {params.id}
    </div>
  );
}

export default PaintDetail;
