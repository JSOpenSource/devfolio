import { createSlice } from '@reduxjs/toolkit';

const SkillSlice = createSlice({
    name: 'skill',
    initialState: {
        frontEnd: ['HTML', 'CSS', 'JAVASCRIPT'],
        backend: ['NODE JS', 'EXPRESS JS'],
        database: ['MySQL', 'MongoDB', 'PostgreSQL']
    },
    reducers: {
        setData: (state, { payload }) => {
            return state + payload;

        }

    }
}

);

export const { reducer } = SkillSlice;
