import ListPage from "../../components/ListPage";
import "./RegistryPage.css";

function RegistryPage({ dogs, loading, error }) {
  return (
    <div className="registry-page">
      <ListPage dogs={dogs} loading={loading} error={error} />
    </div>
  );
}

export default RegistryPage;
