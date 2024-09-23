import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newStage } from './redux/progressSlice'; // Adjust this path based on your structure
import { Button, TextField, Box } from '@mui/material';

const StageForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddStage = () => {
    if (!name || !description) return; // Validate inputs
    const newStageData = {
      id: Date.now(), // Unique ID for the new stage
      name,
      description,
      status: 'ongoing' as 'ongoing', // Explicitly set the status
    };
    dispatch(newStage(newStageData)); // Dispatch the action
    setName('');
    setDescription('');
  };

  return (
    <Box mb={4}>
      <TextField
        label="Stage Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Stage Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddStage}>
        Add Stage
      </Button>
    </Box>
  );
};

export default StageForm;
