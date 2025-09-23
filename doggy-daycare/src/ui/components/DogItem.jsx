import TagIcon from "@mui/icons-material/Tag";
import "./DogItem.css";
import { useNavigate } from "react-router";

function DogItem({ dog }) {
  const presentName = dog.present ? "present" : "absent";
  const navigate = useNavigate();
  return (
    <li
      className={`dog-item ${dog.sex} ${presentName}`}
      onClick={() => navigate(`/dog/${dog.chipNumber}`)}
    >
      {/* <div className="img-container"> */}
      {/* <img src={dog.img} alt="Image" /> */}
      {/* </div> */}
      {/* <div className="inner-wrapper"> */}
      {/* HEADER */}

      <div className="top">
        <div className="title">
          <p className="name">{dog.name}</p>
        </div>
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
          <div className="name-field">
            <p>{dog.owner.name}</p>
            <p>{dog.owner.lastName}</p>
          </div>
          <p>{dog.owner.phoneNumber}</p>
        </div>
      </div>
      {/* </div> */}
    </li>
  );
}

export default DogItem;
