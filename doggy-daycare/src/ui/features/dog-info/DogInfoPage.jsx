import { useNavigate, useParams } from "react-router";
import "./DogInfoPage.css";
import TagIcon from "@mui/icons-material/Tag";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function DogInfoPage({ dogs }) {
  const { chipNumber } = useParams();
  const dog = dogs.find((dog) => dog.chipNumber === chipNumber);
  const navigate = useNavigate();

  return (
    <div className="dog-info">
      <ArrowBackIcon className="back-button" onClick={() => navigate(-1)} />
      <h2>{dog.name}</h2>
      <div className="chip-number">
        <TagIcon style={{ color: "teal" }} />
        <p>{chipNumber}</p>
      </div>
      <p>{dog.breed.charAt(0).toUpperCase() + dog.breed.slice(1)}</p>
      <p>Ägare:</p>
      <p>{dog.owner.name}</p>
      <p>{dog.owner.lastName}</p>
      <a href={`tel:${dog.owner.phoneNumber}`}>{dog.owner.phoneNumber}</a>
      <img src={dog.img} alt="Dog portrait" />
    </div>
  );
}

export default DogInfoPage;
