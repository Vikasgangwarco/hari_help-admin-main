import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [], // All data you need (e.g., appointments or users)
  filteredData: [], // Filtered data after search
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload; // Initially set filteredData to be the same as the full data
    },
    filterData: (state, action) => {
      const query = action.payload.toLowerCase();
      // Filter data based on the query (adjust this to match the structure of your data)
      state.filteredData = state.data.filter((item) =>
        item.name.toLowerCase().includes(query) // Assuming each item has a 'name' field
      );
    },
  },
});

export const { setData, filterData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
