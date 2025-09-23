import ListView from "../../components/ListView";
import "./ActivePage.css";

function ActivePage({ dogs, loading, error }) {
  return (
    <div className="active-page">
      <ListView
        dogs={dogs.filter((dog) => dog.present === true)}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default ActivePage;
