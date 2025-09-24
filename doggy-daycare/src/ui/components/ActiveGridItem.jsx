import "./ActiveGridItem.css";
import placeholder from "../../assets/placeholder.png";
import { useNavigate } from "react-router";
function ActiveGridItem({ dog }) {
  const navigate = useNavigate();
  return (
    <li
      className={`active-grid-item ${dog.sex}`}
      onClick={() => navigate(`/dog/${dog.chipNumber}`)}
    >
      <img
        src={dog.img || placeholder}
        alt="Image"
        onError={(e) => (e.target.src = placeholder)}
      />{" "}
      <div className="info">
        <p className="name">{dog.name}</p>
      </div>
    </li>
  );
}

export default ActiveGridItem;
