import "./ListPage.css";
import DogItem from "./DogItem";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function ListPage({ dogs, loading, error }) {
  const [search, setSearch] = useState("");
  const [allDogs, setAllDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);

  useEffect(() => {
    if (dogs) setAllDogs(dogs);
  }, [dogs]);

  useEffect(() => {
    if (!search) {
      setFilteredDogs(dogs);
    } else {
      const updatedDogs = dogs.filter((dog) => {
        const fields = [
          dog.name,
          dog.owner.name,
          dog.owner.lastName,
          dog.owner.phoneNumber,
          dog.breed,
          dog.chipNumber,
        ];
        const query = search.toLowerCase().trim();
        return fields.some((field) => field.toLowerCase().includes(query));
      });
      setFilteredDogs(updatedDogs);
    }
  }, [search, dogs]);

  if (error)
    return <div className="list-page">{`Something went wrong: ${error}`}</div>;

  if (loading)
    return (
      <div className="list-page">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="list-page">
      <SearchBar onSearch={(search) => setSearch(search)} />
      <ul>
        {filteredDogs.map((dog) => (
          <DogItem key={dog.chipNumber} dog={dog} />
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
