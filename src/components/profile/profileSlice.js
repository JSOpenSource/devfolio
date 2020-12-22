import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "header",
  initialState: {
    username: "John Doe",
    userImage:
      "https://www.giftspeaks.in/wp-content/uploads/2020/01/Bearded-Face-Animated-Pure-Cotton-Tshirt-for-Men-White-Design.jpg",
    subTitle: "A web developer having good front end experience especially in ReactJS",
    description1: "I am a web developer who works on ReactJS and Angular",
    description2:
      "I design and develop web applications using the latest technologies. I am an aspiring full stack developer",
  },
  reducers: {
    setData: (state, { payload }) => {
      state.username = payload.username;
      state.userImage = payload.userImage;
      state.subTitle = payload.subTitle;
      state.description1 = payload.description1;
      state.description2 = payload.description2;
    },
  },
});

export const { reducer } = profileSlice;
export const { setData } = profileSlice.actions;
