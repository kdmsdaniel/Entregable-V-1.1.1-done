import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setProducts } from "./Products.slice";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setNews: (state, action) => {
      return action.payload;
    }
  }
});

export const getProductsThunk = () => (dispatch) => {
  dispatch(setProducts(true));
  axios
    .get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then((res) => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setProducts(false)));
};

export const { setProducts } = newsSlice.actions;

export default newsSlice.reducer;