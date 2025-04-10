import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    id : String,
    title : String,
    iscompleted : Boolean
}

interface TaskState {
    tasks : Task[];
    status : 'idle' | 'loading' | 'failed' | 'succeeded';
    error : String | null
}

const initialState : TaskState = {
    tasks :[],
    status : 'idle',
    error : null,
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
});

export const AddTask = createAsyncThunk('tasks/addTask', async (task : Omit<Task, 'id'>) => {
    console.log(task);
    const newTask = {...task , id : Date.now().toString()};

    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];

    tasks.push(newTask);

    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    return newTask;
})


export const DeleteTask = createAsyncThunk('tasks/deleteTask', async (id : String) => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    const updatedTasks = tasks.filter((task : Task) => task.id !== id);
    console.log("updatedTasks",updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return id;
})

export const ToggleComplete = createAsyncThunk('tasks/toggleComplete', async (id : String) => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    const updatedTasks = tasks.map((task : Task) => task.id === id ? {...task , iscompleted : !task.iscompleted} : task);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return id;
})

const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers : builder => {
        builder
        .addCase(fetchTasks.pending,(state) => {
            state.status = 'loading';
        })
        .addCase(fetchTasks.fulfilled,(state,action : PayloadAction<Task[]>) => {
            state.status = 'succeeded';
            state.tasks = action.payload;
        })
        .addCase(fetchTasks.rejected,(state,action) => {
            state.status = 'failed';
            state.error = action.error.message || null;
        })
        .addCase(AddTask.fulfilled,(state,action : PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        })
        .addCase(DeleteTask.fulfilled,(state,action : PayloadAction<String>) => {
            state.tasks = state.tasks.filter((task : Task) => task.id !== action.payload);
        })
        .addCase(ToggleComplete.fulfilled,(state,action : PayloadAction<String>) => {
            state.tasks = state.tasks.map((task : Task) => task.id === action.payload ? {...task , iscompleted : !task.iscompleted} : task);
        })
    },
});


export const TasksReducer = TaskSlice.reducer;
export const {} = TaskSlice.actions;