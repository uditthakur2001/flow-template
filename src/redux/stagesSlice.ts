import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Stage {  // Export the Stage interface
  id: number;
  name: string;
  description: string;
  fileUrl: string;
  status: 'ongoing' | 'completed'; // Status type
}

interface StagesState {
  stages: Stage[];
}

const initialState: StagesState = {
  stages: [],
};

const stagesSlice = createSlice({
  name: 'stages',
  initialState,
  reducers: {
    newStage(state, action: PayloadAction<Stage>) {
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
    setStages(state, action: PayloadAction<Stage[]>) {
      state.stages = action.payload;
    },
  },
});

// Export the actions
export const { newStage, updateStageStatus, removeStage, setStages } = stagesSlice.actions;

// Export the reducer
export default stagesSlice.reducer;
