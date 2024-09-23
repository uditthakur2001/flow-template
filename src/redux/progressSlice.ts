import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Stage {
  id: number;
  name: string;
  description: string;
//   fileUrl: string;
  status: 'ongoing' | 'completed';
}

interface ProgressState {
  stages: Stage[];
}

const initialState: ProgressState = {
  stages: [],
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setStages(state, action: PayloadAction<Stage[]>) {
      state.stages = action.payload;
    },
    addStage(state, action: PayloadAction<Stage>) {
      state.stages.push(action.payload);
    },
    updateStageStatus(state, action: PayloadAction<{ id: number; status: 'ongoing' | 'completed' }>) {
      const index = state.stages.findIndex(stage => stage.id === action.payload.id);
      if (index !== -1) {
        state.stages[index].status = action.payload.status;
      }
    },
    removeStage(state, action: PayloadAction<number>) {
      state.stages = state.stages.filter(stage => stage.id !== action.payload);
    },
    newStage(state, action: PayloadAction<Stage>) {
        state.stages.push(action.payload);
      },
  },
});

export const { setStages, addStage, updateStageStatus, removeStage, newStage } = progressSlice.actions;
export default progressSlice.reducer;
