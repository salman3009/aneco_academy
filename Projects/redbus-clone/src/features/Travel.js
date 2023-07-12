import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  from: "",
  to: "",
  date: "",
  price: 0,
  seats: 0,
};

export const travelSlice = createSlice({
  name: "travel",
  initialState: { value: initialValues },
  reducers: {
    setTravelData: (state, action) => {
      state.value = action.payload;
    },
    clearTravelData: (state) => {
      state.value = initialValues;
    },
  },
});

export const { setTravelData, clearTravelData } = travelSlice.actions;
export default travelSlice.reducer;
