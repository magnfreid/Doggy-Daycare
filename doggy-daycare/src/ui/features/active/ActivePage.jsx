import ListPage from "../../components/ListPage";
import "./ActivePage.css";

function ActivePage({ dogs, loading, error }) {
  return (
    <div className="active-page">
      <ListPage
        dogs={dogs.filter((dog) => dog.present === true)}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default ActivePage;
