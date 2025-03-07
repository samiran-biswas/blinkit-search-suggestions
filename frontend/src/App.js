import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SearchBar from "./components/SearchBar";
import SuggestionsList from "./components/SuggestionsList";
import Spinner from "./components/Spinner";
import ProductDetails from "./components/ProductDetails";
import { useDebouncedFetch } from "./hooks/useDebouncedFetch";

const SearchApp = () => {
  const [query, setQuery] = useState("");
  const { data: suggestions, loading, error } = useSelector((state) => state.search);
  const debouncedFetch = useDebouncedFetch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (product) => {
    setSelectedProduct(product);
    setShowDropdown(false);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="d-flex flex-column align-items-center p-4 min-vh-100 bg-light">
    <h2 className="text-primary fw-bold mb-4"> 🛍️ Find Your Perfect Product 🔍</h2>

      <div className="position-relative w-100" style={{ maxWidth: "800px" }}>
        <SearchBar query={query} setQuery={setQuery} onSearch={(q) => { debouncedFetch(q); setShowDropdown(true); }} />
        {loading && <Spinner />}
        {error && <div className="text-danger mt-2">{error}</div>}
        {showDropdown && <SuggestionsList suggestions={suggestions} onSelect={handleSelect} />}
      </div>
      {selectedProduct && <ProductDetails product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <SearchApp />
  </Provider>
);

export default App;


