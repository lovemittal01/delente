import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setSearchResults }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          );
          setSearchResults(filtered);
        });
    } else {
      setSearchResults([]);
    }
  }, [query, setSearchResults]);

  return (
    <div className=" m-4 md:m-8">
      {" "}
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
