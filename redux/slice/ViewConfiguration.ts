import { createSlice } from "@reduxjs/toolkit";

interface dataType {
  name: string;
  url: string;
  price: string;
  description: string;
  stock: number;
  category: string;
}
interface initialType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detailData: dataType;
  name: string;
}

const initialState: initialType = {
  detailData: <dataType>{},
  name: "",
};

export const viewConfigurationSlice = createSlice({
  name: "viewState",
  initialState,
  reducers: {
    setDetailData(state, action) {
      state.detailData = action.payload;
    },
  },
});

export const { setDetailData } = viewConfigurationSlice.actions;

export default viewConfigurationSlice.reducer;
