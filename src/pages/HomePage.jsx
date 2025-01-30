import { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [category]);

  return (
    <div>
      <SearchBar setSearchResults={setSearchResults} />
      <CategoryList setCategory={setCategory} />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mt-8 p-4 lg:px-8">
        {(searchResults.length > 0 ? searchResults : products).map(
          (product) => (
            <ProductCard key={product.id} product={product} />
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
