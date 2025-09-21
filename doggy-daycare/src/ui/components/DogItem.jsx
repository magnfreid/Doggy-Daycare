import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TagIcon from "@mui/icons-material/Tag";
import "./DogItem.css";
import StatusIndicator from "./StatusIndicator";

function DogItem({ dog }) {
  return (
    <li className="dog-item">
      {/* HEADER */}
      <div className="top">
        <div className="title">
          <p className="name">{dog.name}</p>

          {dog.sex === "female" ? (
            <FemaleIcon style={{ color: "pink" }} />
          ) : (
            <MaleIcon style={{ color: "lightblue" }} />
          )}
        </div>
        <StatusIndicator isPresent={dog.present} />
      </div>

      <div className="content">
        <div className="dog-info">
          <p>{dog.breed.charAt(0).toUpperCase() + dog.breed.slice(1)}</p>
          <p>{dog.age < 2 ? `${dog.age} year old` : `${dog.age} years old`}</p>
          <div className="code">
            <TagIcon style={{ color: "teal" }} />
            <p>{dog.chipNumber}</p>
          </div>
        </div>
        <div className="owner-info">
          <p>{dog.owner.name}</p>
          <p>{dog.owner.lastName}</p>
          <p>{dog.owner.phoneNumber}</p>
        </div>
      </div>
    </li>
  );
}

export default DogItem;
