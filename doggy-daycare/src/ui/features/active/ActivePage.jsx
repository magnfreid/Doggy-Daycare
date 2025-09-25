import ActiveGridItem from "../../components/list-items/ActiveGridItem";
import Loading from "../../components/Loading";
import "./ActivePage.css";

function ActivePage({ dogs, loading, error }) {
  const activeDogs = dogs.filter((dog) => dog.present === true);
  if (error)
    return <div className="registry">{`Something went wrong: ${error}`}</div>;

  if (loading) return <Loading />;

  return (
    <div className="active">
      <h1>{`Nuvarande gäster (${activeDogs.length})`}</h1>
      <ul>
        {activeDogs
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((dog) => (
            <ActiveGridItem key={dog.chipNumber} dog={dog} />
          ))}
      </ul>
    </div>
  );
}

export default ActivePage;
