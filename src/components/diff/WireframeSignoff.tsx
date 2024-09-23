import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const WireframeSignoff: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Wireframe Sign-off
      </Typography>
      <Button variant="contained" color="primary" href="/files/wireframe_signoff.pdf" download>
        Download Wireframe Sign-off Form
      </Button>
    </Container>
  );
};

export default WireframeSignoff;
