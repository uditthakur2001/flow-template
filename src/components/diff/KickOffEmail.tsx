import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const KickoffEmail: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Project Kick-off Email
      </Typography>
      <Button variant="contained" color="primary" href="/files/project_kickoff_email.docx" download>
        Download Kick-off Email Template
      </Button>
    </Container>
  );
};

export default KickoffEmail;
