import { useEffect, useMemo, useRef, useState } from "react";
import { availableProducts } from "../data/searchData.js";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    return availableProducts.filter((product) =>
      product.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowDropdown(true);
  };

  const handleProductSelect = (product) => {
    setSearchQuery(product);
    handleSearchSubmit(product);
    setShowDropdown(false);
  };

  const handleSearchSubmit = (query = searchQuery) => {
    if (query.trim()) {
      navigate(`/searchresult?q=${encodeURIComponent(query)}`);
    }
  };

  //   handle the outside and inside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideSearch =
        desktopSearchRef.current?.contains(event.target) ||
        mobileSearchRef.current?.contains(event.target);

      if (!clickedInsideSearch) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    showDropdown,
    handleSearchChange,
    handleSearchSubmit,
    filteredProducts,
    handleProductSelect,
    desktopSearchRef,
    mobileSearchRef,
  };
};
