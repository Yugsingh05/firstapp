// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { TasksReducer } from './TaskSlice';
import { ProjectsReducer } from './ProjectSlice';

export const store = configureStore({
  reducer: {
    tasks: TasksReducer,
    projects: ProjectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
