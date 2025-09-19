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

  useEffect(() => {
    setDogs(mockData);
    setLoading(false);
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
            element={<ActivePage dogs={dogs} loading={loading} />}
          />
          <Route
            path="/registry"
            element={<RegistryPage dogs={dogs} loading={loading} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Home;
