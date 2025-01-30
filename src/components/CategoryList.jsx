import { useState, useEffect } from "react";

const CategoryList = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto w-full px-4 py-2 sm:px-6 sm:py-2  lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Categories
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <div key={category} className="group relative">
              <button
                onClick={() => setCategory(category)}
                className=" w-full rounded-md bg-gray-200 p-4 text-md font-medium text-gray-900 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-14 flex items-center justify-center hover:bg-gray-300"
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
