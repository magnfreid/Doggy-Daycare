import { HashRouter, Link, Route, Routes } from "react-router";
import "./Home.css";
import { useEffect, useState } from "react";
import IntroPage from "./features/intro/IntroPage";
import ActivePage from "./features/active/ActivePage";
import RegistryPage from "./features/registry/RegistryPage";
import { mockData } from "../data/mock-data";

function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDogData(testMode = false) {
      if (!testMode) {
        try {
          await fetch("https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8")
            .then((response) => response.json())
            .then((data) => {
              setDogs(data.record);
              setLoading(false);
            });
        } catch (error) {
          setLoading(false);
          setError(error);
        }
      } else {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setDogs(mockData);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }
    }
    fetchDogData(true);
  }, []);

  return (
    <div className="home">
      <HashRouter>
        <header>
          <h1>Title</h1>
          <nav>
            <Link to={"/"}>Start</Link>
            <Link to={"/active"}>Aktiva</Link>
            <Link to={"/registry"}>Register</Link>
          </nav>
        </header>
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
