import { createSlice } from "@reduxjs/toolkit";

interface initialType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  name: any;
}

const initialState: initialType = {
  name: null,
};

export const sidebarSlice = createSlice({
  name: "sidebarState",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setName } = sidebarSlice.actions;

export default sidebarSlice.reducer;
