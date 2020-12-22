import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "header",
  initialState: {
    username: "John Doe",
    userImage:
      "https://www.giftspeaks.in/wp-content/uploads/2020/01/Bearded-Face-Animated-Pure-Cotton-Tshirt-for-Men-White-Design.jpg",
    subTitle: [
      "A web developer having good front end experience",
      "I design and develop websites using ReactJS",
    ],
    description:
      "I am a web developer who works on ReactJS and Angular. <br/><br/>I design and develop web applications using the latest technologies. I am an aspiring full stack developer",
    resumeLink:
      "https://drive.google.com/file/d/1jC1BhhuJA0EsuqV4pjMQlx7PwyAKurhQ/view?usp=sharing",
    social: {
      github: "https://github.com/yetotoadd",
      linkedin: "https://www.linkedin.com/in/yetotoadd/",
      facebook: "https://www.facebook.com/yetotoadd",
      gmail: "yetotoadd@gmail.com",
      twitter: "http://twitter.com/yetotoadd",
    },
  },
  reducers: {},
});

export const { reducer } = profileSlice;
