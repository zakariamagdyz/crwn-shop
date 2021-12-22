import { createSlice } from "@reduxjs/toolkit";
import shopItems from "../../assets/data/shop.data";

export default createSlice({ name: "shop", initialState: shopItems }).reducer;
