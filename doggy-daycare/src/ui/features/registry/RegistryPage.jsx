import ListView from "../../components/ListView";
import "./RegistryPage.css";

function RegistryPage({ dogs, loading, error }) {
  return (
    <div className="registry-page">
      <ListView dogs={dogs} loading={loading} error={error} />
    </div>
  );
}

export default RegistryPage;
