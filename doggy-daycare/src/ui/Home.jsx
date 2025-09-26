import { HashRouter, Route, Routes } from "react-router";
import "./Home.css";
import { useEffect, useState } from "react";
import IntroPage from "./features/intro/IntroPage";
import { fetchDogData } from "../data/api";
import Header from "./Header";
import ActivePage from "./features/active/ActivePage";
import RegistryPage from "./features/registry/RegistryPage";
import DogInfoPage from "./features/dog-info/DogInfoPage";

function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDogData()
      .then((data) => setDogs(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home">
      <HashRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route
              path="/active"
              element={
                <ActivePage dogs={dogs} loading={loading} error={error} />
              }
            />
            <Route
              path="/registry"
              element={
                <RegistryPage dogs={dogs} loading={loading} error={error} />
              }
            />
            <Route
              path="/dog/:chipNumber"
              element={<DogInfoPage dogs={dogs} />}
            />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default Home;
