import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const ProjectSignoff: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Project Sign-off
      </Typography>
      <Button variant="contained" color="primary" href="/files/project_signoff.docx" download>
        Download Project Sign-off Form
      </Button>
    </Container>
  );
};

export default ProjectSignoff;
