import { useNavigate, useParams } from "react-router";
import "./DogInfoPage.css";
import TagIcon from "@mui/icons-material/Tag";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Divider } from "@mui/material";

function DogInfoPage({ dogs }) {
  const { chipNumber } = useParams();
  const dog = dogs.find((dog) => dog.chipNumber === chipNumber);
  const navigate = useNavigate();

  return (
    <div className="dog-info">
      <div className="back-button-container">
        <ArrowBackIcon className="back-button" onClick={() => navigate(-1)} />
      </div>
      <div className="content">
        <h2>{dog.name}</h2>
        <div className="chip-number">
          <TagIcon style={{ color: "teal" }} />
          <p>{chipNumber}</p>
        </div>
        <p>{dog.breed.charAt(0).toUpperCase() + dog.breed.slice(1)}</p>

        <img src={dog.img} alt="Dog portrait" />
        <Divider className="divider" />
        <div className="owner">
          <p>Ägare:</p>
          <div className="owner-name">
            <p>{dog.owner.name}</p>
            <p>{dog.owner.lastName}</p>
          </div>
          <a href={`tel:${dog.owner.phoneNumber}`}>{dog.owner.phoneNumber}</a>
        </div>
        <Divider />
      </div>
    </div>
  );
}

export default DogInfoPage;
