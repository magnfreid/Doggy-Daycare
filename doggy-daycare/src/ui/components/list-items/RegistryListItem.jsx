import TagIcon from "@mui/icons-material/Tag";
import "./RegistryListItem.css";
import { useNavigate } from "react-router";

function RegistryListItem({ dog }) {
  const presentName = dog.present ? "present" : "absent";
  const navigate = useNavigate();
  return (
    <li
      className={`registry-list-item ${dog.sex} ${presentName}`}
      onClick={() => navigate(`/dog/${dog.chipNumber}`)}
    >
      <div className="top">
        <div className="title">
          <p className="name">{dog.name}</p>
        </div>
      </div>

      <div className="content">
        <div className="dog-info">
          <p>{dog.breed.charAt(0).toUpperCase() + dog.breed.slice(1)}</p>
          <p>{`${dog.age} år`}</p>
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

export default RegistryListItem;
