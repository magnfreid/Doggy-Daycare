import "./RegistryPage.css";
import RegistryListItem from "../../components/RegistryListItem";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

function RegistryPage({ dogs, loading, error }) {
  const [search, setSearch] = useState("");
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [reversed, setReversed] = useState(false);

  //Filtrering och sortering
  useEffect(() => {
    if (!dogs) return;
    let updatedDogs = [...dogs];
    if (search) {
      const query = search.toLowerCase().trim();
      updatedDogs = updatedDogs.filter((dog) =>
        [
          dog.name,
          dog.owner.name,
          dog.owner.lastName,
          dog.owner.phoneNumber,
          dog.breed,
          dog.chipNumber,
        ].some((field) => field.toLowerCase().includes(query))
      );
    }
    updatedDogs = sortDogs(updatedDogs, sortBy);
    reversed
      ? setFilteredDogs(updatedDogs.reverse())
      : setFilteredDogs(updatedDogs);
  }, [dogs, search, sortBy, reversed]);

  function sortDogs(dogs, sortBy) {
    const dogsCopy = [...dogs];
    switch (sortBy) {
      case "name":
        return dogsCopy.sort((a, b) => a.name.localeCompare(b.name));
      case "breed":
        return dogsCopy.sort((a, b) => a.breed.localeCompare(b.breed));
      case "owner":
        return dogsCopy.sort((a, b) =>
          a.owner.lastName.localeCompare(b.owner.lastName)
        );
      case "active":
        return dogsCopy.sort((a, b) => b.present - a.present);
      default:
        return dogsCopy;
    }
  }

  if (error)
    return <div className="registry">{`Something went wrong: ${error}`}</div>;

  if (loading) return <Loading />;

  return (
    <div className="registry">
      <SearchBar
        onSearch={(search) => setSearch(search)}
        onSortChange={(sort) => {
          console.log("Sort by updated: ", sort);
          setSortBy(sort);
        }}
        onReverseSort={(value) => {
          console.log("Reverse: ", value);
          setReversed(value);
        }}
      />
      <ul>
        {filteredDogs.map((dog) => (
          <RegistryListItem key={dog.chipNumber} dog={dog} />
        ))}
      </ul>
    </div>
  );
}

export default RegistryPage;
