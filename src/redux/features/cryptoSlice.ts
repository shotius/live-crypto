import { createSlice } from "@reduxjs/toolkit";
import { CrypotoState } from "../types";


const initialState: CrypotoState = {
  cryptoCoins: []
}

const cryptoSlice = createSlice({
  name: "crypto", 
  initialState, 
  reducers: {}
})


export const {} = cryptoSlice.actions
export default cryptoSlice.reducer