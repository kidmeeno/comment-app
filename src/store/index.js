import { configureStore, createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

// Create a comments slice with a commentsLoaded flag and newComment state
const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    commentsLoaded: false,
    newComment: '' // Store input field value in the state
  },
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
      state.commentsLoaded = true;  // Mark comments as loaded after the initial fetch
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
    },
    setNewComment: (state, action) => {
      state.newComment = action.payload; // Sync input field with the state
    }
  }
});

export const { setComments, addComment, deleteComment, setNewComment } = commentsSlice.actions;

// Create persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  commentsData: commentsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
