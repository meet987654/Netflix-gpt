import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null,
    trailer: null, // Add trailer to the initial state
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state,action)=>{
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state,action)=>{
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state,action)=>{
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailer = action.payload; // Corrected: Set `trailer` in state
    },
  },
});

export const { addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
