import { HashRouter, Route, Routes } from "react-router";
import "./Home.css";
import { useEffect, useState } from "react";
import IntroPage from "./features/intro/IntroPage";
import ActivePage from "./features/active/ActivePage";
import RegistryPage from "./features/registry/RegistryPage";
import { fetchDogData } from "../data/api";
import Header from "./Header";

function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDogData(true)
      .then((data) => setDogs(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route
            path="/active"
            element={<ActivePage dogs={dogs} loading={loading} error={error} />}
          />
          <Route
            path="/registry"
            element={
              <RegistryPage dogs={dogs} loading={loading} error={error} />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Home;
