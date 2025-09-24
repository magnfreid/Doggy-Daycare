import ActiveGridItem from "../../components/ActiveGridItem";
import Loading from "../../components/Loading";
import "./ActivePage.css";

function ActivePage({ dogs, loading, error }) {
  if (error)
    return <div className="registry">{`Something went wrong: ${error}`}</div>;

  if (loading) return <Loading />;

  return (
    <div className="active">
      <h1>Nuvarande gäster</h1>
      <ul>
        {dogs
          .filter((dog) => dog.present === true)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((dog) => (
            <ActiveGridItem key={dog.chipNumber} dog={dog} />
          ))}
      </ul>
    </div>
  );
}

export default ActivePage;
