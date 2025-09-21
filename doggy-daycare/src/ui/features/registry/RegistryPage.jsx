import "./RegistryPage.css";
import DogItem from "../../components/DogItem";

function RegistryPage({ dogs, loading, error }) {
  if (error)
    return <div className="registry">{`Something went wrong: ${error}`}</div>;

  if (loading)
    return (
      <div className="registry">
        <p>Loading...</p>
      </div>
    );

  return (
    <>
      <div className="registry">
        <ul>
          {dogs.map((dog) => (
            <DogItem key={dog.chipNumber} dog={dog} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default RegistryPage;
