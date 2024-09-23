import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const GuidelinesSignoff: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Sign-off on Guidelines
      </Typography>
      <Button variant="contained" color="primary" href="/files/guidelines_signoff.pdf" download>
        Download Guidelines Sign-off Form
      </Button>
    </Container>
  );
};

export default GuidelinesSignoff;
