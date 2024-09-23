import React, { useEffect, useState } from 'react';
import { Typography, Button, Container, Box, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { removeStage, setStages, newStage, updateStageStatus } from '../redux/stagesSlice';
import { RootState } from '../redux/store';
import { Stage } from '../redux/stagesSlice'; // Import the Stage type

const DownloadPage: React.FC = () => {
  const stages = useSelector((state: RootState) => state.stages.stages);
  const dispatch = useDispatch();

  const [newStageName, setNewStageName] = useState('');
  const [newStageDescription, setNewStageDescription] = useState('');
  const [newStageFileUrl, setNewStageFileUrl] = useState('');
  const [editingStageId, setEditingStageId] = useState<number | null>(null);
  const [editStageName, setEditStageName] = useState('');
  const [editStageDescription, setEditStageDescription] = useState('');
  const [editStageFileUrl, setEditStageFileUrl] = useState('');

  // Load stages from local storage when the component mounts
  useEffect(() => {
    const savedStages = localStorage.getItem('stages');
    if (savedStages) {
      dispatch(setStages(JSON.parse(savedStages)));
    }
  }, [dispatch]);

  // Save stages to local storage whenever stages change
  useEffect(() => {
    localStorage.setItem('stages', JSON.stringify(stages));
  }, [stages]);

  const addNewStage = () => {
    const newStageData: Stage = {
      id: stages.length + 1,
      name: newStageName,
      description: newStageDescription,
      fileUrl: newStageFileUrl,
      status: 'ongoing',
    };
    dispatch(newStage(newStageData));
    setNewStageName('');
    setNewStageDescription('');
    setNewStageFileUrl('');
  };

  const saveEditedStage = (id: number) => {
    const updatedStageData: Stage = {
      id,
      name: editStageName,
      description: editStageDescription,
      fileUrl: editStageFileUrl,
      status: 'ongoing',
    };
    dispatch(updateStageStatus(updatedStageData));
    setEditingStageId(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Project Documentation Downloads
      </Typography>

      {stages.map((stage) => (
        <Box key={stage.id} mb={2}>
          {editingStageId === stage.id ? (
            <Box>
              <TextField
                label="Stage Name"
                value={editStageName}
                onChange={(e) => setEditStageName(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Stage Description"
                value={editStageDescription}
                onChange={(e) => setEditStageDescription(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="File URL"
                value={editStageFileUrl}
                onChange={(e) => setEditStageFileUrl(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => saveEditedStage(stage.id)}
                sx={{ mr: 2 }}
              >
                Save
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => setEditingStageId(null)}>
                Cancel
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography variant="h6">{stage.name}</Typography>
              <Button variant="contained" color="primary" href={stage.fileUrl} download>
                {stage.description}
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => dispatch(removeStage(stage.id))} sx={{ ml: 2 }}>
                Remove
              </Button>
              <Button variant="outlined" color="primary" onClick={() => {
                setEditingStageId(stage.id);
                setEditStageName(stage.name);
                setEditStageDescription(stage.description);
                setEditStageFileUrl(stage.fileUrl);
              }} sx={{ ml: 2 }}>
                Edit
              </Button>
            </Box>
          )}
        </Box>
      ))}

      <Box mt={4}>
        <Typography variant="h6">Add New Stage</Typography>
        <TextField
          label="Stage Name"
          value={newStageName}
          onChange={(e) => setNewStageName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Stage Description"
          value={newStageDescription}
          onChange={(e) => setNewStageDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="File URL"
          value={newStageFileUrl}
          onChange={(e) => setNewStageFileUrl(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addNewStage}
          disabled={!newStageName || !newStageDescription || !newStageFileUrl}
        >
          Add Stage
        </Button>
      </Box>
    </Container>
  );
};

export default DownloadPage;
