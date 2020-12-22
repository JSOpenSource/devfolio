import { createSlice } from "@reduxjs/toolkit";

export const menuItems = {
  SKILLS: "Skills",
};

const headerSlice = createSlice({
  name: "header",
  initialState: {
    darkMode: false,
    name: "John Doe",
    items: ["Skills", "Experience", "Open Source"],
  },
  reducers: {
    showItem: (state, { payload }) => {
      return state + payload;
    },
    hideItem: (state, { payload }) => {
      state.splice(state.items.findIndex(payload), 1);
    },

    setDarkMode: (state, { payload }) => {
      state.darkMode = payload;
      changeThemeColors(payload);
    },
  },
});

function changeThemeColors(theme) {
  if (theme) {
    document.documentElement.style.setProperty("--bg-color", "#000");
    document.documentElement.style.setProperty("--text-color", "#fff");
  } else {
    document.documentElement.style.setProperty("--bg-color", "#fff");
    document.documentElement.style.setProperty("--text-color", "#000");
  }
}

export const { reducer } = headerSlice;
export const { showItem, hideItem, setDarkMode } = headerSlice.actions;
