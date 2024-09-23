import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStageStatus, removeStage, setStages } from '../redux/progressSlice';
import { RootState } from '../redux/store';
import { Container, Typography, Button, Box } from '@mui/material';
import StageForm from '../StageForm';

const ProgressPage: React.FC = () => {
  const stages = useSelector((state: RootState) => state.progress.stages);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedStages = localStorage.getItem('progressStages');
    if (savedStages) {
      dispatch(setStages(JSON.parse(savedStages)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('progressStages', JSON.stringify(stages));
  }, [stages]);

  const markAsCompleted = (id: number) => {
    dispatch(updateStageStatus({ id, status: 'completed' }));
  };

  const ongoingStages = stages.filter(stage => stage.status === 'ongoing');
  const completedStages = stages.filter(stage => stage.status === 'completed');

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Project Progress
      </Typography>

      <StageForm />

      <Box my={4}>
        <Typography variant="h5">Ongoing Stages</Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          {ongoingStages.map(stage => (
            <Box border={1} borderRadius={2} padding={2} key={stage.id}>
              <Typography variant="h6">{stage.name}</Typography>
              <Button variant="contained" color="primary" onClick={() => markAsCompleted(stage.id)}>
                Mark as Completed
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => dispatch(removeStage(stage.id))}>
                Remove
              </Button>
            </Box>
          ))}
        </Box>

        <Box my={4}> {/* Add margin to separate sections */}
          <Typography variant="h5">Completed Stages</Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            {completedStages.map(stage => (
              <Box border={1} borderRadius={2} padding={2} key={stage.id}>
                <Typography variant="h6">{stage.name}</Typography>
                <Button variant="outlined" color="secondary" onClick={() => {
                  dispatch(updateStageStatus({ id: stage.id, status: 'ongoing' }));
                }}>
                  Move to Ongoing
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => dispatch(removeStage(stage.id))}>
                  Remove
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProgressPage;
