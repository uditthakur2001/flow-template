import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const WireframeAlignment: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Wireframe Alignment
      </Typography>
      <Button variant="contained" color="primary" href="/files/wireframe_alignment.pdf" download>
        Download Wireframe Alignment Document
      </Button>
    </Container>
  );
};

export default WireframeAlignment;
