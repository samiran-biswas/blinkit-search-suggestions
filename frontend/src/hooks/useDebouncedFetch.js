import { useDispatch } from "react-redux";
import { useCallback } from "react";
import debounce from "lodash.debounce";
import { searchProducts } from "../redux/slices/searchSlice";

export const useDebouncedFetch = () => {
  const dispatch = useDispatch();

  const fetchSuggestions = (query) => {
    dispatch(searchProducts(query));
  };

  return useCallback(debounce(fetchSuggestions, 500), []);
};
