import "./ActivePage.css";
import DogItem from "../../components/DogItem";

function ActivePage({ dogs, loading, error }) {
  if (error)
    return (
      <div className="active">
        <p>{`Something went wrong: ${error}`}</p>
      </div>
    );

  if (loading) return <div className="active">Loading...</div>;

  return (
    <div className="active">
      <ul>
        {dogs
          .filter((dog) => dog.present === true)
          .map((dog) => (
            <DogItem key={dog.chipNumber} dog={dog} />
          ))}
      </ul>
    </div>
  );
}

export default ActivePage;
