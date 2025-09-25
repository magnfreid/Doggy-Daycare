import "./RegistryPage.css";
import RegistryListItem from "../../components/list-items/RegistryListItem";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import FilterBar from "../../components/FilterBar.jsx";

function RegistryPage({ dogs, loading, error }) {
  const [search, setSearch] = useState("");
  const [displayedDogs, setDisplayedDogs] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [reversed, setReversed] = useState(false);
  const [filters, setFilters] = useState([]);

  //Skapa en list av alla raser + antalet (kan nog göras mer effektiv med hjälp av en map)
  function getAllBreeds() {
    let allBreeds = [];
    dogs.forEach((dog) => {
      const breedExists = allBreeds.some((entry) => entry.breed === dog.breed);
      if (breedExists) {
        const target = allBreeds.find((entry) => entry.breed === dog.breed);
        target.amount += 1;
      } else {
        allBreeds.push({ breed: dog.breed, amount: 1 });
      }
    });
    return allBreeds;
  }

  //Filtrering och sortering
  useEffect(() => {
    if (!dogs) return;
    let updatedDogs = [...dogs];
    //Sökfilter
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
    //Rasfiltrering
    if (filters.length > 0) {
      updatedDogs = updatedDogs.filter((dog) =>
        filters.some((field) =>
          field.toLowerCase().includes(dog.breed.toLowerCase())
        )
      );
    }
    //Sortering
    updatedDogs = sortDogs(updatedDogs, sortBy);
    //Omvänt
    reversed
      ? setDisplayedDogs(updatedDogs.reverse())
      : setDisplayedDogs(updatedDogs);
  }, [dogs, search, sortBy, reversed, filters]);

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
          setSortBy(sort);
        }}
        onReverseSort={(value) => {
          setReversed(value);
        }}
      />

      <FilterBar
        breeds={getAllBreeds()}
        filters={filters}
        onFilterChange={(filters) => setFilters(filters)}
      />
      <ul>
        {displayedDogs.map((dog) => (
          <RegistryListItem key={dog.chipNumber} dog={dog} />
        ))}
      </ul>
    </div>
  );
}

export default RegistryPage;
