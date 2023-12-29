import React, { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ProductContext } from "../contexts/products-context";

const SearchFilterProducts = () => {
  const { getSearchTerm, getChangedPrice } = useContext(ProductContext);
  const { control } = useForm();
  const [searchTerm, setSearchTerm] = useState("");
  const [changedPrice, setChangedPrice] = useState("");

  const handleSearchTerm = searchTerm => setSearchTerm(searchTerm);
  const handlePriceChange = changedPrice => setChangedPrice(changedPrice);

  useEffect(() => {
    getSearchTerm(searchTerm);
  }, [getSearchTerm, searchTerm]);

  useEffect(() => {
    getChangedPrice(changedPrice);
  }, [getChangedPrice, changedPrice]);

  return (
    <div className="row mt-2">
      <form className="d-flex" role="search">
        <div className="col-md-7 me-2">
          <input
            onChange={e => handleSearchTerm(e.target.value)}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="col-md-5">
          <div className="d-flex justify-content-center me-2">
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  onChange={e => handlePriceChange(e.target.value)}
                  style={{ fontSize: "1.18rem" }}
                  className="form-select"
                  aria-label="Price Low to High"
                >
                  {["Price Low to High", "Price High to Low"].map((price, i) => (
                    <option key={i} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFilterProducts;
